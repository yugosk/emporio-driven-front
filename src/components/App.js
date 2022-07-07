import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "../styles/ResetCSS";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "../components/Home/Home.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ResetCSS />
    </BrowserRouter>
  );
}
