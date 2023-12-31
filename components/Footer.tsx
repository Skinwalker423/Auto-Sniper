import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
      <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-center gap-6'>
          <Image
            src={"/logo.svg"}
            width={118}
            height={18}
            alt='logo'
            className='object-contain'
          />
          <p className='text-base text-gray-700'>
            Auto Sniper 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className='footer__links'>
          {footerLinks.map((link) => {
            return (
              <div
                key={link.title}
                className='footer__link'
              >
                <h3 className='font-bold text-xl'>
                  {link.title}
                </h3>
                {link.links.map(({ title, url }) => {
                  return (
                    <Link
                      key={title}
                      className='text-base text-gray-500 my-1 hover:text-gray-900'
                      href={url}
                    >
                      {title}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex justify-between items-center flex-wrap mt-10 border-7 border-gray-100 sm:px-16 px-6 py-10'>
        <p>@2023 Auto Sniper. All rights reserved</p>
        <div className='footer__copyrights-link'>
          <Link className='text-gray-500' href={"/"}>
            Privacy Policy
          </Link>
          <Link className='text-gray-500' href={"/"}>
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
