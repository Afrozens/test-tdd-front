import { Todo } from "../../../models/todo";
import Task from "./Task";

const TodoTemplate = ({ dataTodo }: { dataTodo: Todo[] }) => {
  return (
    <div className="w-full mt-5 flex flex-col gap-4">
      {dataTodo.map((task, index) => (
        <Task task={task} key={index} index={index} />
      ))}
    </div>
  );
};

export default TodoTemplate;
