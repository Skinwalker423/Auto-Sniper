"use client";

import { CustomFilterProps } from "@/types";
import { Listbox } from "@headlessui/react";
import React from "react";

const CustomFilter = ({
  title,
  options,
}: CustomFilterProps) => {
  return (
    <div className='w-fit'>
      <Listbox>
        <div className='relative w-fit z-10'>
          <Listbox.Button className={"custom-filter__btn"}>
            {title}
          </Listbox.Button>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
