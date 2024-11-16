"use client";

import Image from "next/image";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";

function Header() {
  const [isFocused, setIsFoucsed] = useState(false);

  return (
    <header className="border-b px-5 py-3 sm:px-8 sm:py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative h-10 w-24 sm:h-12 sm:w-28 md:h-14 md:w-32">
          <Image
            src="https://www.besakina.com/logo.png"
            alt="besakina-logo"
            priority={false}
            fill
            sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
            className="object-contain"
          />
        </div>

        <button className="flex items-center gap-3">
          <span className="cursor-pointer text-xs tracking-wide hover:text-logoBlue sm:text-base">
            Post an advertisement
          </span>
          {/* User details */}
          <span className="flex items-center gap-2 rounded-full border px-2 py-1 hover:bg-stone-100 hover:shadow-lg sm:px-4 sm:py-2">
            <CgMenu className="text-xs sm:text-xl" />
            <FaUserCircle className="text-xl text-logoBlue/60 sm:text-2xl" />
          </span>
        </button>
      </div>

      <div className="mx-4 mt-4 flex justify-center md:mx-8">
        <div className="relative w-full max-w-xl rounded-full shadow-md">
          {/* Search field */}
          <input
            type="text"
            placeholder="Search for Advertise, Business or Service"
            className="peer w-full rounded-full border px-2 py-1 pr-6 focus:border-none focus:bg-stone-100 focus:outline-none focus:ring-1 focus:ring-logoBlue sm:px-4 sm:py-2 sm:pr-10"
            onFocus={() => setIsFoucsed(true)}
            onBlur={() => setIsFoucsed(false)}
          />
          {/* Search button inside the input */}
          <button className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full bg-logoBlue px-3 py-1 transition-all duration-300 peer-focus:right-1 peer-focus:space-x-2">
            <IoSearchSharp className="text-xl text-stone-100" />
            <span className="hidden text-xl text-stone-100 group-focus:px-2 sm:inline-block">
              {isFocused && "Search"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
