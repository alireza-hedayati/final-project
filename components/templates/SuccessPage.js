import Link from "next/link";
import React from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";

function SuccessPage() {
  return (
    <div className="my-20">
      <div className="w-8/10 mx-auto mt-20 flex items-center justify-center gap-2 lg:mt-20">
        <span className="text-xl font-semibold">Torino</span>
        <div className="flex items-center justify-center">
          <span className="bg-green-500 w-9 h-9 rounded-full flex items-center justify-center">
            <BiSolidPlaneAlt size={25} color="snow" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <span className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center">
          <FaCheck size={40} color="snow" />
        </span>
      </div>
      <div className="flex items-center justify-center mt-7">
        <p className="text-xl font-semibold ">پرداخت شما با موفقیت انجام شد</p>
      </div>
      <div className="flex items-center justify-center gap-5 mt-10">
        <Link
          href="/torino/tours/information"
          className="bg-green-500 cursor-pointer rounded-lg p-2 text-white hover:bg-green-600"
        >
          جزییات خرید
        </Link>
        <Link
          href="/torino"
          className="bg-green-500 cursor-pointer rounded-lg py-2 px-3 text-white hover:bg-green-600"
        >
          {" "}
          صفحه اصلی
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
