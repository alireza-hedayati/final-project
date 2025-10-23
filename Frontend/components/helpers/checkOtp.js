import api from "@/config/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const checkOtp = ({ onLoginSuccess }) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      return api.post("/auth/check-otp", data);
    },
    onSuccess: (response) => {
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
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
      toast.success("✔️ورود با موفقیت انجام شد");
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    },
    onError: (error) => {

      toast.error(error.response?.data?.message || "❌خطا در ورود");
    },
  });
};

export default checkOtp;
