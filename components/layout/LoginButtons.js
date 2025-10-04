import React from "react";
import { FaUser } from "react-icons/fa6";
import { CiLogin } from "react-icons/ci";
function LoginButtons({ setIsOpen }) {
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden lg:flex xl:flex items-center text-green-500 justify-center gap-1 bg-white border-green-500 border-2 rounded-lg px-2 py-1 cursor-pointer hover:border-green-600 hover:text-green-600"
      >
        <FaUser />
        ورود | ثبت نام
      </button>
      <button
        className="block lg:hidden xl:hidden p-1 border-2 border-green-500 rounded-lg cursor-pointer hover:border-green-600"
        onClick={() => setIsOpen(true)}
      >
        <CiLogin size={25} />
      </button>
    </div>
  );
}

export default LoginButtons;
