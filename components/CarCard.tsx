"use client";
import { CarCardProps } from "@/types";
import React from "react";
import CustomButton from "./CustomButton";

const CarCard = ({ car }: CarCardProps) => {
  const {
    city_mpg,
    year,
    make,
    model,
    transmission,
    drive,
  } = car;

  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {make} {model}
        </h2>
      </div>
    </div>
  );
};

export default CarCard;
