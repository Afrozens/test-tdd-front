import {
  FieldValues,
  SubmitHandler,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { dataTodo } from "../../../stub/data";
import CustomButton from "../../commons/CustomButton";
import CustomInput from "../../commons/CustomInput";
import { Todo } from "../../../models/todo";
import { useState } from "react";
import ValidateError from "../../commons/ValidateError";
import TodoTemplate from "./TodoTemplate";

const TodoComponent = () => {
  const [error, setError] = useState("");
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<Pick<Todo, "title">>();

  const onSubmit: SubmitHandler<Pick<Todo, "title">> = (data) => {
    setError("");
    if (data) {
      dataTodo.push({ ...data, isCompleted: false });
      reset({
        title: "",
      });
    } else {
      setError("there is error for input value is nothing");
    }
  };

  const onClear = () => {
    dataTodo.filter((task) => !task.isCompleted);
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
      <TodoTemplate dataTodo={dataTodo} />
    </section>
  );
};

export default TodoComponent;
