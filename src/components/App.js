import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ResetCSS from "../styles/ResetCSS";
import Header from "./Header/Header.jsx";
import NavMenu from "./Navbar/Nav_menu.jsx";
import MyAcountLogin from "./MyAcount/MyAcountLogin";
import MyAcountcadastro from "./MyAcount/MyacountCadastro.jsx";
import Adress from "./Adress/Adress.jsx";
import Us from "./Us/Us.jsx";
import AdressContext from "../contexts/AdressContext";
import UserContext from "../contexts/UserContext";
import CartContext from "../contexts/CartContext";
import Home from "./Home/Home.jsx";
import CategoryPages from "./CategoryPages/CategoryPages.jsx";
import Cart from "./ShoppingCart/ShoppingCart.jsx";
import ProductPage from "./ProductPage/ProductPage.jsx";
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
              <Route path="/login" element={<MyAcountLogin />} />
              <Route path="/cadastro" element={<MyAcountcadastro />} />
              <Route path="/dadoscompra" element={<Adress />} />
              <Route path="/quemsomos" element={<Us />} />
              <Route path="/:category" element={<CategoryPages />} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/:category/:product" element={<ProductPage />} />
            </Routes>
            <ResetCSS />
          </BrowserRouter>
        </CartContext.Provider>
      </UserContext.Provider>
    </AdressContext.Provider>
  );
}
