import React from "react";

const Button = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const defaultStyle = "bg-[#f5ad18] w-[3.5rem] h-[3.5rem] rounded-xl flex justify-center flex-wrap items-center";
  return (
    <button {...props} className={`${defaultStyle} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
