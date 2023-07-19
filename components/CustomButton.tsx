"use client";
import React from "react";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  btnType = "button",
  containerStyles,
  handleClick,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles} ${textStyles}`}
      disabled={false}
      type={btnType}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
      {rightIcon && (
        <Image
          src={rightIcon}
          width={20}
          height={20}
          alt='button logo'
        />
      )}
    </button>
  );
};

export default CustomButton;
