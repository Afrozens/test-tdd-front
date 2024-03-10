import CustomButton from "../../commons/CustomButton";

interface Props {
  isEdit: boolean;
  handleEdit: () => void;
  id: string;
}

const ButtonEdit = ({ isEdit, handleEdit, id }: Props) => {
  return (
    <>
      {isEdit ? (
        <CustomButton
          onClick={handleEdit}
          className="btn-primary w-20 bg-green-500"
          type="button"
        >
          Save
        </CustomButton>
      ) : (
        <CustomButton
          aria-label={id}
          onClick={handleEdit}
          className="btn-primary w-20 bg-orange-400"
          type="button"
        >
          Edit
        </CustomButton>
      )}
    </>
  );
};

export default ButtonEdit;
