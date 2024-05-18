import Input from "./Input";
import { useData } from "../context/DataContext";

const InputRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(event) => event.preventDefault()}>
      <Input
        id="inicio"
        label="Inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <Input
        id="final"
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default InputRange;
