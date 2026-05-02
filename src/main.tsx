import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";
import Problem from "./Problem.tsx";
import ProblemCreate from "./ProblemCreate.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/problem/create" element={<ProblemCreate />} />
        <Route path="/problem/:problemId" element={<Problem />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
