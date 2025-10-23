"use client";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function PersianDateInput({ date, setDate, isRange = false }) {
  const tailwindInputStyles =
    "border-none outline-none rounded-md " +
    "text-gray-700" +
    "dark:text-gray-400";
  return (
    <DatePicker
      range={isRange}
      rangeHover={isRange}
      calendar={persian}
      locale={persian_fa}
      placeholder={isRange ? "تاریخ تولد" : "تاریخ"}
      inputClass={tailwindInputStyles}
      value={date}
      onChange={setDate}
      containerClassName="w-[80px]"
      calendarPosition="bottom-left"
    />
  );
}
