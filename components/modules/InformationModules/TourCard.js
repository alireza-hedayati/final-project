import React from "react";
import { WiSunrise } from "react-icons/wi";
import { cityNamesFa } from "@/utils/cityNamesFa";
import UTCtoJalali from "@/utils/UTCtoJalali";
import { toPersianDigits } from "@/utils/changeNum";
import { LuShip } from "react-icons/lu";
import { IoBus } from "react-icons/io5";
import { FaTrainSubway } from "react-icons/fa6";
import { TbCarSuvFilled } from "react-icons/tb";
import { PiAirplaneTilt } from "react-icons/pi";

import { formatJalaliDate } from "@/utils/formatJalaliDate";
import { transportFa } from "@/utils/transportationFa";
import dayjs from "dayjs";
dayjs.locale("fa")
function TourCard(props) {
  const {
    title,
    fleetVehicle,
    origin,
    destination,
    startDate,
    endDate,
    price,
    id
  } = props;
  function getTourStatus(startDate,endDate){
    const today = dayjs();
    const start = dayjs(startDate);
    const end = dayjs(endDate);
    if(today.isBefore(start)) return "در انتظار شروع"
    if(today.isAfter(end)) return "به اتمام رسیده "
    return "درحال برگزاری"
  }
  return (
    <div className="w-8/10 relative rounded-lg border-gray-200 shadow-sm pt-4 border-[1px] mx-auto my-10 lg:pt-0 lg:my-4 lg:w-full">
      <span className={`text-[12px]  absolute top-2 px-2 py-[2px] left-2 rounded-3xl lg:top-[2px] lg:mt-[2px] ${getTourStatus(startDate,endDate)==="به اتمام رسیده "?"bg-green-300 text-green-500":getTourStatus(startDate,endDate)==="در انتظار شروع"?"bg-blue-300 text-blue-500":"bg-yellow-300 text-yellow-500"}`}>{getTourStatus(startDate,endDate)}</span>
      <div className="flex items-center justify-between py-5 px-4 lg:py-3 lg:w-8/10">
        <div className="flex items-center gap-1 px-4">
          <span>
            <WiSunrise size={20} />
          </span>
          <span className="text-sm text-gray-700">{title}</span>
        </div>
        <div className="flex items-center gap-1">
          <span>
            {fleetVehicle == "bus" ? (
              <IoBus />
            ) : fleetVehicle === "train" ? (
              <FaTrainSubway />
            ) : fleetVehicle === "ship" ? (
              <LuShip />
            ) : fleetVehicle === "airplane" ? (
              <PiAirplaneTilt />
            ) : fleetVehicle == "SUV" ? (
              <TbCarSuvFilled />
            ) : (
              ""
            )}
          </span>
          <span className="text-sm text-gray-700">
            سفر با {transportFa[fleetVehicle]}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6 px-4">
        <span className="font-semibold">
          {cityNamesFa[origin.name]} به {cityNamesFa[destination.name]}
        </span>
        <span className="text-sm text-gray-400">
          {formatJalaliDate(UTCtoJalali(startDate))}
        </span>
      </div>
      <div className="flex items-center justify-between mt-6 px-4 mb-5">
        <span className="font-semibold">تاریخ برگشت</span>
        <span className="text-sm text-gray-400">
          {formatJalaliDate(UTCtoJalali(endDate))}
        </span>
      </div>
      <div className="border-t-[1px] border-gray-200 py-3 w-full flex items-center justify-between px-2 relative vertical-divider">
        <p className="text-sm text-gray-400 flex items-center gap-5">
          <span className="text-[12px]">شماره تور</span> <span className="text-black font-semibold">{toPersianDigits(id.slice(0,8))}</span>{" "}
        </p>
        <p className="flex items-center gap-2 text-[12px] text-gray-400">
          مبلغ پرداخت شده{" "}
          <span className="text-black font-semibold flex text-base items-center gap-2">
            {toPersianDigits(price.toLocaleString(3))}
            <span className="text-[12px] font-medium text-gray-400">تومان</span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default TourCard;
