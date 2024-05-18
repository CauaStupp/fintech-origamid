import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./context/DataContext";
import Sellings from "./pages/Sellings";
import Summary from "./pages/Summary";
import Selling from "./pages/Selling";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />}/>
              <Route path="/vendas" element={<Sellings />}/>
              <Route path="/vendas/:id" element={<Selling />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
