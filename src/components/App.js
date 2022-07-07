import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "../styles/ResetCSS";
import Home from "./Home";
import Header from "./Header/Header.jsx";
import NavMenu from "./Navbar/Nav_menu.jsx";
import MyAcount from "./MyAcount/MyAcount.jsx";
import Us from "./Us/Us.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavMenu />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyAcount" element={<MyAcount />} />
        <Route path="/Us" element={<Us />} />
      </Routes>
      <ResetCSS />
    </BrowserRouter>
  );
}
