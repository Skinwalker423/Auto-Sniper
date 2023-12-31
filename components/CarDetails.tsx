"use client";

import { CarProps } from "@/types";
import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({
  isOpen,
  closeModal,
  car,
}: CarDetailsProps) => {
  const carMap = Object.entries(car).map(
    ([keys, values]) => {
      return (
        <div
          className='flex justify-between items-center gap-5 w-full text-right'
          key={keys}
        >
          <h4 className='text-grey capitalize'>
            {keys.replace("_", " ")}
          </h4>
          <p>{values}</p>
        </div>
      );
    }
  );
  console.log("keys", carMap);

  return (
    <>
      <Transition as={Fragment} show={isOpen} appear>
        <Dialog
          as='div'
          className={"relative z-10"}
          onClose={closeModal}
        >
          <Transition.Child
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>
          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                className={"w-full"}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  className={
                    "relative w-full max-h-[90vh] bg-white max-w-6xl overflow-y-auto transform rounded-2xl text-left shadow-xl transition-all flex flex-col gap-5 p-6"
                  }
                >
                  <button
                    type='button'
                    onClick={closeModal}
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                  >
                    <Image
                      src={"/close.svg"}
                      width={20}
                      height={20}
                      alt='close icon'
                      className='object-contain'
                    />
                  </button>
                  <div className='flex flex-1 flex-col gap-3'>
                    <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                      <Image
                        src={generateCarImageUrl(car)}
                        fill
                        priority
                        className='object-contain'
                        alt='car photo'
                      />
                    </div>
                    <div className='flex gap-3'>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageUrl(
                            car,
                            "29"
                          )}
                          fill
                          priority
                          className='object-contain'
                          alt='car top view'
                        />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageUrl(
                            car,
                            "33"
                          )}
                          fill
                          priority
                          className='object-contain'
                          alt='car side view'
                        />
                      </div>
                      <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={generateCarImageUrl(
                            car,
                            "13"
                          )}
                          fill
                          priority
                          className='object-contain'
                          alt='car rear view'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-1 flex-col gap-2'>
                    <h2 className='text-xl capitalize font-bold'>
                      {car.make} {car.model}
                    </h2>
                    {carMap}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
