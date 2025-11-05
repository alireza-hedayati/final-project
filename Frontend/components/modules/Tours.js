import { useState } from "react";
import Card from "./Card";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import TourCardSkeleton from "./Skeletons/TourCardSkeleton";

function Tours({ data, loading }) {
  const [visibleCount, setVisibleCount] = useState(4);

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center items-center gap-4 my-10">
        {[...Array(data.length)].map((_, i) => (
          <TourCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!loading && data.length === 0) {
    return (
      <p className="text-center text-gray-400 my-10">
        هیچ توری با این مشخصات پیدا نشد
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center my-8 mx-auto">
      <p className="text-2xl my-3 px-17 self-start md:px-40 lg:px-10">
        همه تورها
      </p>
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

      <ul
        className="hidden lg:flex lg:flex-wrap lg:w-[900px] md:flex md:flex-wrap md:w-[600px] md:gap-5 xl:flex xl:flex-wrap xl:gap-10 xl:my-5 
      xl:justify-center
      xl:transition-all xl:duration-500 xl:ease-in-out xl:w-full"
      >
        {data.map((tour) => (
          <li
            key={tour.id}
            className="transition duration-500 ease-in-out transform hover:scale-[1.05] opacity-100"
          >
            <Card {...tour} />
          </li>
        ))}
      </ul>

      {data.length > 4 && visibleCount < data.length ? (
        <button
          aria-label="مشاهده-تور-بیشتر"
          onClick={() => setVisibleCount((prev) => prev + 4)}
          className="flex items-center gap-1 text-gray-500 cursor-pointer hover:opacity-60 md:hidden lg:hidden xl:hidden"
        >
          مشاهده بیشتر
          <IoIosArrowDown />
        </button>
      ) : (
        <button
          aria-label="مشاهده-تور-کمتر"
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
