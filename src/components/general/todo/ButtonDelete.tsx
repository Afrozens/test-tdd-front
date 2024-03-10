import { useTodos } from "../../../hooks/useTodos";
import CustomButton from "../../commons/CustomButton";

const ButtonDelete = ({ id }: { id: string }) => {
  const { setTodos, todos } = useTodos();
  const onDelete = (id: string) => {
    console.log(id, "id");
    const data = todos.filter((task) => task.id !== id);
    console.log(data);
    setTodos(data);
  };
  return (
    <CustomButton
      onClick={() => onDelete(id)}
      aria-label={`delete-${id}`}
      className="btn-primary w-20 bg-red-500"
      type="button"
    >
      Delete
    </CustomButton>
  );
};

export default ButtonDelete;
