import { Todo } from "../models/todo";

export function useTodoHandle() {
  const handleEdit = (id: string, dataTask: Partial<Todo>, todos: Todo[]) => {
    const taskUpdate = todos.map((taskTodo) => {
      if (id === taskTodo.id) {
        const data = {
          ...taskTodo,
          ...dataTask,
        };
        taskTodo = data;
      }
      return taskTodo;
    });
    return taskUpdate;
  };

  return {
    handleEdit,
  };
}
