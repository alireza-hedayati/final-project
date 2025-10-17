import { FiPhoneCall } from "react-icons/fi";

function ContactInfoCard() {
  return (
    <div className="w-9/10 mx-auto mt-12 flex flex-col items-center gap-3 md:w-8/10 lg:mt-8">
      <p className="text-green-500 font-semibold text-lg flex items-center gap-1 md:text-xl">
        <FiPhoneCall />
        راه های ارتباط با ما
      </p>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-1 text-gray-700 md:text-lg">
          📍 آدرس دفتر مرکزی:
        </p>
        <p className="md:text-lg">
          تهران،ولیعصر، بالاتر از تقاطع طالقانی، پلاک ۱۲۳
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-2 text-gray-700 md:text-lg">
          📍 آدرس نمایندگی:
        </p>
        <p className="md:text-lg">تهران، خیابان شوش، کوچهٔ گلستان، پلاک ۷۸</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-1 text-gray-700 md:text-lg">
          ☎️ شماره تماس:
        </p>
        <p className="md:text-lg">۰۲۱-۲۲۲۳۴۵۶۷</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-1 text-gray-700 md:text-lg">
          📧 ایمیل پشتیبانی:
        </p>
        <p className="md:text-lg">supportTorino@gmail.com</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="flex items-center gap-1 text-gray-700 md:text-lg">
          🕗 ساعات پاسخگویی:
        </p>
        <p className="md:text-lg">همه‌روزه ۹ صبح تا ۹ شب</p>
      </div>
    </div>
  );
}

export default ContactInfoCard;
