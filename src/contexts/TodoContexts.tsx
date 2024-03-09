import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Todo } from "../models/todo";
interface Props {
  children: React.ReactNode | React.ReactNode[];
}
interface Values {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

const TodoContext = createContext({} as Values);

export const TodoProvider = ({ children }: Props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const values = { todos, setTodos } as Values;

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;
