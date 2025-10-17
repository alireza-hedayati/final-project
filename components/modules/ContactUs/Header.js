import React from "react";

function Header() {
  return (
    <div className="w-9/10 mx-auto flex flex-col items-center mt-5 md:w-8/10 lg:hidden">
      <h3 className="text-green-500 font-semibold text-xl md:text-2xl ">
        با تورینو در تماس باشید!
      </h3>
      <p className="text-gray-700 mt-2 md:text-lg">
        ما همیشه آماده‌ی پاسخگویی به سوالات و پیشنهادات شما هستیم
      </p>
    </div>
  );
}

export default Header;
