"use client";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { PiSpeakerSimpleHighLight } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="text-3xl p-2 cursor-pointer hover:opacity-50"
      >
        <LuMenu />
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 rounded-l-lg ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 left-4 text-2xl cursor-pointer hover:opacity-50"
        >
          ✕
        </button>

        <ul className="flex flex-col gap-6 p-6 text-lg font-medium my-10">
          <li className="footer-items cursor-pointer flex items-center  gap-1 hover:opacity-50">
           <GoHome /> صفحه اصلی
            
          </li>
          <li className="footer-items cursor-pointer flex items-center  gap-1 hover:opacity-50">
            <PiAirplaneTiltLight /> خدمات گردشگری
          </li>
          <li className="footer-items cursor-pointer flex items-center  gap-1 hover:opacity-50">
            <PiSpeakerSimpleHighLight /> درباره ما
          </li>
          <li className="footer-items cursor-pointer flex items-center  gap-1  hover:opacity-50">
            <IoCallOutline /> تماس با ما
          </li>
        </ul>
      </div>
    </div>
  );
}
