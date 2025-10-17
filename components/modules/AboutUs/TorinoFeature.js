import React from "react";
import { AiFillSliders } from "react-icons/ai";
function TorinoFeature() {
  return (
    <div className="w-9/10 mx-auto mt-8">
      <h3 className="text-green-500 text-xl font-semibold flex items-center gap-1 lg:text-2xl">
        <AiFillSliders color="#55AD9B" /> ویژگی های تورینو
      </h3>
      <div className="mt-5">
        <p className="bg-gray-200 w-fit rounded-md shadow-sm px-2 text-gray-600 ">
          برنامه‌ریزی دقیق و انعطاف‌پذیر
        </p>
        <p className="text-sm mt-2 text-gray-500 lg:text-base">
          سفرهای تورینو با دقت و جزئیات بالا طراحی می‌شن تا بهترین تجربه ممکن رو
          برای مسافران رقم بزنن. در عین حال، امکان شخصی‌سازی و انتخاب خدمات
          متناسب با سلیقه‌ی هر فرد هم وجود داره.
        </p>
      </div>
      <div className="mt-5">
        <p className="bg-gray-200 w-fit rounded-md shadow-sm px-2 text-gray-600 ">
          اقامت در بهترین هتل‌ها
        </p>
        <p className="text-sm mt-2 text-gray-500 lg:text-base">
          تورینو با معتبرترین هتل‌ها و اقامتگاه‌های کشور همکاری می‌کنه تا آسایش
          و آرامش شما در سفر تضمین بشه. از هتل‌های پنج‌ستاره شهری تا
          اقامتگاه‌های بوم‌گردی محلی، انتخاب با شماست.
        </p>
      </div>
      <div className="mt-5">
        <p className="bg-gray-200 w-fit rounded-md px-2 shadow-sm text-gray-600">
          پشتیبانی ۲۴ ساعته
        </p>
        <p className="text-sm mt-2 text-gray-500 lg:text-base">
          در هر ساعت از شبانه‌روز، تیم پشتیبانی تورینو آماده پاسخ‌گویی به
          سوالات، مشکلات یا درخواست‌های شماست. فرقی نمی‌کنه در حال رزرو باشید یا
          در سفر — همیشه کنار شما هستیم.
        </p>
      </div>
      <div className="mt-5">
        <p className="bg-gray-200 w-fit rounded-md px-2 shadow-sm text-gray-600">
          قیمت‌گذاری شفاف و منصفانه
        </p>
        <p className="text-sm mt-2 text-gray-500 lg:text-base">
          هیچ هزینه‌ی پنهانی در تورینو وجود نداره! همه‌ی قیمت‌ها از ابتدا
          به‌صورت شفاف نمایش داده می‌شن تا با خیال راحت تصمیم بگیرید.
        </p>
      </div>
      <div className="mt-5">
        <p className="bg-gray-200 w-fit rounded-md shadow-sm px-2 text-gray-600">
          تجربه‌ی واقعی از فرهنگ و طبیعت
        </p>
        <p className="text-sm mt-2 text-gray-500 lg:text-base">
          در تورینو، فقط سفر نمی‌کنید؛ بلکه با فرهنگ، مردم و زیبایی‌های واقعی هر
          مقصد آشنا می‌شید. هدف ما خلق خاطرات ماندگار، نه فقط رزرو یک تور است.
        </p>
      </div>
    </div>
  );
}

export default TorinoFeature;
