import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import Servicos from "./pages/Servicos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ser" element={<Servicos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
