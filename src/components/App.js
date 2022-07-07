import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "../styles/ResetCSS";
import Home from "./Home";
import Footer from "./Footer";
import Header from "./Header";
import NavMenu from "./Nav_menu";
import MyAcount from "./MyAcount";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavMenu />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MyAcount" element={<MyAcount />} />
      </Routes>
      
      <ResetCSS />
    </BrowserRouter>
  );
}
