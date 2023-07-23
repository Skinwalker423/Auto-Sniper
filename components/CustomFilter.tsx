"use client";

import React from "react";

interface CustomFilterProps {
  title: string;
  options: { title: string; value: string }[];
}

const CustomFilter = ({ title }: CustomFilterProps) => {
  return <div>CustomFilter</div>;
};

export default CustomFilter;
