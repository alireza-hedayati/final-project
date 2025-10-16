"use client";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { PiSpeakerSimpleHighLight } from "react-icons/pi";
import { IoCallOutline } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const links = [
    {
      href: "/torino",
      label: "صفحه اصلی",
      icon: <GoHome />,
    },
    {
      href: "/torino/services",
      label: "خدمات گردشگری",
      icon: <PiAirplaneTiltLight />,
    },
    { href: "#", label: "درباره ما", icon: <PiSpeakerSimpleHighLight /> },
    { href: "#", label: "تماس با ما", icon: <IoCallOutline /> },
  ];
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
          {links.map(({ href, label, icon }) => {
            const isActive = router.pathname === href;
            return (
              <li>
                <Link
                  className={`footer-items cursor-pointer flex items-center  gap-1 hover:opacity-50 ${
                    isActive ? "text-green-500" : "text-g"
                  } `}
                  key={href}
                  href={href}
                >
                  {icon}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
