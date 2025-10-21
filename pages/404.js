import SEO from "@/components/common/SEO";
import Image from "next/image";
import Link from "next/link";

function Custom404() {
  return (
    <>
      <SEO
        title="صفحه یافت نشد"
        description="صفحه مورد نظر شما در تورینو پیدا نشد."
      />
      <div className="w-9/10 mx-auto flex flex-col items-center justify-center my-20 lg:flex-row-reverse lg:gap-20">
        <div>
          <Image src="/images/tv.png" width={320} height={320} />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-xl font-semibold">صفحه مورد نظر یافت نشد!</p>
          <Link
            href="/torino"
            className="w-9/10 text-center mx-auto mt-3 cursor-pointer bg-green-200 text-green-500 rounded-md px-2 py-1 hover:bg-green-300 hover:text-green-600 lg:mt-7"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </div>
    </>
  );
}

export default Custom404;
