import useLogin from "../helpers/useLogin";
import { useEffect, useState } from "react";
import loginSchema from "@/validation/loginValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoReturnDownBack } from "react-icons/io5";
import OtpForm from "./OtpForm";
import checkOtp from "../helpers/checkOtp";
import { useUser } from "@/context/UserContext";
import { toPersianDigits } from "@/utils/changeNum";

function LoginModal({ setIsOpen }) {
  const [step, setStep] = useState(1);
  const [userNumber, setUserNumber] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const { dispatch } = useUser();
  const handleLoginSuccess = ({ mobile }) => {
    setIsOpen(false);


    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { user: { mobile: mobile || userNumber } },
    });
  };

  const sendOtp = useLogin(() => {
    setStep(2);
    setTimeLeft(120);
  });
  const checkingOtp = checkOtp({ onLoginSuccess: handleLoginSuccess });

  useEffect(() => {
    if (step === 2 && timeLeft <= 0) {
      setStep(1);
      setTimeLeft(0);
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [step, timeLeft]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitNumber = (data) => {
    setUserNumber(data.mobile);
    sendOtp.mutate({
      mobile: data.mobile,
    });
  };
  const submitOtp = (data) => {
    checkingOtp.mutate({
      mobile: userNumber,
      code: data.code,
    });
  };

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"
    >
      {step === 1 && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center bg-white rounded-xl p-2 w-[400px] relative"
        >
          <button
            aria-label="بستن-لاگین"
            onClick={() => setIsOpen(false)}
            className="absolute top-2 left-4 cursor-pointer hover:opacity-50"
          >
            &#x2715;
          </button>
          <p className="text-xl font-semibold py-5">ورود به تورینو</p>
          <p className="text-lg py-2">شماره موبایل خود را وارد کنید</p>
          <form className="flex flex-col" onSubmit={handleSubmit(submitNumber)}>
            <input
              type="text"
              {...register("mobile")}
              placeholder={toPersianDigits("4253***0912")}
              className="border-gray-100 text-left border-2  p-2 rounded-md mt-5 outline-0"
            />
            <span className="text-sm text-center text-red-500 py-1">
              {errors.mobile?.message}
            </span>
            <button
              type="submit"
              className="bg-green-500 text-white rounded-lg border-0 w-50 py-2 cursor-pointer my-2 hover:bg-green-700 "
              disabled={sendOtp.isLoading}
            >
              {sendOtp.isLoading ? "در حال ارسال..." : "ارسال کد تایید"}
            </button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center bg-white rounded-xl px-2 py-4 w-[400px] relative"
        >
          <button
            aria-label="برگشت-به-عقب"
            onClick={() => setStep(1)}
            className="absolute top-2 left-4 cursor-pointer hover:opacity-50"
          >
            <IoReturnDownBack fontSize={20} />
          </button>
          <p className="text-xl font-semibold py-5">کد تایید را وارد کنید.</p>
          <p className="text-lg py-2">
            کد تایید به شماره {userNumber} ارسال شد
          </p>
          <OtpForm
            onSubmit={submitOtp}
            resetKey={userNumber}
            isLoading={checkingOtp.isLoading}
            timeLeft={timeLeft}
          />

          {!checkingOtp.isIdle && checkingOtp.isError && (
            <p className="text-sm text-red-500 mt-3">
              {checkingOtp.error?.response?.data?.message ||
                "کد وارد شده اشتباه است"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default LoginModal;
