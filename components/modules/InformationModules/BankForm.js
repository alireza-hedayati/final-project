import bankInfoValidation from "@/validation/BankInfoValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useProfile from "@/hooks/useProfile";
function BankForm({ setOpen, setInformation }) {
  const { profile, isLoading } = useProfile();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bankInfoValidation),
    defaultValues: {
      cardNumber: "",
      accountIdentifier: "",
      shebaNumber: "",
    },
  });

  useEffect(() => {
    console.log("profile:", profile);
    if (profile)
      reset({
        cardNumber: profile.payment.debitCard_code || "",
        accountIdentifier: profile.payment.accountIdentifier || "",
        shebaNumber: profile.payment.shaba_code || "",
      });
  }, [reset, profile]);

  const submitHandler = (data) => {
    setInformation(data);
    setOpen(false);
  };

  if (isLoading) return <p>در حال بارگزاری...</p>;
  return (
    <div className="w-full">
      <p className="mt-2">ویرایش اطلاعات حساب بانکی</p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="w-full mt-4">
          <input
            type="tel"
            placeholder="شماره کارت"
            {...register("cardNumber")}
            className="border-gray-300 border-[1px] rounded-lg w-full text-right py-1 px-2"
          />
          <span className="text-red-400 text-sm p-1">
            {errors.cardNumber?.message}
          </span>
        </div>
        <div>
          <input
            type="tel"
            placeholder="شماره حساب"
            {...register("accountIdentifier")}
            className="border-gray-300 border-[1px] rounded-lg py-1 px-2 w-full text-right mt-4"
          />
          <span className="text-red-400 text-sm p-1">
            {errors.accountIdentifier?.message}
          </span>
        </div>
        <div>
          <input
            type="text"
            inputMode="numeric"
            placeholder="شماره شبا"
            {...register("shebaNumber")}
            className="border-gray-300 border-[1px] rounded-lg py-1 px-2 w-full text-right mt-4"
          />
          <span className="text-red-400 text-sm p-1">
            {errors.shebaNumber?.message}
          </span>
        </div>
        <div className="flex items-center justify-between mt-4 w-8/10 mx-auto">
          <button
            type="submit"
            className="cursor-pointer bg-green-500 w-30 text-white py-1 border-0 rounded-lg hover:bg-green-700"
          >
            تایید
          </button>
          <button
            className="cursor-pointer text-green-500  py-1 border-green-500 border-[2px] rounded-lg w-30 hover:text-red-400  hover:border-red-400"
            type="button"
            onClick={() => setOpen(false)}
          >
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default BankForm;
