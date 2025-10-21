import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";

function SuccessPage() {
  
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const purchaseSuccess = sessionStorage.getItem("purchaseSuccess");
    if (!purchaseSuccess) {
      router.replace("/torino");
      return;
    }
    const duration = 5000;
    const step = 10;
    const increment = 100 / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      setProgress(current);
      if (current >= 100) {
        clearInterval(timer);
        sessionStorage.removeItem("purchaseSuccess");
        router.push("/torino");
      }
    }, step);
    return () => clearInterval(timer);
  }, [router]);

  return (
    <main className="my-20">
      <div className="w-8/10 mx-auto mt-20 flex items-center justify-center gap-2 lg:mt-20">
        <span className="text-xl font-semibold">Torino</span>
        <div className="flex items-center justify-center">
          <span className="bg-green-500 w-9 h-9 rounded-full flex items-center justify-center">
            <BiSolidPlaneAlt size={25} color="snow" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10">
        <span className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center">
          <FaCheck size={40} color="snow" />
        </span>
      </div>
      <div className="flex items-center justify-center mt-7">
        <p className="text-xl font-semibold ">پرداخت شما با موفقیت انجام شد</p>
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="relative w-[150px] h-[44px] rounded-lg overflow-hidden bg-green-300 shadow-md">
          <div
            className="absolute left-0 top-0 h-full bg-green-600 transition-all ease-linear"
            style={{
              width: `${progress}%`,
              transitionDuration: "100ms",
            }}
          ></div>

          <Link
          aria-label="صفحه-اصلی"
            href="/torino"
            className="absolute inset-0 flex items-center justify-center text-white font-medium z-10 select-none"
          >
            صفحه اصلی
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SuccessPage;
