"use client";
import React from "react";

type CustomButtonProps = {
  title: string;
  containerStyles: string;
};

const CustomButton = ({
  title,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={"button"}
      onClick={() => {}}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
