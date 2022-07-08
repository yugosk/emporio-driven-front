import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "../styles/ResetCSS";
import Home from "./Home";
import Header from "./Header/Header.jsx";
import NavMenu from "./Navbar/Nav_menu.jsx";
import MyAcount from "./MyAcount/MyAcount.jsx";
import Adress from "./Adress/Adress.jsx";
import Us from "./Us/Us.jsx";
export default function App() {
  return (
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
  );
}
