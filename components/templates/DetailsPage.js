import React from "react";
import Image from "next/image";
import { BiGroup } from "react-icons/bi";
import { LiaMapSolid } from "react-icons/lia";
import { PiMedalLight } from "react-icons/pi";
import { RiBusLine } from "react-icons/ri";
import { IoShield } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { GiRoad } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";

import { toPersianDigits } from "@/utils/changeNum";
import { transportFa } from "@/utils/transportationFa";
import { cityNamesFa } from "@/utils/cityNamesFa";
import UTCtoJalali from "@/utils/UTCtoJalali";

function DetailsPage(props) {
  const {
    title,
    image,
    duration,
    capacity,
    fleetVehicle,
    price,
    insurance,
    insurancePrice,
    origin,
    startDate,
    endDate,
  } = props;
  return (
    <div
      className="lg:w-9/10 lg:px-5
    lg:rounded-2xl lg: shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] lg:mx-auto lg:py-2 lg:my-5"
    >
      <div className="w-fit mx-auto py-10 flex flex-col items-center  lg:flex-row lg:w-full lg:py-5 ">
        <div className="relative w-[320px] h-[220px] md:w-[397px] md:h-[265px] lg:w-[350px] lg:h-[250px]">
          <Image
            className="rounded-xl"
            src={image}
            fill={true}
            alt="tour image"
          />
        </div>

        <div className="w-full lg:px-5">
          <div className="w-full flex items-center justify-between  py-4 md:px-2 lg:flex-col lg:items-start lg:py-3 lg:gap-5">
            <p className="text-lg font-bold md:text-xl">{title}</p>
            <p className="text-sm text-gray-600 md:text-base">{duration}</p>
          </div>

          <div className="w-full flex items-center justify-between py-4 px-2 lg:w-8/10">
            <p className="text-sm flex items-center text-gray-400  gap-1">
              <BiGroup className="lg:text-lg" /> تور لیدر از مبدا
            </p>
            <p className="text-sm flex items-center text-gray-400 gap-1">
              <LiaMapSolid className="lg:text-lg" />
              برنامه سفر
            </p>
            <p className=" text-sm flex items-center text-gray-400 gap-1">
              <PiMedalLight className="lg:text-lg" />
              تضمین کیفیت
            </p>
          </div>

          <div className="flex items-center justify-between gap-0 md:gap-10 py-4 lg:hidden">
            <div className="flex flex-col">
              <p
                className="flex justify-center
           items-center gap-1"
              >
                <RiBusLine />
                حمل و نقل
              </p>
              <p className="text-center text-sm text-gray-600 py-1">
                {transportFa[fleetVehicle]}
              </p>
            </div>

            <div className="flex flex-col">
              <p className="flex items-center justify-center gap-1">
                <IoIosContacts />
                ظرفیت
              </p>
              <p className="text-center text-sm text-gray-600 py-1">
                {capacity}
              </p>
            </div>

            <div className="flex flex-col">
              <p className="flex items-center justify-center gap-1">
                <IoShield />
                بیمه
              </p>
              {insurance ? (
                <p className="text-center text-sm text-gray-600 py-1">
                  {insurancePrice}
                </p>
              ) : (
                <p className="text-center text-sm text-gray-600 py-1">ندارد</p>
              )}
            </div>
          </div>
          <div className="w-full flex items-center justify-between py-5 px-5 md:px-0 lg:flex-row-reverse lg:py-1 lg:px-2">
            <button className="cursor-pointer text-white bg-green-500 border-0 rounded-md px-5 py-1 hover:bg-green-600  md:text-lg">
              رزرو و خرید
            </button>
            <p className="flex items-center gap-1 text-green-500 text-xl font-semibold md:text-2xl">
              {toPersianDigits(price.toLocaleString())}
              <span className="text-sm text-gray-700 font-medium">تومان</span>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:items-center lg:justify-between lg:divide-x-2  lg:divide-gray-300  ">
        <div className="tour-info-box">
          <p className="tour-info">
            <GiRoad />
            مبدا
          </p>
          <p>{cityNamesFa[origin.name]}</p>
        </div>
        <div className="tour-info-box">
          <p className="tour-info">
            <SlCalender /> تاریخ رفت
          </p>
          <p>{toPersianDigits(UTCtoJalali(startDate))}</p>
        </div>
        <div className="tour-info-box">
          <p className="tour-info">
            <SlCalender /> تاریخ برگشت
          </p>
          <p>{toPersianDigits(UTCtoJalali(endDate))}</p>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-1">
          <p className="tour-info">
            <RiBusLine />
            حمل و نقل
          </p>
          <p>{transportFa[fleetVehicle]}</p>
        </div>

        <div className="tour-info-box">
          <p className="tour-info">
            <IoIosContacts />
            ظرفیت
          </p>
          <p>{capacity}</p>
        </div>

        <div className="tour-info-box">
          <p className="tour-info">
            <IoShield />
            بیمه
          </p>
          {insurance ? <p>{insurancePrice}</p> : <p>ندارد</p>}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
