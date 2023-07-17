import {
  MouseEventHandler,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  Dispatch,
  SetStateAction,
} from "react";

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit" | "reset";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
