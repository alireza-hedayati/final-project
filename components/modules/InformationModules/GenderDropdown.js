import React, { useState } from "react";
import { Controller } from "react-hook-form";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
const options = ["مرد", "زن"];

export default function GenderDropdown({ control, errors }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <>
            <div onClick={() => setOpen((prev) => !prev)} className="flex items-center justify-between px-2 py-1 text-gray-500">
              <span>{field.value || "جنسیت"}</span>
              <span>
                {open ? <RiArrowDropUpLine fontSize={25} /> : <RiArrowDropDownLine fontSize={25} />}
              </span>
            </div>
            {open && (
              <ul className="">
                {options.map((option) => (
                  <li
                  className="w-full border-t-[1px] border-gray-200 px-2 bg-gray-100 rounded-b-md cursor-pointer hover:opacity-70"
                    key={option}
                    onClick={() => {
                      field.onChange(option);
                      setOpen(false);
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      />
      <span>{errors.gender?.message}</span>
    </div>
  );
}
