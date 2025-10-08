import React from "react";
import Carousel from "../../utils/Carousel";

function WhyUs() {
  return (
    <div className="w-fit mx-auto px-12 lg:flex lg:px-15 lg:items-center lg:gap-50 lg:justify-between xl:w-full xl:justify-center xl:gap-80">
      <div className="w-fit  lg:flex-col ">
        <div className="flex items-center gap-1">
          <div className="bg-green-800 rounded-full px-3 py-2 w-fit">
            <img
              className="w-[10px]"
              src="/images/question-mark.png"
              alt="Why Us"
            />
          </div>
          <p className="text-2xl font-semibold">
            چرا <span className="text-green-500">تورینو</span>؟
          </p>
        </div>
        <p className="hidden md:block text-lg py-3">تور طبیعت گردی و تاریخی </p>
        <p className="hidden lg:block lg:w-[400px]">
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <div className="my-8 mr-12 lg:my-0 lg:mr-0">
        <Carousel />
      </div>
    </div>
  );
}

export default WhyUs;
