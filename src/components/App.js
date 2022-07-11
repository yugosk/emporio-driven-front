import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ResetCSS from "../styles/ResetCSS";
import Header from "./Header/Header.jsx";
import NavMenu from "./Navbar/Nav_menu.jsx";
import MyAcount from "./MyAcount/MyAcount.jsx";
import Adress from "./Adress/Adress.jsx";
import Us from "./Us/Us.jsx";
import AdressContext from "./contexts/AdressContext";
import UserContext from "./contexts/UserContext";
import CartContext from "./contexts/CartContext";
import { useState } from "react";
import Home from "../components/Home/Home.jsx";
import CategoryPages from "./CategoryPages/CategoryPages.jsx";
import Cart from "./ShoppingCart/ShoppingCart.jsx";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  const [dataadress, setDataAdress] = useState([]);
  const [dados, setDados] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <AdressContext.Provider value={{ dataadress, setDataAdress }}>
      <UserContext.Provider value={{ dados, setDados }}>
        <CartContext.Provider value={{ cart, setCart }}>
          <BrowserRouter>
            <Header />
            <NavMenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/minhaconta" element={<MyAcount />} />
              <Route path="/dadoscompra" element={<Adress />} />
              <Route path="/quemsomos" element={<Us />} />
              <Route path="/:category" element={<CategoryPages />} />
              <Route path="/carrinho" element={<Cart />} />
            </Routes>
            <ResetCSS />
          </BrowserRouter>
        </CartContext.Provider>
      </UserContext.Provider>
    </AdressContext.Provider>
  );
}
