import SEO from "@/components/common/SEO";
import SuccessPage from "@/components/templates/SuccessPage";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Success() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      router.push("/torino");
    } else {
      setChecking(false);
    }
  }, []);
  if (checking) return <p>درحال بررسی ورود...</p>;
  return (
    <>
      <SEO
        title="پرداخت موفق"
        description="پرداخت شما با موفقیت انجام شد. جزئیات تراکنش را در پنل کاربری خود مشاهده کنید."
      />
      <SuccessPage />
    </>
  );
}

export default Success;
