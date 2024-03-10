import { ChangeEvent, useState } from "react";
import { Todo } from "../../../models/todo";
import CustomCheckbox from "../../commons/CustomCheckbox";
import { useTodos } from "../../../hooks/useTodos";
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import CustomInput from "../../commons/CustomInput";
import { useTodoHandle } from "../../../hooks/useTodoHandle";

interface Props {
  index: number;
  task: Todo;
}

const Task = ({ task, index }: Props) => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { handleEdit: handleEditTask } = useTodoHandle();
  const { setTodos, todos } = useTodos();
  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setIsCompleted(e.target.checked);
    const taskUpdate = handleEditTask(
      task.id,
      { isCompleted: !isCompleted },
      todos
    );
    setTodos(taskUpdate);
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const taskUpdate = handleEditTask(
      task.id,
      { title: e.target.value },
      todos
    );
    setTodos(taskUpdate);
  };
  return (
    <div
      className={`animate-fade-down animate-ease-out animate-delay-[${
        ((index + 1) * 100) / 2
      }ms] w-full flex gap-4 items-center truncate justify-center`}
    >
      <CustomCheckbox
        onChange={handleChangeCheckbox}
        label={task.id}
        id={task.id}
        name={task.id}
      />
      {isEdit ? (
        <CustomInput
          classAditional="flex-grow mb-2"
          id="saveInput"
          label="Edit task"
          value={task.title}
          onChange={handleChangeInput}
          name="title"
          placeholder="Write task..."
        />
      ) : (
        <span
          className={`${
            isCompleted ? "line-through text-gray-400" : ""
          } text-xl capitalize flex-grow truncate`}
        >
          {task.title}
        </span>
      )}
      <div className="self-end flex gap-2 mb-2">
        <ButtonEdit
          isEdit={isEdit}
          handleEdit={handleEdit}
          id={`edit-${task.id}`}
        />
        <ButtonDelete id={task.id} />
      </div>
    </div>
  );
};

export default Task;
