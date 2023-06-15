import {
  MouseEventHandler,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
