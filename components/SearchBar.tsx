"use client";

import { FormEvent, FormEventHandler, use } from "react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();
  const updatedSearchParams = (
    model: string,
    manufacturer: string
  ) => {
    const searchParams = new URLSearchParams(
      window.location.search
    );
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newUrl = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newUrl);
  };

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");

    if (manufacturer === "" && model === "") {
      return alert("search field is empty");
    } else {
      updatedSearchParams(
        model.toLowerCase(),
        manufacturer.toLowerCase()
      );
    }
  };

  const SearchButton = ({
    otherClasses,
  }: {
    otherClasses?: string;
  }) => {
    return (
      <button
        type='submit'
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
    <form onSubmit={handleSearch} className='searchbar'>
      <div className='searchbar__item'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='searchbar__item'>
        <Image
          src={"/model-icon.png"}
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          onChange={(e) => {
            setModel(e.target.value);
          }}
          type='text'
          name='model'
          value={model}
          placeholder='Corolla'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;
