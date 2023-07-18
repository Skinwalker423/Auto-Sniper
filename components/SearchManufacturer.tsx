"use client";
import { useState } from "react";
import { SearchManufacturerProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { FormEvent, Fragment } from "react";
import { manufacturers } from "@/constants";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((make) =>
          make
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(
              query.toLowerCase().replace(/\s+/g, "")
            )
        );

  console.log("filtered list", filteredManufacturers);

  const handleSearchChange = (
    e: FormEvent<HTMLInputElement>
  ) => {
    const newQuery = e.currentTarget.value;
    console.log(newQuery);
    setQuery(newQuery);
  };

  return (
    <div className='search-manufacturer'>
      <Combobox
        value={manufacturer}
        onChange={setManufacturer}
      >
        <div className='relative w-full'>
          <Combobox.Button
            className={"absolute top-[14px]"}
          >
            <Image
              src={"/car-logo.svg"}
              width={20}
              height={20}
              className='ml-4'
              alt='Car Logo'
            />
          </Combobox.Button>
          <Combobox.Input
            className={"search-manufacturer__input"}
            placeholder='Volkswagon'
            displayValue={(manufacturer: string) =>
              manufacturer
            }
            onChange={handleSearchChange}
          />
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-50'
            leaveTo='opactity-0'
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 &&
              query !== "" ? (
                <Combobox.Option
                  className={"search-manufacturer__option"}
                  value={query}
                >
                  Nothing found
                </Combobox.Option>
              ) : (
                filteredManufacturers.map(
                  (manufacturer, i) => {
                    return (
                      <Combobox.Option
                        className={({ active }) =>
                          `search-manufacturer__option ${
                            active
                              ? "bg-primary-blue text-white"
                              : "text-gray-900"
                          }`
                        }
                        key={manufacturer}
                        value={manufacturer}
                      >
                        {({ active, selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected
                                  ? "font-medium"
                                  : "font-normal"
                              }`}
                            >
                              {manufacturer}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active
                                    ? "text-white"
                                    : "text-teal-600"
                                }`}
                              ></span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    );
                  }
                )
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
