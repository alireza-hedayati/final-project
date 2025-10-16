import { MdPriceChange } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import { toPersianDigits } from "@/utils/changeNum";
import { MdOutlineShield } from "react-icons/md";
import { RiHotelLine } from "react-icons/ri";
import { PiAirplaneTilt } from "react-icons/pi";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiCompass3Line } from "react-icons/ri";
import { BsSuitcase2 } from "react-icons/bs";

import Image from "next/image";

function Benfeits() {
  return (
    <div className="w-9/10 mx-auto flex flex-col items-center mt-10">
      <p className="text-lg font-bold md:text-xl">مزیت های خدمات ما</p>
      <div className="flex items-center  w-full justify-between mt-5 md:justify-center md:gap-45">
        <div className="flex flex-col items-center">
          <span>
            <MdPriceChange color="green" size={20} />
          </span>
          <p className="pt-1 md:text-lg">بهترین قیمت ها</p>
        </div>
        <div className="flex flex-col items-center">
          <span>
            <MdSupportAgent color="green" size={20} />
          </span>
          <p className="pt-1 md:text-lg">
            پشتیبانی {toPersianDigits(24)} ساعته{" "}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <span>
            <GoChecklist color="green" size={20} />
          </span>
          <p className="pt-1 md:text-lg">رزرو سریع و آسان</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-10 mt-10 md:flex-row md:flex-wrap">
        <div className="benefits">
          <Image
            className="rounded-t-xl"
            layout="responsive"
            width={1}
            height={1}
            alt="Image"
            src={"/images/lunch.webp"}
          />
          <p className="flex items-center justify-center lg:hidden text-center text-gray-600 py-2 gap-1">
            <span>
              <IoFastFoodOutline size={20} color="#75A47F" />
            </span>
            <span> پذیرایی و وعده‌های غذایی</span>
          </p>
          <p className="py-1 text-sm text-center px-4 text-gray-600 gap-1 hidden lg:block ">
            صبحانه، ناهار و شام با منوهای محلی و بین‌المللی، متناسب با برنامه‌ی
            هر تور و سلیقه‌ی مسافران.
          </p>
        </div>

        <div className="benefits">
          <Image
            className="rounded-t-xl"
            layout="responsive"
            width={10}
            height={10}
            alt="Image"
            src={"/images/insurance-support.webp"}
          />
          <p className="flex items-center justify-center gap-1 lg:hidden text-center text-gray-600 py-2">
            <span>
              <MdOutlineShield size={20} color="#75A47F" />
            </span>
            <span>بیمه و پشتیبانی مسافرتی</span>
          </p>
          <p className="py-2 text-sm text-gray-600 px-4 text-center hidden lg:block">
             تورها تحت پوشش بیمه کامل مسافرتی هستند و تیم پشتیبانی ما ۲۴ ساعته
             در کنار شماست.
          </p>
        </div>
        <div className="benefits">
          <Image
            className="rounded-t-xl"
            layout="responsive"
            width={10}
            height={10}
            alt="Image"
            src={"/images/tour-leader.webp"}
          />
          <p className="flex items-center justify-center gap-1 lg:hidden text-center text-gray-600 py-2">
            <span>
              <RiCompass3Line size={20} color="#75A47F" />
            </span>
            <span> راهنمایان و تور لیدرهای حرفه‌ای</span>
          </p>
          <p className="py-2 text-sm text-center px-4 text-gray-600 hidden lg:block">
            راهنمایان با تجربه و مسلط به زبان‌های مختلف، همراه شما در طول مسیر
            برای یک تجربه‌ی امن و لذت‌بخش.
          </p>
        </div>
        <div className="benefits">
          <Image
            className="rounded-t-xl"
            layout="responsive"
            width={10}
            height={10}
            alt="Image"
            src={"/images/khadamat.webp"}
          />
          <p className=" lg:hidden text-center text-gray-600 gap-1 flex items-center justify-center py-2">
            <span>
              <PiAirplaneTilt size={20} color="#75A47F"/>
            </span>
            <span>خدمات حمل‌ونقل و جابجایی</span>
          </p>
          <p className="py-1 text-sm text-center px-4 text-gray-600 hidden lg:block">
            از رزرو بلیت تا ترنسفر فرودگاهی و جابه‌جایی در طول سفر، همه چیز با
            هماهنگی کامل انجام می‌شود.
          </p>
        </div>

        <div className="benefits">
          <Image
            className="rounded-t-xl"
            layout="responsive"
            width={10}
            height={10}
            alt="Image"
            src={"/images/hotel2.webp"}
          />
          <p className="text-gray-600 text-cernter flex items-center gap-1 justify-center lg:hidden py-2">
            <span>
              <RiHotelLine size={20} color="#75A47F" />
            </span>
            <span> اقامت در بهترین مراکز اقامتی</span>
          </p>
          <p className="hidden lg:block py-2 text-gray-600 text-center px-4 text-sm">
            اقامت در بهترین هتل‌ها، اقامتگاه‌های بوم‌گردی و سوئیت‌های مجهز
            متناسب با نوع تور و بودجه شما.
          </p>
        </div>

        <div className="benefits">
          <Image
            className="rounded-t-xl"
            layout="responsive"
            width={10}
            height={10}
            alt="Image"
            src={"/images/vip.webp"}
          />
          <p className=" lg:hidden text-center text-gray-600 flex gap-1 items-center justify-center py-2">
            <span>
              <BsSuitcase2 size={20}  color="#75A47F"/>
            </span>
            <span>خدمات ویژه</span>
          </p>
          <p className="py-1 text-sm text-center px-4 text-gray-600 hidden lg:block">
            تورهای خصوصی، VIP، گروهی و شرکتی، با امکان طراحی برنامه اختصاصی بر
            اساس نیاز شما.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benfeits;
