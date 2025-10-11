import React from "react";
import { MdOutlinePerson } from "react-icons/md";
import { GiStripedSun } from "react-icons/gi";
import { GrTransaction } from "react-icons/gr";

function Navbar({ setProfile, profile }) {
  return (
    <div className="w-8/10 pt-8 pb-1 border-gray-400 mx-auto border-b  lg:border-gray-200 lg:border-[1px] lg:w-[220px] lg:h-fit lg:rounded-xl lg:shadow-sm lg:p-0">
      <ul className="flex items-center justify-between w-9/10 mx-auto lg:flex-col lg:divide-y lg:divide-gray-300 lg:w-full">
        <li
          className={`${
            profile
              ? "text-green-500 border-b-[2px] "
              : "text-gray-700 border-0"
          } cursor-pointer flex items-center gap-1 hover:opacity-70 lg:w-full lg:py-3 lg:hover:bg-green-100 lg:hover:rounded-t-xl lg:pr-2`}
        >
          <span>
            <MdOutlinePerson />
          </span>
          <p onClick={() => setProfile(true)}>پروفایل</p>
        </li>
        <li className="cursor-pointer flex items-center gap-1  hover:opacity-70 lg:w-full lg:py-3 lg:hover:bg-green-100  lg:pr-2">
          <span>
            <GiStripedSun />
          </span>
          <p>تورهای من</p>
        </li>
        <li className="cursor-pointer flex items-center gap-1 hover:opacity-70  lg:w-full lg:py-3 lg:hover:bg-green-100 lg:hover:rounded-b-xl lg:pr-2">
          <span>
            <GrTransaction />
          </span>
          <p>تراکنش ها</p>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
