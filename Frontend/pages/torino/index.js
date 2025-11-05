import SEO from "@/components/common/SEO";
import HomePage from "@/components/templates/HomePage";
import api from "@/config/api";
import React from "react";

export default function Torino({ initialData, error }) {
  return (
    <>
      <SEO
        title="صفحه اصلی"
        description="تورینو؛ بهترین مقصد برای رزرو تورهای داخلی و خارجی. با ما سفر خود را هوشمندانه برنامه‌ریزی کنید."
        keywords="تورینو, تور, سفر, رزرو تور, تور لحظه آخری"
      />
      <div>
        {error ? (
          <div className="text-red-500 text-center p-6">{error}</div>
        ) : (
          <HomePage initialData={initialData} />
        )}
      </div>
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
    let errorMessage = "خطا در برقراری ارتباط با سرور. لطفاً دوباره تلاش کنید.";
    if (error?.response?.status === 404) {
      errorMessage = "تور مورد نظر یافت نشد.";
    } else if (error?.response?.status === 500) {
      errorMessage = "خطای سرور";
    }
    return {
      props: { error: errorMessage },
    };
  }
}
