import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import useProfile from "@/hooks/useProfile";
import GenderDropdown from "../InformationModules/GenderDropdown";
import PersianDateInput from "@/utils/PersianDate";
import informationSchema from "@/validation/InformationValidation";
import { IoPerson } from "react-icons/io5";
import CheckoutSkeleton from "../Skeletons/CheckoutSkeleton";
import useIsMobile from "@/hooks/useIsMobile";
import CheckoutSkeletonLg from "../Skeletons/CheckoutSkeletonLg";

function CheckoutForm({ onSave }) {

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
        fullName: `${profile.firstName || ""}${profile.lastName || ""}`.trim(),
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
  const isMobile = useIsMobile(1024);
  if (isLoading) {
    if (isMobile) {
      return <CheckoutSkeleton />;
    } else {
      return <CheckoutSkeletonLg />;
    }
  }
  
  return (
    <div className="w-7/11 mx-auto border-[1px] shadow-sm border-gray-200 rounded-lg mt-5 p-3 lg:w-8/10 lg:pb-[31px] lg:mx-0 lg:mt-5">
      <div className="flex items-center gap-1 px-1 ">
        <span>
          <IoPerson />
        </span>
        <span>مشخصات مسافر</span>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="lg:flex flex-wrap lg:w-full lg:gap-2"
      >
        <div className="mt-3 lg:w-48">
          <input
            type="text"
            {...register("fullName")}
            placeholder="نام و نام خانوادگی"
            className="cursor-pointer border-gray-300 border-[1px] px-2 py-1 rounded-lg w-full outline-none"
          />
          <span>{errors.fullName?.message}</span>
        </div>

        <div className="mt-3 lg:w-48">
          <input
            type="tel"
            {...register("nationalCode")}
            placeholder="کد ملی"
            className="cursor-pointer border-gray-300 border-[1px] outline-0 px-2 py-1 rounded-lg w-full placeholder:text-right"
          />
          <span>{errors.nationalCode?.message}</span>
        </div>

        <div className="mt-3 border-[1px] border-gray-300 rounded-lg lg:w-48 ">
          <GenderDropdown errors={errors} control={control} />
        </div>
        <div className="cursor-pointer border-gray-300 border-[1px] px-2 py-1 rounded-lg mt-3 lg:w-48">
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
      </form>
    </div>
  );
}

export default CheckoutForm;
