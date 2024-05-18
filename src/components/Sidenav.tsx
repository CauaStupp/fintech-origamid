import Summary from "../assets/icons/resumo.svg";
import Sallings from "../assets/icons/vendas.svg";
import Webhooks from '../assets/icons/webhooks.svg'
import Configs from '../assets/icons/configuracoes.svg'
import Contact from '../assets/icons/contato.svg'
import Leave from '../assets/icons/sair.svg'
import Fintech from "../assets/FintechSVG";
import styles from './Sidenav.module.css'
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className={`box bg-3 ${styles.sidenav}`}>
      <Fintech title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={Summary} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={Sallings} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={Webhooks} alt="" />
          </span>
          <NavLink to='/'>Webhooks</NavLink>
        </li>
        <li>
          <span>
            <img src={Configs} alt="" />
          </span>
          <NavLink to='/'>Configurações</NavLink>
        </li>
        <li>
          <span>
            <img src={Contact} alt="" />
          </span>
          <NavLink to='/'>Contato</NavLink>
        </li>
        <li>
          <span>
            <img src={Leave} alt="" />
          </span>
          <NavLink to='/'>Sair</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
