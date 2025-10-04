import Success from "@/utils/successToast";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "@/utils/api";

const useLogin = (onSuccessStepChange) => {
  return useMutation({
    mutationFn: (data) => api.post("/auth/send-otp", data),
    onSuccess: (response) => {
      toast.success(<Success response={response.data} />, {
        position: "top-right",
        autoClose: 5000,
      });
      if (onSuccessStepChange) onSuccessStepChange();
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || error.message);
    },
  });
};
export default useLogin;
