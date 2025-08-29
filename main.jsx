import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./src/pages/App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StrictMode } from "react";
import AgendamentoPage from "./src/pages/AgendamentoPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/agendar" element={<AgendamentoPage />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
