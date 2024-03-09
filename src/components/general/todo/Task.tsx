import { Todo } from "../../../models/todo";

interface Props {
  index: number;
  task: Todo;
}

const Task = ({ task, index }: Props) => {
  return (
    <div
      className={`animate-fade-down animate-ease-out animate-delay-[${
        ((index + 1) * 100) / 2
      }ms] w-full flex items-center`}
    >
      <span>{task.title}</span>
    </div>
  );
};

export default Task;
