import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "../styles/ResetCSS";
import Home from "./Home";
import Header from "./Header/Header.jsx";
import NavMenu from "./Navbar/Nav_menu.jsx";
import MyAcount from "./MyAcount/MyAcount.jsx";
import Adress from "./Adress/Adress.jsx";
import Us from "./Us/Us.jsx";
import AdressContext from "./contexts/AdressContext";
import { useState } from "react";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [dataadress, setDataAdress] = useState([]);
  const [dados, setDados] = useState([])

  return (
    <AdressContext.Provider value={{dataadress, setDataAdress}}>
      <UserContext.Provider value={{dados, setDados}}>
    <BrowserRouter>
      <Header />
      <NavMenu />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minhaconta" element={<MyAcount />} />
        <Route path="/dadoscompra" element={<Adress />} />
        <Route path="/quemsomos" element={<Us />} />
      </Routes>
      <ResetCSS />
    </BrowserRouter>
    </UserContext.Provider>
    </AdressContext.Provider>
  );
}
