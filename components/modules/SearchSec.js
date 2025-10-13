import PersianDateInput from "@/utils/PersianDate";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiGlobe } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";
import OriginDropdown from "./SearchForm/OriginDropdown";
import DestinationDropdown from "./SearchForm/DestinationDropdown";
import { cityNamesFa } from "@/utils/cityNamesFa";

function SearchSec({ onSearch, origins, destinations }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [dateObject, setDateObject] = useState(null);
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestinationDropdown, setShowDestinationDropdown] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    let queryDate = null;
    if (dateObject) {
      const jsDate = dateObject.toDate();
      queryDate = jsDate.toISOString().split("T")[0];
    }

    onSearch({
      originId: origin,
      destinationId: destination,
      startDate: queryDate,
    });
  };

  return (
    <div className="w-fit px-10 mx-auto xl:px-2">
      <h2 className="text-center text-xl my-8">
        <span className="text-green-500">تورینو</span> برگزار کننده بهترین تور
        های داخلی و خارجی
      </h2>

      <form onSubmit={submitHandler}>
        <div className=" flex flex-col border-0 py-4 gap-4  lg:flex-row lg:border-gray-300 lg:border-2 lg:rounded-xl lg:py-0 lg:mx-auto lg:items-center">
          <div className=" w-fit flex gap-4  lg:flex lg:gap-2">
            <div className="relative">
              <div
                className="input-box"
                onClick={() => setShowOriginDropdown((prev) => !prev)}
              >
                <CiLocationOn fontSize={25} color="gray" />
                <span className={`${origin ? "text-black" : "text-gray-400"}`}>
                  {origin
                    ?cityNamesFa[origins.find(item=>item.id === origin)?.name]|| origins.find((item) => item.id === origin)?.name
                    : "مبدا"}
                </span>
              </div>

              {showOriginDropdown && (
                <div className="absolute top-full left-0 w-full z-100 mt-1 text-black">
                  <OriginDropdown
                    origins={origins}
                    selectedOrigin={origin}
                    onChange={(value) => {
                      setOrigin(value);
                      setShowOriginDropdown(false);
                    }}
                  />
                </div>
              )}
            </div>

            <div className="relative">
              <div
                className="input-box"
                onClick={() => setShowDestinationDropdown((prev) => !prev)}
              >
                <PiGlobe fontSize={25} color="gray" />
                <span className={`${destination ? "text-black" : "text-gray-400"}`}>
                  {destination
                    ?cityNamesFa[destinations.find(item=>item.id === destination)?.name]|| destinations.find((item) => item.id === destination)?.name
                    : "مقصد"}
                </span>
              </div>
              {showDestinationDropdown && (
                <div className="absolute top-full left-0 w-full z-100 mt-1">
                  <DestinationDropdown
                    destinations={destinations}
                    selectedDestinaton={destination}
                    onChange={(value) => {
                      setDestination(value);
                      setShowDestinationDropdown(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="w-full   flex items-center justify-center gap-2 my-2 border-gray-300 py-2  rounded-xl border-2 border-solid lg:border-none lg:mx-10">
            <SlCalender
              fontSize={25}
              className="lg:m-auto"
              color="gray"
              
            />
            <PersianDateInput date={dateObject} setDate={setDateObject} />
          </div>
          <div className="flex items-center justify-center lg:px-5">
            <button
            className="w-[350px]  bg-green-500 border-none rounded-xl cursor-pointer py-2 text-white hover:bg-green-800  lg:w-[150px] lg:text-lg lg:h-11 lg:py-0 lg:px-4"
            type="submit"
          >
            جستجو
          </button></div>
        </div>
      </form>
    </div>
  );
}

export default SearchSec;
