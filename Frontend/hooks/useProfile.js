import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import api from "@/config/api";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
function useProfile() {
  const queryClient = useQueryClient();
  const [isProfileReady, setIsProfileReady] = useState(false);

  useEffect(() => {
    setIsProfileReady(true);
  }, []);
  const hasAccessToken = !!Cookies.get("accessToken");

  const {
    data: profile,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      try {
        const res = await api.get("/user/profile");
        return res.data.user || res.data;
      } catch (error) {
        let errorMessage =
          "خطا در برقراری ارتباط با سرور. لطفاً دوباره تلاش کنید.";

        if (error?.response?.status === 401) {
          errorMessage = "دسترسی شما منقضی شده است. لطفاً دوباره وارد شوید.";
        } else if (error?.response?.status === 404) {
          errorMessage = "پروفایل کاربر یافت نشد.";
        } else if (error?.response?.status === 500) {
          errorMessage = "خطای داخلی سرور رخ داده است.";
        }

        throw new Error(errorMessage);
      }
    },
    staleTime: 1000 * 60 * 5,
    retry: false,
    enabled: isProfileReady && hasAccessToken,
  });

  const isAuthenticated = !!profile && !isError;

  const { mutate: updateProfile, isPending: isUpdatingProfile } = useMutation({
    mutationFn: async (newData) => {
      try {
        const res = await api.put("/user/profile", newData);
        return res.data;
      } catch (error) {
        let errorMessage = "خطا در بروزرسانی اطلاعات. لطفاً دوباره تلاش کنید.";

        if (error?.response?.status === 400) {
          errorMessage = "اطلاعات واردشده نامعتبر است.";
        } else if (error?.response?.status === 401) {
          errorMessage = "دسترسی شما منقضی شده است. لطفاً وارد شوید.";
        } else if (error?.response?.status === 500) {
          errorMessage = "خطای سرور رخ داده است.";
        }

        throw new Error(errorMessage);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const { mutate: updateBankInfo, isPending: isUpdatingBank } = useMutation({
    mutationFn: async (payment) => {
      try {
        const res = await api.put("/user/profile", { payment });
        return res.data;
      } catch (error) {
        let errorMessage = "خطا در بروزرسانی اطلاعات. لطفاً دوباره تلاش کنید.";
        if (error?.response?.status === 400) {
          errorMessage = "اطلاعات واردشده نامعتبر است.";
        } else if (error?.response?.status === 401) {
          errorMessage = "دسترسی شما منقضی شده است. لطفاً وارد شوید.";
        } else if (error?.response?.status === 500) {
          errorMessage = "خطای سرور رخ داده است.";
        }

        throw new Error(errorMessage);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return {
    profile,
    isLoading,
    isError,
    error,
    isAuthenticated,
    updateProfile,
    isUpdatingBank,
    updateBankInfo,
    isUpdatingProfile,
  };
}

export default useProfile;
