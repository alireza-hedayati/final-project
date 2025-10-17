import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    name: "مهدی بدیهی",
    image: "/images/team1.webp",
    role: "کارشناس رزرو و پشتیبانی مشتریان",
  },
  {
    id: 2,
    name: " مریم مقدم زاده",
    image: "/images/team2.webp",
    role: "راهنمای تور",
  },
  {
    id: 3,
    name: "سامان خدایی",
    image: "/images/team3.webp",
    role: "کارشناس محتوای گردشگری و شبکه‌های اجتماعی",
  },
  {
    id: 4,
    name: " مجید بهرامی",
    image: "/images/team4.webp",
    role: "مدیر تور و برنامه‌ریز سفرها",
  },
  {
    id: 5,
    name: "  امید کاظم نژاد",
    image: "/images/team5.webp",
    role: "مدیر همکاری‌ها و روابط سازمانی",
  },
];

function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10 flex flex-col items-center relative">
      <h2 className="text-xl font-semibold mb-6 text-green-600">
        برخی از اعضای تیم تورینو 
      </h2>

      <div className="flex items-center justify-center gap-5">
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`cursor-pointer p-3 rounded-full shadow-md transition-all ${
            currentIndex === 0
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          <FaArrowRight size={20} />
        </button>

        <div className="flex flex-col items-center transition-all duration-500">
          <img
            src={services[currentIndex].image}
            alt={services[currentIndex].name}
            className="w-48 h-48 object-cover rounded-full border-4 border-green-400 shadow-lg"
          />
          <p className="mt-3 text-lg font-medium text-gray-700">
            {services[currentIndex].name}
          </p>
          <p className="text-sm text-gray-500">{services[currentIndex].role}</p>
        </div>

        <button
          onClick={nextSlide}
          disabled={currentIndex === services.length - 1}
          className={`cursor-pointer p-3 rounded-full shadow-md transition-all ${
            currentIndex === services.length - 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
        >
          <FaArrowLeft size={20} />
        </button>
      </div>

      <div className="flex gap-2 mt-5">
        {services.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-green-500 w-5" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default TeamSlider;
