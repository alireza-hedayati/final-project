import useProfile from "@/hooks/useProfile";
import { useRouter } from "next/router";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated, error, isError } = useProfile();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      if (isError && error?.response?.status === 401) {
        router.replace("/torino");
      }
    }
  });
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>در حال بارگذاری اطلاعات کاربر...</p>
      </div>
    );

  if (!isAuthenticated)
    return (
      <div className="flex items-center justify-center h-screen">
        <p>شما وارد حساب کاربری خود نشده‌اید.</p>
      </div>
    );
  return <>{children}</>;
}

export default ProtectedRoute;
