import { cityNamesFa } from "@/utils/cityNamesFa";
import { CiLocationOn } from "react-icons/ci";

function OriginDropdown({ origins, selectedOrigin, onChange }) {
  
  return (
    <ul className="flex flex-col  w-48 border rounded-lg  border-gray-300 bg-white shadow-md ">
      <li className="cursor-pointer py-1 px-3 text-gray-800 border-b-2 border-gray-200 bg-gray-100  rounded-t-lg">
        پر تردد
      </li>
      <li
        onClick={() => onChange("")}
        className={`cursor-pointer py-2 px-3 text-gray-600 border-b-2 border-gray-200 hover:bg-green-100   ${
          selectedOrigin === "" ? "bg-green-200" : ""
        } `}
      >
        همه ی تورها
      </li>
      {origins.map((origin) => (
        <li
          key={origin.id}
          onClick={() => onChange(origin.id.toString())}
          className={`flex items-center justify-start cursor-pointer px-3 py-2 border-b-2 border-gray-200 hover:bg-green-100  last:rounded-b-lg ${
            selectedOrigin === origin.id ? "bg-green-200" : ""
          } `}
        >
          <CiLocationOn />
          {cityNamesFa[origin.name] || origin.name}
        </li>
      ))}
    </ul>
  );
}

export default OriginDropdown;
