import PersianDateInput from "@/utils/PersianDate";
import informationSchema from "@/validation/InformationValidation";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import GenderDropdown from "./GenderDropdown";
import useProfile from "@/hooks/useProfile";
function InformationForm({ onSave, setIsOpen }) {
  const { profile, isLoading } = useProfile();
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(informationSchema),
    defaultValues: {
      fullName: "",
      nationalCode: "",
      gender: "",
      birthDate: null,
    },
  });

  useEffect(() => {
    if (profile) {
      reset({
        fullName: `${profile.firstName || ""}${profile.lastName || ""}`,
        nationalCode: profile.nationalCode || "",
        gender:
          profile.gender === "male"
            ? "مرد"
            : profile.gender === "female"
            ? "زن"
            : "",
        birthDate: profile.birthDate ? new Date(profile.birthDate) : null,
      });
    }
  }, [profile, reset]);
  const submitHandler = (data) => {
    onSave(data);
  };

  if (isLoading) return <p>درحال بارگزاری اطلاعات ...</p>;
  return (
    <div>
      <p>ویرایش اطلاعات شخصی</p>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="mt-3">
          <input
            type="text"
            {...register("fullName")}
            placeholder="نام و نام خانوادگی"
            className="cursor-pointer border-gray-300 border-[1px] px-2 py-1 rounded-lg w-full outline-none"
          />
          <span>{errors.fullName?.message}</span>
        </div>
        <div className="mt-3">
          <input
            type="tel"
            {...register("nationalCode")}
            placeholder="کد ملی"
            className="cursor-pointer border-gray-300 border-[1px] outline-0 px-2 py-1 rounded-lg w-full placeholder:text-right"
          />
          <span>{errors.nationalCode?.message}</span>
        </div>
        <div className="mt-3 border-[1px] border-gray-300 rounded-lg">
          <GenderDropdown errors={errors} control={control} />
        </div>
        <div className="cursor-pointer border-gray-300 border-[1px] px-2 py-1 rounded-lg mt-3">
          <Controller
            name="birthDate"
            control={control}
            render={({ field }) => (
              <PersianDateInput
                date={field.value}
                setDate={(value) => field.onChange(value?.toDate?.() || value)}
              />
            )}
          />
          <span>{errors.birthDate?.message}</span>
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
            onClick={() => setIsOpen(false)}
          >
            انصراف
          </button>
        </div>
      </form>
    </div>
  );
}

export default InformationForm;
