import { useData } from "../context/DataContext";
import styles from "./MonthButton.module.css";

function monthName(value: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + value);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

const MonthButton = ({ value }: { value: number }) => {
  const {setInicio, setFinal} = useData();

  function setMonth(value: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + value);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return <button className={styles.btn} onClick={() => setMonth(value)}>{monthName(value)}</button>;
};

export default MonthButton;
