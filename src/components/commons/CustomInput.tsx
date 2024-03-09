import React from "react";
import type {
  FieldValues,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";

type AttributeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = {
  id: string;
  label: string;
  name?: string;
  classAditional?: string;
  register?: UseFormRegister<FieldValues>;
  error?: string | undefined;
  rules?: RegisterOptions;
  isRequired?: boolean;
} & AttributeProps;

const CustomInput = ({
  label,
  id,
  isRequired,
  classAditional,
  name,
  rules,
  error,
  defaultValue,
  register,
  ...props
}: Props) => {
  return (
    <div
      className={`${
        classAditional || ""
      } flex items-center justify-center flex-col w-full`}
    >
      <label className="label-primary" htmlFor={id}>
        {label}
        {isRequired && <b className="text-red-500 ">*</b>}
      </label>
      <div className="relative w-full">
        <input
          id={name ?? id}
          required={isRequired}
          defaultValue={defaultValue}
          className="pr-4 custom-input"
          {...(register && register(name, rules))}
          {...props}
          name={name}
        />
      </div>
      {error && (
        <p className="mt-1 ml-1 text-xs text-red-500 self-start ">{error}</p>
      )}
    </div>
  );
};

export default CustomInput;
