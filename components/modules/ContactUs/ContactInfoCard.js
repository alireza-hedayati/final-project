import { toPersianDigits } from "@/utils/changeNum";
import { FiPhoneCall } from "react-icons/fi";

function ContactInfoCard() {
  
  return (
    <div className="w-9/10 mx-auto mt-12 flex flex-col items-center gap-3 md:w-8/10 lg:mt-8">
      <h4 className="text-green-500 font-semibold text-lg flex items-center gap-1 md:text-xl">
        <FiPhoneCall />
        راه های ارتباط با ما
      </h4>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-1 text-blue-500 md:text-lg">
          📍 آدرس دفتر مرکزی:
        </p>
        <p className="md:text-lg" style={{fontFamily:"YekanBakh"}}>
          تهران،ولیعصر، بالاتر از تقاطع طالقانی، پلاک ۱۲۳
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-2 text-blue-500 md:text-lg">
          📍 آدرس نمایندگی:
        </p>
        <p className="md:text-lg" style={{fontFamily:"YekanBakh"}}>تهران، خیابان شوش، کوچهٔ گلستان، پلاک ۷۸</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-1 text-blue-500 md:text-lg">
          ☎️ شماره تماس:
        </p>
        <p className="md:text-lg">{toPersianDigits("0214018")}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-1 text-blue-500 md:text-lg">
          📧 ایمیل پشتیبانی:
        </p>
        <p className="md:text-lg " style={{fontFamily:"YekanBakh"}}>supportTorino@gmail.com</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-1 text-blue-500 md:text-lg">
          🕗 ساعات پاسخگویی:
        </p>
        <p className="md:text-lg" style={{fontFamily:"YekanBakh"}}>همه‌روزه ۹ صبح تا ۹ شب</p>
      </div>
    </div>
  );
}

export default ContactInfoCard;
