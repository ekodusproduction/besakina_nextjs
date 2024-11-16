"use client";

import { globalParams } from "@/utils/_serverAPI/ServerURL";
import { useEffect, useRef, useState } from "react";

import axios from "axios";
import InlineSVG from "react-inlinesvg";
import { IoFilter } from "react-icons/io5";

function Categories() {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef();

  useEffect(() => {
    fetchCategories();
  }, []);

  //   Fetch Categories from API
  async function fetchCategories() {
    try {
      const {
        data: { data: categoryData },
      } = await axios.get(`${globalParams}/api/category`);
      //   console.log(categoryData);
      setCategories(categoryData);
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
      <button className="absolute left-0"></button>

      {/* Categories  */}
      <ul
        ref={scrollRef}
        className="scrollbar-hidden mt-4 flex overflow-x-scroll sm:mt-7"
      >
        {categories.map((category) => (
          <CategoryItem key={category["_id"]} category={category} />
        ))}
      </ul>

      {/* Filter Button */}
      <button
        // onClick={() => console.log("HHHH")}
        className="mt-2 cursor-pointer gap-3 rounded-full border px-3 py-2 hover:border-black hover:bg-stone-200 sm:flex sm:place-items-center sm:rounded-lg"
      >
        <IoFilter className="text-2xl" />
        <span className="hidden sm:inline">Filters</span>
      </button>
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
