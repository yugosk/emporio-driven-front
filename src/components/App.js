import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "../styles/ResetCSS";
import Home from "./Home";
import Header from "./Header";
import NavMenu from "./Nav_menu";
import MyAcount from "./MyAcount";
import Us from "./Us";


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
