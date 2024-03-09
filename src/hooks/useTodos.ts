import { useContext } from "react";
import UserContext from "../contexts/TodoContexts";

export function useTodos() {
  return useContext(UserContext);
}
