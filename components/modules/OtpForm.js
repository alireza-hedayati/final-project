import OTPInput from "react-otp-input";
import React, { useEffect } from "react";
import otpValidationSchema from "@/validation/OtpValidation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function OtpForm({ onSubmit, resetKey = null, isLoading = false, timeLeft }) {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(otpValidationSchema),
    defaultValues: {
      code: "",
    },
  });

  useEffect(() => {
    reset({ code: "" });
  }, [resetKey, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center space-y-4"
    >
      <div dir="ltr">
        <Controller
          name="code"
          control={control}
          render={({ field }) => {
            const submitIfComplete = (val) => {
              field.onChange(val);
              if (val.length === 6) {
                handleSubmit(onSubmit)();
              }
            };

            return (
              <OTPInput
                value={field.value}
                onChange={submitIfComplete}
                renderInput={(props) => (
                  <input {...props} type="tel" dir="ltr" />
                )}
                shouldAutoFocus
                numInputs={6}
                disabled={isLoading}
                inputStyle={{
                  border: "none",
                  outline: "none",
                  width: "2.5rem",
                  height: "2.5rem",
                  margin: "0 0.5rem",
                  fontSize: "1rem",
                  color: "#52575D",
                  borderRadius: 4,
                  border: "1px solid #ccc",
                  textAlign: "center",
                  direction: "ltr",
                }}
              />
            );
          }}
        />
      </div>
      {errors.code && (
        <p className="text-red-500 text-sm">{errors.code.message}</p>
      )}
      <p className="text-sm text-gray-500">
        {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}{" "}
        مانده تا ارسال مجدد کد
      </p>
      <button
        type="submit"
        className="btn bg-green-500 border-0 rounded-md py-2 text-white text-lg cursor-pointer w-full hover:bg-green-600"
        disabled={isLoading}
      >
        {isLoading ? "در حال بررسی..." : "ورود به تورینو"}
      </button>
    </form>
  );
}

export default OtpForm;
