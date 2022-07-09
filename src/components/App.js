import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "../styles/ResetCSS";
import Home from "./Home";
import Header from "./Header/Header.jsx";
import NavMenu from "./Navbar/Nav_menu.jsx";
import MyAcount from "./MyAcount/MyAcount.jsx";
import Adress from "./Adress/Adress.jsx";
import Us from "./Us/Us.jsx";
import UserContext from "../contexts/UserContext";
import { useState } from "react";

export default function App() {
  const [dados, setDados] = useState([]);

  return (
    <UserContext.Provider value={{dados, setDados}}>
    <BrowserRouter>
      <Header />
      <NavMenu />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minhaconta" element={<MyAcount />} />
        <Route path="/minhaconta/endereco" element={<Adress />} />
        <Route path="/quemsomos" element={<Us />} />
      </Routes>
      <ResetCSS />
    </BrowserRouter>
    </UserContext.Provider>
  );
}
