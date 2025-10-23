import { AiFillSliders } from "react-icons/ai";

function Refund() {

  return (
    <div className="mt-8 w-9/10 mx-auto">
      <h3 className="text-xl text-green-500 font-semibold flex items-center gap-1 lg:text-2xl">
    
        <AiFillSliders color="#55AD9B" /> ضمانت بازگشت وجه
      </h3>
      <p className="text-gray-500 mt-2 text-sm lg:text-base" style={{fontFamily:"YekanBakh"}}>
        ما در تورینو به انتخاب و آرامش شما احترام می‌گذاریم. در صورت لغو تور تا
        ۲۴ ساعت قبل از حرکت، ۲۵٪ از مبلغ پرداختی به شما بازگردانده می‌شود. هدف
        ما ایجاد تجربه‌ای شفاف، مطمئن و منصفانه برای تمام مسافران است.
      </p>
    </div>
  );
}

export default Refund;
