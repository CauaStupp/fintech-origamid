import { NavLink } from "react-router-dom";
import { SellingI } from "../context/DataContext";
import styles from "./SellingItem.module.css";

const SellingItem = ({ selling }: { selling: SellingI }) => {
  return (
    <div className={`box ${styles.selling}`}>
      <NavLink to={`/vendas/${selling.id}`}>{selling.id}</NavLink>
      <div>{selling.nome}</div>
      <div>
        {selling.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SellingItem;
