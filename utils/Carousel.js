"use client";

import { useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  "/images/slide1.webp",
  "/images/slide2.webp",
  "/images/slide3.webp",
  "/images/slide4.webp",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-fit flex flex-col items-center">
      <div className="relative w-[300px] h-[200px] md:w-[300px] md:h-[200px] lg:w-[200px] lg:h-[260px]">
        {images.map((src, index) => {
          const offset = index - currentIndex;

          let translateX = 0;
          let scale = 1;
          let opacity = 1;

          if (offset === 1) {
            translateX = 60;
            opacity = 0.9;
          } else if (offset === 2) {
            translateX = 100;
            scale = 0.8;
            opacity = 0.8;
          } else if (offset === 3) {
            translateX = 130;
            scale = 0.7;
            opacity = 0.7;
          } else if (offset < 0) {
            translateX = -300;
            opacity = 0;
          }

          return (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out lg:top-5"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                zIndex: images.length - index,
                opacity,
              }}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-xl shadow-lg lg:rounded-2xl"
              />
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-4 mt-6 lg:mt-7">
        <button onClick={nextSlide} className="cursor-pointer hover:opacity-60">
          <IoIosArrowForward size={24} />
        </button>

        <span className="text-lg font-medium">
          {currentIndex + 1}/{images.length}
        </span>

        <button onClick={prevSlide} className="cursor-pointer hover:opacity-60">
          <IoIosArrowBack size={24} />
        </button>
      </div>
    </div>
  );
}
