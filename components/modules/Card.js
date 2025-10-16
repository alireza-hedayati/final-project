import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toPersianDigits } from "@/utils/changeNum";

function Card(props) {
  const { title, id, image, price, options, availableSeats } = props;
  return (
    <div className="border-2 border-gray-100 rounded-xl overflow-hidden my-4 bg-white shadow-md">
      <Image src={image} alt={title} width={280} height={200} />
      <p className="py-3 px-2">{title}</p>
      <p className="text-gray-400 text-sm px-2 pb-1">
        {options.length >= 2
          ? options.slice(0, 2).join("،") + " " + "..."
          : options.join("،")}
      </p>
      <div className="w-full border-t-2 border-gray-100 border-solid"></div>
      <div className="flex items-center justify-between py-3 px-2">
        <Link
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
          <span className="text-blue-600 text-lg px-2">
            {toPersianDigits(price.toLocaleString())}
          </span>
          تومان
        </p>
      </div>
    </div>
  );
}

export default Card;
