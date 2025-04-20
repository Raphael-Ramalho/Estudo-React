import React from "react";

const Block = ({
  title,
  text,
  isVertical,
  className,
}: {
  title: string;
  text: string;
  isVertical?: boolean;
  className?: string;
}) => {
  const customStyle = isVertical ? "flex-col" : "flex-row";
  return (
    <div className={`flex text-[0.7rem] ${customStyle} ${className}`}>
      <span className="font-bold pr-[0.2rem]">{title}:</span>
      <span >{text}</span>
    </div>
  );
};

export default Block;
