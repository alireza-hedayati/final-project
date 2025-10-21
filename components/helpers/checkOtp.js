import api from "@/config/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const checkOtp = ({ onLoginSuccess }) => {
  
  return useMutation({
    mutationFn: async (data) => {
      return api.post("/auth/check-otp", data);
    },
    onSuccess: (response) => {
      const userData = response.data.user;
      Cookies.set("accessToken", response.data.accessToken, {
        expires: 30,
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("refreshToken", response.data.refreshToken, {
        expires: 365,
        secure: true,
        sameSite: "strict",
      });
      Cookies.set("user-mobile", userData.mobile, {
        expires: 30,
        secure: true,
        sameSite: "strict",
      });
      toast.success("✔️ورود با موفقیت انجام شد");
      if (onLoginSuccess) {
        onLoginSuccess({
          mobile: userData.mobile,
        });
      }
    },
    onError: (error) => {
      console.log("error response:", error.response?.data);
      toast.error(error.response?.data?.message || "❌خطا در ورود");
    },
  });
};

export default checkOtp;
