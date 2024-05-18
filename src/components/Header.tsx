import { useEffect, useState } from "react";
import InputRange from "./InputRange";
import Month from "./Month";
import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [title, setTitle] = useState("Resumo");
  const location = useLocation();

  useEffect(() => {
    switch(location.pathname) {
      case '/':
        setTitle("Resumo");
        document.title = "Fintech - Resumo"
        break
      case '/vendas': 
        setTitle("Vendas");
        document.title = "Fitech - Vendas"
        break
    }
  }, [location])

  return (
    <header className="mb">
      <div className={`mb ${styles.daterange}`}>
        <InputRange />
        <h1 className={`box bg-3`}>{title}</h1>
      </div>

      <Month />
    </header>
  );
};

export default Header;
