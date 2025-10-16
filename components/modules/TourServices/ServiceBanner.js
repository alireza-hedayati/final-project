import Link from "next/link";
import Image from "next/image";

function ServiceBanner() {
  return (
    <div className="relative mt-0">
      <div className="mx-auto h-50 flex justify-center lg:h-80 xl:h-90">
        <Image
          layout="responsive"
          width={10}
          height={10}
          src="/images/adventure1.webp"
          alt="Image"
        />
      </div>
      <div className="hidden lg:flex flex-col lg:absolute lg:top-3 lg:left-5">
        <h3 className="text-xl font-bold text-gray-600 xl:text-2xl">
          بدون محدودیت سفر کنید
        </h3>
        <p className="text-gray-500">
          لحظاتی فراموش نشدنی را در مکان هایی رویایی تجربه کنید
        </p>
        <Link
          href="/torino"
          className="bg-[linear-gradient(to_right,#00b09b,#96c93d)] text-center w-40 mt-2 py-1 rounded-lg text-white hover:opacity-60 xl:text-lg xl:w-48"
        >
          همین حالا رزرو کنید
        </Link>
      </div>
    </div>
  );
}

export default ServiceBanner;
