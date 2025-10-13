import BookingPage from "@/components/templates/BookingPage";
import api from "@/utils/api";
import Cookies from "js-cookie";
import { notFound } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function BookingTour({ data }) {
  const [checking, setCheking] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("accessToken");
    if (!token) {
      router.push("/torino");
    } else {
      setCheking(false);
    }
  }, []);
  if (checking) return <p> در حال بررسی ورود ...</p>;
  return <BookingPage {...data} />;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await api.get(`/tour/${id}`);
  const data = res.data;

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}
