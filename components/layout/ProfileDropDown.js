import { useState } from "react";
import Link from "next/link";
import { IoPerson } from "react-icons/io5";
import { useRouter } from "next/router";
import { RiAccountCircleLine } from "react-icons/ri";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { toPersianDigits } from "@/utils/changeNum";
import useProfile from "@/hooks/useProfile";
import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

function ProfileDropDown() {
  const queryClient =useQueryClient();
  const { profile } = useProfile();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    queryClient.removeQueries(["userProfile"])
    router.replace("/torino")
    
  };

  return (
    <div className="relative">
      <button
        aria-label="دراپ-دون"
        onClick={() => setIsOpen(!isOpen)}
        className="text-green-500 cursor-pointer border-0 rounded-lg px-2 py-1 flex items-center gap-1 hover:border-green-600 hover:text-green-600"
      >
        <span className="flex items-center gap-1">
          <IoPerson className="mb-1" />
          {toPersianDigits(profile?.mobile || "پروفایل")}
        </span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && (
        <div className="absolute right-[-5px] mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg z-50 divide-y divide-gray-100  lg:w-42 ">
          <div
            className=" gap-3 flex items-center justify-start rounded-t-md px-2 py-1 text-gray-700 bg-gray-200 "
            onClick={() => setIsOpen(false)}
          >
            <span className="bg-gray-400 rounded-4xl w-fit px-1 h-5 flex items-center justify-center mb-1">
              <IoPerson fontSize={13} />
            </span>
            <p className="text-sm">{profile?.mobile}</p>
          </div>
          <Link
            aria-label="لینک-اطلاعات-کاربر"
            href="/torino/information"
            className="flex items-center justify-start gap-1 text-sm px-2 py-2 text-gray-700 cursor-pointer hover:bg-gray-100 hover:rounded-lg "
            onClick={() => setIsOpen(false)}
          >
            <span>
              <RiAccountCircleLine fontSize={20} />
            </span>
            <p> اطلاعات حساب کاربری</p>
          </Link>
          <div
            onClick={handleLogout}
            className="flex items-center justify-start gap-1 text-sm  px-3 py-2 text-red-600 cursor-pointer hover:bg-red-50 hover:rounded-lg rounded-b-md "
          >
            <span>
              <RiLogoutCircleRLine fontSizeAdjust={20} />
            </span>
            <p> خروج از حساب کاربری</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropDown;
