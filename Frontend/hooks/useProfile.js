import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import api from "@/config/api";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
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
      const res = await api.get("/user/profile");
      return res.data.user || res.data;
    },
    staleTime: 1000 * 60 * 5,
    retry: false,
    enabled: isProfileReady && hasAccessToken,
  });

  const isAuthenticated = !!profile && !isError;

  const { mutate: updateProfile, isPending: isUpdatingProfile } = useMutation({
    mutationFn: async (newData) => {
      const res = await api.put("/user/profile", newData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    },
  });

  const { mutate: updateBankInfo, isPending: isUpdatingBank } = useMutation({
    mutationFn: async (payment) => {
      const res = await api.put("/user/profile", { payment });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
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
