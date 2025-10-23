import SEO from "@/components/common/SEO";
import HomePage from "@/components/templates/HomePage";
import api from "@/config/api";
import { notFound } from "next/navigation";
import React from "react";

export default function Torino({ initialData }) {
  return (
    <>
      <SEO
        title="صفحه اصلی"
        description="تورینو؛ بهترین مقصد برای رزرو تورهای داخلی و خارجی. با ما سفر خود را هوشمندانه برنامه‌ریزی کنید."
        keywords="تورینو, تور, سفر, رزرو تور, تور لحظه آخری"
      />
      <HomePage initialData={initialData} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { startDate, originId, destinationId } = context.query;

  try {
    const params = new URLSearchParams();
    if (originId) params.append("originId", originId);
    if (destinationId) params.append("destinationId", destinationId);
    if (startDate) {
      const apiStartDate = new Date(`${startDate}T00:00:00.000Z`).toISOString();
      params.append("startDate", apiStartDate);
    }
    const res = await api.get(`/tour?${params.toString()}`);
    const data = res.data;
    return {
      props: {
        initialData: data,
      },
    };
  } catch (error) {
    console.error("API request failed:", error.message);
    return { notFound: true };
  }
}
