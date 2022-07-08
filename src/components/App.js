import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "../styles/ResetCSS";
import Home from "./Home";
import ProductPage from "./ProductPage/ProductPage.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos/:name" element={<ProductPage />} />
      </Routes>
      <ResetCSS />
    </BrowserRouter>
  );
}


