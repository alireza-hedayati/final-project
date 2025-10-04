import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Spinner from "@/utils/spinner";
import Card from "./Card";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import api from "@/utils/api";

function Tours({ initialData }) {
  const [visibleCount, setVisibleCount] = useState(4);
  const {
    isPending,
    isError,
    error,
    data = [],
  } = useQuery({
    queryKey: ["tours"],
    queryFn: async () => {
      const res = await api.get("/tour");
      return res.data;
    },
    initialData,
  });
  console.log(data);
  if (isPending)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (isError) return <div>مشکلی پیش آمده: {error.message}</div>;

  return (
    <div className="flex flex-col items-center w-auto my-8 ">
      <p className="text-2xl my-3 px-17 self-start md:px-40">همه تورها</p>
      <ul className="flex flex-col gap-4 transition-all duration-500 ease-in-out md:hidden xl:hidden">
        {data.slice(0, visibleCount).map((tour) => (
          <li
            key={tour.id}
            className="transition duration-500 ease-in-out transform hover:scale-[1.05] opacity-100"
          >
            <Card {...tour} />
          </li>
        ))}
      </ul>

      <ul className="hidden lg:flex lg:flex-wrap lg:w-[900px] md:flex md:flex-wrap md:w-[600px] md:gap-5 xl:flex xl:flex-wrap xl:gap-10 xl:my-5 xl:transition-all xl:duration-500 xl:ease-in-out xl:w-full ">
        {data.map((tour) => (
          <li
            key={tour.id}
            className="transition duration-500 ease-in-out transform hover:scale-[1.05] opacity-100"
          >
            <Card {...tour} />
          </li>
        ))}
      </ul>

      {visibleCount < data.length ? (
        <button
          onClick={() => setVisibleCount((prev) => prev + 4)}
          className="flex items-center gap-1 text-gray-500 cursor-pointer hover:opacity-60 md:hidden lg:hidden xl:hidden"
        >
          مشاهده بیشتر
          <IoIosArrowDown />
        </button>
      ) : (
        <button
          onClick={() => setVisibleCount((prev) => prev - 4)}
          className="flex items-center gap-1 text-gray-500 cursor-pointer hover:opacity-60 xl:hidden"
        >
          مشاهده کمتر
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
}

export default Tours;
