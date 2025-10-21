import Link from "next/link";

function CallToAction() {
  return (
    <div className="w-7/10 mx-auto mt-7 md:mt-10">
      <p className="text-center text-lg font-semibold text-blue-500 md:text-xl md:font-bold">
        فرصت رو از دست نده! 
      </p>
      <p className="text-center py-2 font-semibold text-lg text-gray-500">همین حالا با تورینو سفر رویایی‌ات رو برنامه‌ریزی کن
        🌍</p>
      <div className="flex items-center justify-center mt-1">
        <Link href="/torino" className="cursor-pointer bg-green-500 text-white border-0 rounded-md px-3 py-2 hover:bg-green-600">مشاهده ی تور های فعال</Link>
      </div>
    </div>
  );
}

export default CallToAction;
