import React, { useState } from "react";
import { PiPencilSimpleLine } from "react-icons/pi";
import BankForm from "./BankForm";
import useProfile from "@/hooks/useProfile";

function BankInformation() {
  const [open, setOpen] = useState(false);
  
  const { updateBankInfo, profile, isLoading } = useProfile();
  if (isLoading) return <p>در حال بارگزاری اطلاعات</p>;
  const handleSave = (data) => {
    const newPayment = {
      debitCard_code:data.cardNumber,
      accountIdentifier:data.accountIdentifier,
      shaba_code:data.shebaNumber,
    };
    updateBankInfo(newPayment);
    setOpen(false);
  };

  const payment = profile?.payment || {};
  return (
    <div className="w-8/10 border-gray-200 border-[1px] rounded-xl mx-auto mt-5 px-3 py-2 shadow-sm">
      {!open ? (
        <>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">اطلاعات حساب بانکی</p>
            <button
              className="cursor-pointer flex items-center gap-1 text-blue-500 hover:text-blue-700"
              onClick={() => setOpen((prev) => !prev)}
            >
              <span>
                <PiPencilSimpleLine />
              </span>
              <span>ویرایش اطلاعات</span>
            </button>
          </div>

          <div>
            <div className="flex items-center justify-between mt-4">
              <p>شماره کارت</p>
              <p className="text-sm text-gray-500">
                {payment?.debitCard_code || "__"}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p>شماره شبا</p>
              <p className="text-sm text-gray-500">
                {payment?.shaba_code || "__"}
              </p>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p>شماره حساب</p>
              <p className="text-sm text-gray-500">
                {payment?.accountIdentifier || "__"}
              </p>
            </div>
          </div>
        </>
      ) : (
        <BankForm setOpen={setOpen} setInformation={handleSave} />
      )}
    </div>
  );
}

export default BankInformation;
