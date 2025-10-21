import SEO from "@/components/common/SEO";
import InformationPage from "@/components/templates/InformationPage";
import React, { useState } from "react";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

function Information() {
  const router = useRouter();
  const [checking, setChecking] = useState(true);
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      router.replace("/torino");
    } else {
      setChecking(false);
    }
  }, []);
  if (checking) return <p> در حال بررسی ورود...</p>;
  return (
    <>
      <SEO
        title="اطلاعات کاربری"
        description="اطلاعات حساب کاربری و رزروهای خود را در تورینو مشاهده و مدیریت کنید."
      />
      <InformationPage />
    </>
  );
}

export default Information;
