import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetCSS from "../styles/ResetCSS";
import Home from "./Home";

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
