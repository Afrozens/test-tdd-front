import { ChangeEvent, useState } from "react";
import { Todo } from "../../../models/todo";
import CustomCheckbox from "../../commons/CustomCheckbox";
import { useTodos } from "../../../hooks/useTodos";

interface Props {
  index: number;
  task: Todo;
}

const Task = ({ task, index }: Props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const { setTodos, todos } = useTodos();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCompleted(e.target.checked);
    const taskUpdate = todos.map((taskTodo) => {
      if (task.id === taskTodo.id) {
        const data = {
          ...task,
          isCompleted: !isCompleted,
        };
        taskTodo = data;
      }
      return taskTodo;
    });
    setTodos(taskUpdate);
  };
  return (
    <div
      className={`animate-fade-down animate-ease-out animate-delay-[${
        ((index + 1) * 100) / 2
      }ms] w-full flex gap-4 items-center`}
    >
      <CustomCheckbox
        onChange={handleChange}
        label={task.title}
        id={task.title}
        name={task.title}
      />
      <span
        className={`${
          isCompleted ? "line-through text-gray-400" : ""
        } text-xl capitalize `}
      >
        {task.title}
      </span>
    </div>
  );
};

export default Task;
