import { Todo } from "../../../models/todo";
import Task from "./Task";

const TodoTemplate = ({ dataTodo }: { dataTodo: Todo[] }) => {
  return (
    <>
      {dataTodo.map((task, index) => (
        <Task task={task} key={index} index={index} />
      ))}
    </>
  );
};

export default TodoTemplate;
