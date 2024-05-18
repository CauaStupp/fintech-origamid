import SellingItem from "../components/SellingItem";
import { useData } from "../context/DataContext";

const Sellings = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}><SellingItem selling={item}/></li>
      ))}
    </ul>
  );
};

export default Sellings;
