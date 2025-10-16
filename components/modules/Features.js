import React from "react";
import Image from "next/image";
import { toPersianDigits } from "@/utils/changeNum";
function Features() {
  return (
    <div className="border-t-2 border-gray-100 px-2 w-fit mx-auto lg:flex lg:items-center lg:mt-10">
      <div className="flex items-center my-5">
        <Image src="/images/price.webp" width={70} height={30} alt="image" />
        <div className="px-3">
          <p className="font-semibold">بصرفه ترین قیمت</p>
          <p className="text-sm">
            بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.
          </p>
        </div>
      </div>
      <div className="flex items-center my-5">
        <Image src="/images/support.webp" width={70} height={30} alt="image" />
        <div className="px-3">
          <p className="font-semibold">پشتیبانی</p>
          <p className="text-sm">
            پشتیبانی و همراهی {toPersianDigits("24")} ساعته در تمامی مراحل سفر
            شما.
          </p>
        </div>
      </div>
      <div className="flex items-center my-5">
        <Image
          src="/images/satisfaction.webp"
          width={70}
          height={30}
          alt="image"
        />
        <div className="px-3">
          <p className="font-semibold">رضایت کاربران</p>
          <p className="text-sm">
            رضایت بیش از {toPersianDigits("10")} هزار کاربر از تور های ما.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
