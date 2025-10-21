import { MdLocalPhone } from "react-icons/md";
import { toPersianDigits } from "@/utils/changeNum";
import Link from "next/link";

function PhoneBanner() {

  const number = "021-4018";
  
  return (
    <div className="my-10 relative border-gray-100 border-2  rounded-t-lg w-9/10 mx-auto  xl:w-full lg:flex lg:rounded-2xl">
      <div className=" mx-auto flex flex-4 justify-center relative h-38  md:mx-auto md:w-auto md:h-40 lg:w-full lg:h-44">
        <div className="bg-green-600 w-full rounded-lg"></div>
        <img
          className="bg-transparent absolute left-0 bottom-0 "
          src="/images/cartoon.webp"
        />
      </div>
      <div className="absolute top-5 right-3">
        <p className=" text-white text-lg font-semibold xl:text-2xl  ">
          خرید تلفنی از <span className="text-green-900">تورینو</span>
        </p>
        <p className=" text-sm text-white xl:text-lg xl:py-2 ">
          به هر کجا که میخواهید!
        </p>
      </div>
      <div className="flex  flex-1 items-center justify-between px-5 py-3 lg:flex-col lg:py-10 ">
        <p className="flex items-center justify-center gap-1 text-lg font-semibold">
          {toPersianDigits(number)}
          <MdLocalPhone />
        </p>
        <Link
          href="/torino/contact-us"
          className="bg-green-900 border-0 px-2 text-white rounded-lg py-1 cursor-pointer hover:bg-green-700 "
        >
          اطلاعات بیشتر
        </Link>
      </div>
    </div>
  );
}

export default PhoneBanner;
