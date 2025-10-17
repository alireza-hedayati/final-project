import React from "react";
import { AiFillSliders } from "react-icons/ai";

function AboutTorino() {
  return (
    <div className="w-9/10 mx-auto mt-5">
      <h2 className="text-xl text-green-500 font-bold flex items-center gap-1 lg:text-2xl">
        <AiFillSliders color="#55AD9B"/> درباره ی تورینو
      </h2>
      <p className="mt-3 text-gray-500 text-sm lg:text-base">
        در تورینو، ما فقط تور برگزار نمی‌کنیم؛ ما تجربه می‌سازیم. تورینو با هدف
        ایجاد سفری آسان، لذت‌بخش و مطمئن برای همه‌ی اقشار جامعه شکل گرفت. از دل
        علاقه‌ی عمیق به کشف فرهنگ‌ها، طبیعت و ارتباط میان انسان‌ها، تیمی از
        متخصصان گردشگری، برنامه‌ریزان سفر، طراحان تجربه‌ی کاربری و راهنمایان
        حرفه‌ای گرد هم آمدند تا سفری متفاوت را برای شما رقم بزنند.
      </p>
      <p className="text-gray-500 text-sm lg:text-base">
        ما باور داریم که سفر، زیباترین شکل یادگیری است. به همین دلیل، هر تور در
        تورینو با دقت، تحقیق و عشق طراحی می‌شود — تا شما بدون دغدغه، فقط از مسیر
        و لحظه لذت ببرید.
      </p>
    </div>
  );
}

export default AboutTorino;
