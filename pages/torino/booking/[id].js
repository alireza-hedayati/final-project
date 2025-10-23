import SEO from "@/components/common/SEO";
import ProtectedRoute from "@/components/helpers/ProtectedRoute";
import BookingPage from "@/components/templates/BookingPage";
import api from "@/config/api";

export default function BookingTour({ data }) {
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
        <BookingPage {...data} />
      </ProtectedRoute>
    </>
  );
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
