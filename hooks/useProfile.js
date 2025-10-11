import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import api from "@/utils/api";

function useProfile() {
  const queryClient = useQueryClient();

  const { data: profile, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: async () => {
      const res = await api.get("/user/profile");
      return res.data;
    },
    staleTime: 1000 * 60 * 5,
  });
  const { mutate: updateProfile, isPending: isUpdatingProfile } = useMutation({
    mutationFn: async (newData) => {
      const res = await api.put("/user/profile", newData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userProfile"]);
    },
  });

  const { mutate: updateBankInfo, isPending: isUpdatingBank } = useMutation({
    mutationFn: async (payment) => {
      const res = await api.put("/user/profile", { payment });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userProfile"]);
    },
  });
  return {
    profile,
    isLoading,
    updateProfile,
    isUpdatingBank,
    updateBankInfo,
    isUpdatingProfile,
  };
}

export default useProfile;
