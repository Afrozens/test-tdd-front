import React from "react";
import ReactDOM from "react-dom/client";
import TodoListPage from "./pages/TodoListPage.tsx";
import "./styles/index.css";
import { TodoProvider } from "./contexts/TodoContexts.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TodoProvider>
      <TodoListPage />
    </TodoProvider>
  </React.StrictMode>
);
