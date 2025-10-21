import Image from "next/image";
import { toPersianDigits } from "@/utils/changeNum";

function SocialMedia() {
  
  return (
    <div className="w-9/10 flex flex-col items-center mx-auto mt-12 md:mt-15 md:w-8/10">
      <p className="text-green-500 text-lg font-semibold md:text-xl">
        ما را در شبکه های اجتماعی دنبال کنید
      </p>
      <div className="flex  gap-15  mt-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 md:w-13">
            <Image
              src="/icons/telegram2.svg"
              width={32}
              height={32}
              layout="responsive"
              alt="Icon"
            />
          </div>
          <p className="text-gray-700 ">torinoTravel@</p>
        </div>
        <div className=" flex flex-col items-center gap-2 ">
          <div className="w-10 md:w-13">
            <Image
              src="/icons/instagram.svg"
              width={32}
              height={32}
              layout="responsive"
              alt="Icon"
            />
          </div>
          <p className="text-gray-700 ">torino-travel</p>
        </div>
        <div className=" flex flex-col items-center gap-2">
          <div className="w-10 md:w-13">
            <Image
              src="/icons/WhatsApp.svg"
              width={32}
              height={32}
              layout="responsive"
              alt="Icon"
              color="#4285F4"
            />
          </div>
          <p className="text-gray-700">{toPersianDigits("09122122121")}</p>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
