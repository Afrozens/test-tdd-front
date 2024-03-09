import React, { FC } from "react";

type Props = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const CustomButton: FC<Props> = ({ children, ...props }: Props) => {
  return (
    <button
      className="btn-main-translate py-2 px-4 flex justify-center gap-2 text-sm font-semibold items-center transition-all border-0 rounded-[20px]"
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
