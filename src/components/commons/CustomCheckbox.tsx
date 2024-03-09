type AttributeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = {
  id: string;
  label: string;
  name: string;
} & AttributeProps;

const CustomCheckbox = ({ label, name, defaultChecked, ...props }: Props) => {
  return (
    <>
      <div className="checkbox-btn">
        <label htmlFor={name} className="switch">
          <input
            required={false}
            aria-label={label}
            defaultChecked={defaultChecked}
            type="checkbox"
            {...props}
            name={name}
          />
          <span className="slider"></span>
        </label>
      </div>
    </>
  );
};

export default CustomCheckbox;
