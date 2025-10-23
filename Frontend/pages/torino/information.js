import SEO from "@/components/common/SEO";
import InformationPage from "@/components/templates/InformationPage";

import ProtectedRoute from "@/components/helpers/ProtectedRoute";

function Information() {
  return (
    <>
      <SEO
        title="اطلاعات کاربری"
        description="اطلاعات حساب کاربری و رزروهای خود را در تورینو مشاهده و مدیریت کنید."
      />
      <ProtectedRoute>
        <InformationPage />
      </ProtectedRoute>
    </>
  );
}

export default Information;
