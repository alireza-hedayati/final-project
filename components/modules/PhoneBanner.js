import React from "react";
import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { toPersianDigits } from "@/utils/changeNum";

function PhoneBanner() {
  const number = "021-4018";
  return (
    <div className="my-10 relative border-gray-100 border-2  rounded-t-lg w-fit mx-auto lg:flex lg:rounded-2xl">
      <div className=" w-[370px] mx-auto flex justify-center relative h-38  md:mx-auto md:w-auto md:h-40 lg:w-auto lg:h-44">
        <img src="/images/greenBanner.png" className="rounded-lg"/>
        <img
          className="bg-transparent absolute left-0 bottom-0 "
          src="/images/cartoon.png"
        />
      </div>
      <div className="absolute top-5 right-3">
        <p className=" text-white text-lg font-semibold ">
          خرید تلفنی از <span className="text-green-900">تورینو</span>
        </p>
        <p className=" text-sm text-white">به هر کجا که میخواهید!</p>
      </div>
      <div className="flex items-center justify-between px-5 py-3 lg:gap-5">
        <p className="flex items-center justify-center gap-1 text-lg font-semibold">
          {toPersianDigits(number)}<MdLocalPhone /> 
        </p>
        <button className="bg-green-900 border-0 px-2 text-white rounded-lg py-1 cursor-pointer hover:bg-green-700">
          اطلاعات بیشتر
        </button>
      </div>
    </div>
  );
}

export default PhoneBanner;
