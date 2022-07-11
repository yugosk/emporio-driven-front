import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ResetCSS from "../styles/ResetCSS";
import Header from "./Header/Header.jsx";
import NavMenu from "./Navbar/Nav_menu.jsx";
import MyAcount from "./MyAcount/MyAcount.jsx";
import Us from "./Us/Us.jsx";
import Home from "../components/Home/Home.jsx";
import CategoryPages from "./CategoryPages/CategoryPages";
import Cart from "./ShoppingCart/ShoppingCart";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import UserContext from "../contexts/UserContext";

export default function App() {
  const [user, setUser] = useState({
    name: "",
    token: "",
    cart: [],
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Header />
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MyAcount" element={<MyAcount />} />
          <Route path="/Us" element={<Us />} />
          <Route path="/:category" element={<CategoryPages />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
        <ResetCSS />
      </BrowserRouter>
    </UserContext.Provider>
  );
}
