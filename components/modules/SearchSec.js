import PersianDateInput from "@/utils/PersianDate";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiGlobe } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

function SearchSec() {
  return (
    <div className="w-fit px-10 mx-auto xl:px-2">
      <h2 className="text-center text-xl my-8">
        <span className="text-green-500">تورینو</span> برگزار کننده بهترین تور
        های داخلی و خارجی
      </h2>
      <div className="w-fit flex flex-col border-0 p-4 gap-4  lg:flex-row lg:border-gray-300 lg:border-2 lg:rounded-xl lg:py-0 lg:mx-auto lg:items-center">
        <div className="flex gap-4 xl:flex">
          <div className="input-box">
            <CiLocationOn fontSize={25} color="gray" />
            <input type="text" placeholder="مبدا" className="inputs" />
          </div>
          <div className="input-box">
            <PiGlobe fontSize={25} color="gray" />
            <input type="text" placeholder="مقصد" className="inputs" />
          </div>
        </div>

        <div className="w-auto flex items-center justify-center gap-3 my-2 border-gray-300 py-2 rounded-xl border-2 border-solid lg:border-none">
          <SlCalender fontSize={22} className=" mr-30 lg:m-auto" color="gray" />
          <PersianDateInput />
        </div>
        <button className="w-full bg-green-500 border-none rounded-xl cursor-pointer py-2 text-white hover:bg-green-800  lg:w-[150px] lg:text-lg lg:h-11 lg:py-0 lg:px-4">
          جستجو
        </button>
      </div>
    </div>
  );
}

export default SearchSec;
