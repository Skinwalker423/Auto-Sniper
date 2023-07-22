"use client";

import { FormEvent, FormEventHandler } from "react";

import React, { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const SearchButton = ({
    otherClasses,
  }: {
    otherClasses?: string;
  }) => {
    return (
      <button
        type='button'
        className={`-ml-3 z-10 ${otherClasses}`}
      >
        <Image
          src='/magnifying-glass.svg'
          alt='magnifying glass'
          width={40}
          height={40}
          className='object-contain'
        />
      </button>
    );
  };

  return (
    <form
      onSubmit={handleSearch as FormEventHandler}
      className='searchbar'
    >
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
    </form>
  );
};

export default SearchBar;
