import { useState } from "react";
import { PiPencilSimpleLine } from "react-icons/pi";
import InformationForm from "./InformationForm";
import useProfile from "@/hooks/useProfile";
import ProfileSkeleton from "../Skeletons/ProfileSkeleton";
function PersonalInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const { profile, isLoading, updateProfile } = useProfile();

  const handleSavePersonalInfo = (data) => {
    const [firstName = "", lastName = ""] = data.fullName.split(" ");
    const newData = {
      ...profile,
      firstName,
      lastName,
      gender: data.gender === "مرد" ? "male" : "female",
      birthDate: data.birthDate
        ? new Date(data.birthDate).toISOString().split("T")[0]
        : null,
      nationalCode: data.nationalCode,
    };
    updateProfile(newData);
    setIsOpen(false);
  };
  if (isLoading)
    return (
      <div className="w-full lg:w-14/15 mx-auto mt-10">
        <ProfileSkeleton />
      </div>
    );

  return (
    <div className="w-8/10 mx-auto rounded-xl border-gray-200 border-[1px] p-3 mt-5 shadow-sm lg:w-14/15">
      {!isOpen ? (
        <>
          <div className="flex items-center justify-between">
            <p className="text-lg font-semibold">اطلاعات شخصی</p>
            <button
              className="cursor-pointer flex items-center gap-1 text-blue-500 hover:text-blue-700"
              onClick={() => setIsOpen(true)}
            >
              <span>
                <PiPencilSimpleLine />
              </span>
              <span>ویرایش اطلاعات</span>
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p>نام و نام خانوادگی</p>
            <p className="text-sm text-gray-500">
              {profile?.firstName || profile?.lastName
                ? `${profile.firstName || ""} ${profile.lastName || ""}`
                : "__"}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p>کد ملی</p>
            <p className="text-sm text-gray-500">
              {profile?.nationalCode ? profile.nationalCode : "__"}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p>جنسیت</p>
            <p className="text-sm text-gray-500">
              {profile?.gender === "male"
                ? "مرد"
                : profile?.gender === "female"
                ? "زن"
                : "__"}
            </p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p>تاریخ تولد</p>
            <p className="text-sm text-gray-500">
              {profile?.birthDate
                ? new Date(profile?.birthDate).toLocaleDateString("fa-IR")
                : "__"}
            </p>
          </div>
        </>
      ) : (
        <InformationForm
          setIsOpen={setIsOpen}
          onSave={handleSavePersonalInfo}
        />
      )}
    </div>
  );
}

export default PersonalInfo;
