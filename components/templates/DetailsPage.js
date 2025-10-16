import React from "react";
import Image from "next/image";
import { BiGroup } from "react-icons/bi";
import { LiaMapSolid } from "react-icons/lia";
import { PiMedalLight } from "react-icons/pi";
import { IoShield } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { GiRoad } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";

import { toPersianDigits } from "@/utils/changeNum";
import { transportFa } from "@/utils/transportationFa";
import { cityNamesFa } from "@/utils/cityNamesFa";
import UTCtoJalali from "@/utils/UTCtoJalali";
import Link from "next/link";
import { LuShip } from "react-icons/lu";
import { IoBus } from "react-icons/io5";
import { FaTrainSubway } from "react-icons/fa6";
import { TbCarSuvFilled } from "react-icons/tb";
import { PiAirplaneTilt } from "react-icons/pi";

function DetailsPage(props) {
  const {
    id,
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
    availableSeats,
  } = props;
  return (
    <div
      className="lg:w-9/10 lg:px-5
    lg:rounded-2xl lg:shadow-[5px_5px_12px_#bebebe,-5px_-5px_12px_#ffffff] lg:mx-auto lg:py-2 lg:my-5"
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
                {fleetVehicle === "bus" ? (
                  <IoBus />
                ) : fleetVehicle === "airplane" ? (
                  <PiAirplaneTilt />
                ) : fleetVehicle === "SUV" ? (
                  <TbCarSuvFilled />
                ) : fleetVehicle === "ship" ? (
                  <LuShip />
                ) : fleetVehicle === "train" ? (
                  <FaTrainSubway />
                ) : (
                  ""
                )}
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
            <Link
              href={availableSeats > 0 ? `/torino/booking/${id}` : "#"}
              className={`cursor-pointer ${
                availableSeats <= 0
                  ? "bg-red-500 text-red-700 hover:opacit-70 cursor-not-allowed"
                  : availableSeats <= 4
                  ? "bg-yellow-300 text-yellow-500"
                  : "bg-green-500 text-white hover:bg-green-600"
              }   border-0 rounded-md px-5 py-1   md:text-lg`}
              onClick={(e) => {
                if (availableSeats <= 0) e.preventDefault();
              }}
            >
              {availableSeats <= 0
                ? "اتمام ظرفیت"
                : availableSeats <= 4
                ? "ظرفیت محدود"
                : " رزرو و خرید"}
            </Link>
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
            {fleetVehicle === "bus" ? (
              <IoBus />
            ) : fleetVehicle === "airplane" ? (
              <PiAirplaneTilt />
            ) : fleetVehicle === "SUV" ? (
              <TbCarSuvFilled />
            ) : fleetVehicle === "ship" ? (
              <LuShip />
            ) : fleetVehicle === "train" ? (
              <FaTrainSubway />
            ) : (
              ""
            )}
            حمل و نقل
          </p>
          <p>{transportFa[fleetVehicle]}</p>
        </div>

        <div className="tour-info-box">
          <p className="tour-info">
            <IoIosContacts />
           حداکثر ظرفیت
          </p>
          <p>{availableSeats ? capacity : "اتمام ظرفیت"}</p>
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
