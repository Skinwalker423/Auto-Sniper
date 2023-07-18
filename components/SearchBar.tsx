"use client";

import { FormEvent, FormEventHandler } from "react";

import React, { useState } from "react";
import { SearchManufacturer } from "./";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <form
      onSubmit={handleSearch as FormEventHandler}
      className='searchbar'
    >
      <div className='search__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
