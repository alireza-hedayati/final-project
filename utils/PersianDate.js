"use client";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

export default function PersianDateInput({ date, setDate }) {
  const tailwindInputStyles = "w-full border-none outline-none text-gray-700  rounded-md";
  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      placeholder="تاریخ"
      inputClass={tailwindInputStyles}
      value={date}
      onChange={setDate}
      containerClassName="w-full"
       calendarPosition="bottom-left"
    />
  );
}
