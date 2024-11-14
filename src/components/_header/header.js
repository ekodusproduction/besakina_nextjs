"use client";
import React from "react";
import Image from "next/image";
import { FcAdvertising } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-7 py-4 border-b shadow-sm">
      <Image
        src="https://www.besakina.com/logo.png"
        alt="besakina-logo"
        width={100} // Set the natural width for smaller screens
        height={40} // Set the natural height for smaller screens
        // sizes="(max-width: 376px) 3vw, (max-width: 640px) 10vw, 8vw"
        // className="object-contain"
      />

      <div className="flex items-center justify-center">
        <input
          className="peer w-full max-w-lg min-w-[150px] sm:min-w-[300px] lg:min-w-[400px] bg-stone-100 sm:px-4 sm:py-2.5  focus:outline-none rounded-l-sm px-2 py-1 border focus:ring-1 focus:ring-offset-1 focus:ring-logoBlue"
          type="text"
          placeholder="Search for Advertise, Bussiness or Service"
        />
        <button className="bg-logoBlue p-[0.30rem] peer-focus:py-[0.43rem] text-slate-100 rounded-r-sm">
          <IoIosSearch className="text-stone-200 text-[23px] sm:text-4xl" />
        </button>
      </div>
      {/* </div> */}
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-4">
        <button className="bg-logoBlue px-3 py-1 rounded-lg font-semibold text-stone-100 text-sm  focus:outline-none focus:ring-2 focus:ring-logoBlue/70 inline-flex gap-2">
          Post an Advertisement
          <FcAdvertising size={20} className="text-stone-200" />
        </button>

        <FaUserCircle size={32} className="text-logoBlue/60" />
      </div>
    </header>
  );
}
