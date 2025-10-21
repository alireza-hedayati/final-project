import { useUser } from "@/context/UserContext";
import { toPersianDigits } from "@/utils/changeNum";
import { useState } from "react";
import { PiPencilSimpleLine } from "react-icons/pi";
import useProfile from "@/hooks/useProfile";
import EmailForm from "./EmailForm";
import ProfileSkeleton from "../Skeletons/ProfileSkeleton";

function AccountInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useUser();
  const mobileNumber = state.user?.mobile;

  const { profile, isLoading, updateProfile } = useProfile();

  if (isLoading)
    return (
      <div className="mt-10">
        <ProfileSkeleton />
      </div>
    );

  const handleSaveEmail = (newEmail) => {
    updateProfile({ ...profile, email: newEmail });
    setIsOpen(false);
  };

  return (
    <div className="border-[1px] border-gray-200 shadow-sm rounded-xl w-8/10 mx-auto p-3 mt-5 lg:py-0 lg:w-14/15">
      <p className="py-3 text-lg font-semibold">اطلاعات حساب کاربری</p>
      <div className="flex items-center justify-between py-2">
        <p>شماره موبایل</p>
        <p className="text-sm text-gray-500">
          {mobileNumber ? toPersianDigits(mobileNumber) : ""}
        </p>
      </div>
      {!isOpen ? (
        <div className="flex itmes-center justify-between my-4">
          <p>ایمیل</p>
          {profile?.email ? (
            <p className="text-sm text-gray-500">{profile.email}</p>
          ) : (
            <button
              aria-label="افزودن-ایمیل"
              className="flex items-center cursor-pointer text-blue-500 hover:text-blue-700"
            >
              <span>
                <PiPencilSimpleLine />
              </span>
              <span onClick={() => setIsOpen(true)}>افزودن</span>
            </button>
          )}
        </div>
      ) : (
        <EmailForm setIsOpen={setIsOpen} onSave={handleSaveEmail} />
      )}
    </div>
  );
}

export default AccountInfo;
