import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toPersianDigits } from "@/utils/changeNum";

function Card(props) {
  const { title, id, image, price, options, availableSeats } = props;

  return (
    <div className="border-2 border-gray-100 rounded-xl overflow-hidden my-4 bg-white shadow-md">
      <div className="relative w-[278px] h-[159px]">
        <Image src={image} alt={title} fill />
      </div>
      <p className="py-3 px-2 " style={{ fontFamily: "YekanBakh" }}>
        {title}
      </p>
      <p
        className="text-gray-400 text-sm px-2 pb-1"
        style={{ fontFamily: "YekanBakh" }}
      >
        {options.length >= 2
          ? options.slice(0, 2).join("،") + " " + "..."
          : options.join("،")}
      </p>
      <div className="w-full border-t-2 border-gray-100 border-solid "></div>
      <div className="flex items-center justify-between py-3 px-2">
        <Link
          aria-label="رزرو-تور"
          style={{ fontFamily: "YekanBakh" }}
          href={availableSeats > 0 ? `/torino/tours/${id}` : "#"}
          className={`border-none bg-green-500 px-4  rounded-sm text-center text-white cursor-pointer ${
            availableSeats > 0
              ? "bg-green-500 hover:bg-green=600"
              : "bg-gray-600 cursor-not-allowed pointer-events-none"
          } hover:bg-green-600`}
        >
          {availableSeats > 0 ? "رزرو" : "اتمام موجودی"}
        </Link>

        <p className="text-base">
          {availableSeats > 0 ? (
            <>
              <span className="text-blue-600 text-lg px-2">
                {toPersianDigits(price.toLocaleString())}
              </span>
              تومان
            </>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
}

export default Card;
