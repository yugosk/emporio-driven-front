import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import ResetCSS from "../styles/ResetCSS";
import Header from "./Header/Header.jsx";
import NavMenu from "./Navbar/Nav_menu.jsx";
import MyAcount from "./MyAcount/MyAcount.jsx";
import Us from "./Us/Us.jsx";
import Home from "../components/Home/Home.jsx";
import Beer from "./CategoryPages/CategoryBeer.jsx";
import Wine from "./CategoryPages/CategoryWine.jsx";
import Spirit from "./CategoryPages/CategorySpirit.jsx";
import Sparkling from "./CategoryPages/CategorySparkling.jsx";
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
          <Route path="/cerveja" element={<Beer />} />
          <Route path="/vinho" element={<Wine />} />
          <Route path="/destilado" element={<Spirit />} />
          <Route path="/espumante" element={<Sparkling />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
        <ResetCSS />
      </BrowserRouter>
    </UserContext.Provider>
  );
}
