"use client";

import { useEffect, useRef, useState } from "react";

import axios from "axios";
import InlineSVG from "react-inlinesvg";
import { IoFilter } from "react-icons/io5";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { _GET } from "@/lib/axiosReq";

function Categories() {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    fetchCategories();
  }, []);

  //   Fetch Categories from API
  async function fetchCategories() {
    try {
      const response = await _GET("category");
      //   console.log(response.data);
      setCategories(response.data);
    } catch (error) {
      console.log("Error fetching data " + error.message);
    } finally {
      // For loading state
    }
  }

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  }

  return (
    <div className="relative mx-1 flex items-center justify-between gap-6 px-4 sm:mx-14 sm:gap-14">
      {/* Left  scroll */}
      <button className="absolute left-0 z-10 hidden h-full place-items-center bg-white p-2 text-xl text-stone-400 hover:text-black sm:flex">
        <FaAngleLeft />
      </button>

      {/* Categories  */}
      <ul
        ref={scrollRef}
        className="scrollbar-hidden mt-4 flex overflow-x-scroll sm:mt-7"
      >
        {categories.map((category) => (
          <CategoryItem key={category["_id"]} category={category} />
        ))}
      </ul>

      {/* Right scroll button */}
      <button
        // onClick={scrollRight}
        className="absolute right-0 z-10 hidden h-full items-center justify-center bg-white p-2 text-xl text-gray-500 hover:text-black sm:flex"
      >
        <FaAngleRight />
      </button>

      {/* Filter button */}
      <div className="mt-2 flex cursor-pointer items-center gap-3 rounded-full border px-3 py-2 hover:border-black hover:bg-stone-200 sm:rounded-lg">
        <IoFilter />
        <button className="hidden sm:block">Filters</button>
      </div>
    </div>
  );
}

function CategoryItem({ category }) {
  return (
    <li className="flex cursor-pointer flex-col items-center gap-1 whitespace-nowrap px-3 py-1 text-xs hover:border-b-2 hover:border-stone-300">
      <span>
        <InlineSVG src={category.icon} className="h-4 w-4 text-stone-500" />
      </span>
      <span>{category.name}</span>
    </li>
  );
}

export default Categories;
