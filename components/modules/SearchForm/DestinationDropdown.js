import { cityNamesFa } from "@/utils/cityNamesFa";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

function DestinationDropdown({ destinations, onChange, selectedDestinaton }) {
  return (
    <ul className="flex flex-col gap-1 w-48 border rounded-lg border-gray-300 bg-white shadow-md">
      <li className="py-1 px-3 text-gray-600 border-b-2 border-gray-200 bg-gray-100">
        پر تردد
      </li>
      <li
        onClick={() => onChange("")}
        className={`cursor-pointer py-2 px-3 text-gray-600 border-b-2 border-gray-200 hover:bg-green-100 ${
          selectedDestinaton === "" ? "bg-green-200" : ""
        }`}
      >
        همه ی تورها
      </li>
      {destinations.map((destination) => {
        return (
          <li
            key={destination.id}
            onClick={() => onChange(destination.id)}
            className={`flex items-center
               justify-start cursor-pointer px-3 py-2 hover:bg-green-100 border-b-2 border-gray-200 ${
                 selectedDestinaton === destination.id ? "bg-green-200" : ""
               }`}
          >
            <CiLocationOn />
            {cityNamesFa[destination.name] || destination.name}
          </li>
        );
      })}
    </ul>
  );
}

export default DestinationDropdown;
