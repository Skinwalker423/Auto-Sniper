"use client";

import { CustomFilterProps, OptionProps } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, {
  Fragment,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";

const CustomFilter = ({
  title,
  options,
}: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  const router = useRouter();

  const updatedSearchParams = (selected: OptionProps) => {
    const searchParams = new URLSearchParams(
      window.location.search
    );
    console.log(selected.value);
    const newUrl = `${
      window.location.pathname
    }?${searchParams.toString()}&${title.toLocaleLowerCase()}=${
      selected.value
    }#search-header`;

    router.push(newUrl);
  };

  useEffect(() => {
    if (selected.value !== "") {
      updatedSearchParams(selected);
    }
  }, [selected]);

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => setSelected(e)}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className={"custom-filter__btn"}>
            <span className='block truncate'>
              {selected.title}
            </span>
            <Image
              src={"/chevron-up-down.svg"}
              width={20}
              height={20}
              alt='chevron up/down'
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opactity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options
              className={"custom-filter__options"}
            >
              {options.map((option) => {
                return (
                  <Listbox.Option
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 px-4 ${
                        active
                          ? "bg-primary-blue text-white"
                          : "text-gray-900"
                      }`
                    }
                    key={option.title}
                    value={option}
                  >
                    {({ selected }) => {
                      return (
                        <span
                          className={`block truncate ${
                            selected
                              ? "font-medium"
                              : "font-normal"
                          }`}
                        >
                          {option.title}
                        </span>
                      );
                    }}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
