import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { useFetch } from "../hooks/useFetch";

interface DataContextInterface {
  data: SellingI[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  setInicio: Dispatch<SetStateAction<string>>;
  final: string;
  setFinal: Dispatch<SetStateAction<string>>;
}

export interface SellingI {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: string;
  parcelas: number | null;
  data: string;
}

export const DataContext = createContext<DataContextInterface | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("Fora do escopo do DataContext");
  return context;
};

function getDate(afterDay: number) {
  const date = new Date();
  date.setDate(date.getDate() - afterDay);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDate(30));
  const [final, setFinal] = useState(getDate(0));
  const { data, loading, error } = useFetch<SellingI[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );
  console.log(data);

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}>
      {children}
    </DataContext.Provider>
  );
};
