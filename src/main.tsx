import React from "react";
import ReactDOM from "react-dom/client";
import TodoListPage from "./pages/TodoListPage.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoListPage />
  </React.StrictMode>
);
