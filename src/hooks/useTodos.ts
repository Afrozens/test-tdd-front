import { useContext } from "react";
import TodoContext from "../contexts/TodoContexts";

export function useTodos() {
  return useContext(TodoContext);
}
