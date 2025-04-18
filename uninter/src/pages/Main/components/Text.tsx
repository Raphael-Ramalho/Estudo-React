import React from "react";

const Text = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>) => {
  const defaultStyle = "text-[0.5rem] font-bold";
  return (
    <span {...props} className={`${defaultStyle} ${className}`}>
      {children}
    </span>
  );
};

export default Text;
