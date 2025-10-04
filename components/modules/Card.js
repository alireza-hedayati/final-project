import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toPersianDigits } from "@/utils/changeNum";

function Card(props) {
  const { title, id, image, price } = props;
  return (
    <div className="border-2 border-gray-100 rounded-xl overflow-hidden my-4">
      <Image src={image} alt={title} width={280} height={200} />
      <p className="py-3 px-2">{title}</p>
      <div className="w-full border-t-2 border-gray-100 border-solid"></div>
      <div className="flex items-center justify-between py-3 px-2">
        <Link
          className="border-none bg-green-500 px-4  rounded-sm text-center text-white cursor-pointer hover:bg-green-600"
          href={`/torino/${id}`}
        >
          رزرو
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
