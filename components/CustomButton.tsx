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
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            className='object-contain'
            src={rightIcon}
            width={20}
            height={20}
            alt='button logo'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
