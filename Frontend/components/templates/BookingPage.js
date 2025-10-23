import useProfile from "@/hooks/useProfile";
import { useState } from "react";
import { toPersianDigits } from "@/utils/changeNum";
import { toast } from "react-toastify";
import api from "@/config/api";
import { useRouter } from "next/router";
import CheckoutForm from "../modules/CheckoutForm/CheckoutForm";

function BookingPage(props) {
  const { title, id: tourId, duration, price } = props;
  const { profile } = useProfile();
  const router = useRouter();
  const [passengerInfo, setPassengerInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    try {
      setLoading(true);

      const passenger =
        passengerInfo && passengerInfo.fullName
          ? passengerInfo
          : {
              fullName: `${profile?.firstName ?? ""}${
                profile?.lastName ?? ""
              }`.trim(),
              nationalCode: profile?.nationalCode ?? "",
              gender:
                profile?.gender === "male" || profile?.gender === "female"
                  ? profile.gender
                  : "",
              birthDate: profile?.birthDate ?? null,
            };
      if (
        !passenger.fullName ||
        !passenger.nationalCode ||
        !passenger.birthDate ||
        !passenger.gender
      ) {
        toast.error("لطفا اطلاعات مسافر را کامل وارد کنید");
        setLoading(false);
        return;
      }
      await api.put(`/basket/${tourId}`);
      await api.post("/order", passenger);
      toast.success("خرید شما با موفقیت ثبت شد 🎉");
      sessionStorage.setItem("purchaseSuccess", "true");
      router.push("/torino/booking/success");
    } catch (err) {
      toast.error("مشکل در ثبت سفارش دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lg:flex lg:items-start lg:justify-center lg:mx-auto lg:w-[88%]">
      <div>
        <CheckoutForm onSave={setPassengerInfo} />
      </div>
      <div className="w-7/11  mx-auto border-[1px] border-gray-200 shadow-md rounded-lg mt-5 py-2 lg:w-3/11 lg:py-0 lg:h-auto lg:pb-2">
        <div className="border-custom-dashed flex items-center justify-between  px-2 p-5">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-gray-400">{duration}</p>
        </div>
        <div className="flex justify-between py-4 px-2">
          <p>قیمت نهایی</p>
          <p className="text-sm">
            <span className="text-blue-500 text-xl font-semibold">
              {" "}
              {toPersianDigits(price.toLocaleString())}
            </span>{" "}
            تومان
          </p>
        </div>
        <div className="flex justify-center items-center w-full">
          <button
            aria-label="ثبت-نهایی"
            onClick={handleBooking}
            disabled={loading}
            className="bg-green-500 text-white rouded-lg w-9/10 rounded-lg py-1 cursor-pointer hover:bg-green-600"
          >
            ثبت و خرید نهایی
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
