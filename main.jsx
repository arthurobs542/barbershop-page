import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./src/pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Servicos from "./src/pages/Servicos.jsx";
import logo from "/vite.svg";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/ser" element={<Servicos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
