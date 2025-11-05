import SEO from "@/components/common/SEO";
import ProtectedRoute from "@/components/helpers/ProtectedRoute";
import BookingPage from "@/components/templates/BookingPage";
import api from "@/config/api";

export default function BookingTour({ data, error }) {
  return (
    <>
      <SEO
        title={`رزرو ${data?.title || "تور"}`}
        description={`رزرو ${
          data?.title || "تور گردشگری"
        } با تورینو. قیمت، خدمات و برنامه سفر را مشاهده کنید.`}
        keywords={`${data?.title}, رزرو تور, تورینو, سفر`}
      />

      <ProtectedRoute>
        {error ? (
          <div className="text-red-500 text-center p-6">{error}</div>
        ) : (
          <BookingPage {...data} />
        )}
      </ProtectedRoute>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  try {
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
  } catch (error) {
    let errorMessage = "خطا در برقراری ارتباط با سرور. لطفاً دوباره تلاش کنید.";

    if (error?.response?.status === 404) {
      errorMessage = "تور مورد نظر یافت نشد.";
    } else if (error?.response?.status === 500) {
      errorMessage = "خطای سرور";
    }
    return {
      props: {initialData:null, error:errorMessage },
    };
  }
}
