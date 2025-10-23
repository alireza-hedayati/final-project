import SEO from "@/components/common/SEO";
import ProtectedRoute from "@/components/helpers/ProtectedRoute";
import SuccessPage from "@/components/templates/SuccessPage";

function Success() {
  return (
    <>
      <SEO
        title="پرداخت موفق"
        description="پرداخت شما با موفقیت انجام شد. جزئیات تراکنش را در پنل کاربری خود مشاهده کنید."
      />
      <ProtectedRoute>
        <SuccessPage />
      </ProtectedRoute>
    </>
  );
}

export default Success;
