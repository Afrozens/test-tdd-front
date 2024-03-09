import { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import CustomButton from "../../commons/CustomButton";
import CustomInput from "../../commons/CustomInput";
import { Todo } from "../../../models/todo";
import ValidateError from "../../commons/ValidateError";
import TodoTemplate from "./TodoTemplate";
import { useTodos } from "../../../hooks/useTodos";

const TodoComponent = () => {
  const [error, setError] = useState("");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Pick<Todo, "title">>();
  const { todos, setTodos } = useTodos();

  const onSubmit: SubmitHandler<Pick<Todo, "title">> = (data) => {
    setError("");
    if (data) {
      setTodos([...todos, { ...data, isCompleted: false, id: uuid() }]);
      reset({
        title: "",
      });
    } else {
      setError("there is error for input value is nothing");
    }
  };

  const onClear = () => {
    const data = todos.filter((task) => !task.isCompleted);
    console.log(data, "data");
    setTodos(data);
  };
  return (
    <section className="w-full min-h-screen px-14 max-w-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex gap-2 items-end border-b pb-6 border-gray-950"
      >
        <CustomInput
          classAditional="flex-grow"
          id="saveInput"
          label="Write task"
          error={errors.title?.message}
          rules={{
            required: true,
          }}
          isRequired
          name="title"
          placeholder="Write task..."
          register={register as unknown as UseFormRegister<FieldValues>}
        />
        <CustomButton className="btn-primary w-20" type="submit">
          Save
        </CustomButton>
        <CustomButton
          onClick={onClear}
          className="btn-primary w-20"
          type="button"
        >
          Clear
        </CustomButton>
        <ValidateError error={error} />
      </form>
      <TodoTemplate dataTodo={todos} />
    </section>
  );
};

export default TodoComponent;
