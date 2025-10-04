import React, { useState } from "react";
import { useUser } from "@/context/UserContext";
import Link from "next/link";

function ProfileDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useUser();

  const displayInfo = state.user?.mobile || "پروفایل";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-green-500 border-2 border-green-500 rounded-lg px-2 py-1 flex items-center gap-1 hover:border-green-600 hover:text-green-600"
      >
        <span>{displayInfo}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-2">
          <Link
            href="/profile"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            پروفایل من
          </Link>
          <Link
            href="/orders"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            سفارشات
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-right px-4 py-2 text-red-600 hover:bg-red-50 rounded-b-md"
          >
            خروج از حساب
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropDown;
