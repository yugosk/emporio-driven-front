import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "../styles/ResetCSS";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "../components/Home/Home.jsx";
import Beer from "./CategoryBeer.jsx";
import Wine from "./CategoryWine.jsx";
import Spirit from "./CategorySpirit.jsx";
import Sparkling from "./CategorySparkling.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cerveja" element={<Beer />} />
        <Route path="/vinho" element={<Wine />} />
        <Route path="/destilado" element={<Spirit />} />
        <Route path="/espumante" element={<Sparkling />} />
      </Routes>
      <ResetCSS />
    </BrowserRouter>
  );
}
