"use client";
import React, {
  EventHandler,
  MouseEventHandler,
} from "react";

type CustomButtonProps = {
  title: string;
  containerStyles: string;
  handleClick: MouseEventHandler;
};

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={"button"}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
