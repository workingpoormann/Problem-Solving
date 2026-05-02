import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import "./index.css";
import ProblemCreate from "./ProblemCreate.tsx";
import ProblemDetail from "./ProblemDetail.tsx";
import ProblemEdit from "./ProblemEdit.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/problem">
          <Route path="create" element={<ProblemCreate />} />
          <Route path=":problemId" element={<ProblemDetail />} />
          <Route path="edit/:problemId" element={<ProblemEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
