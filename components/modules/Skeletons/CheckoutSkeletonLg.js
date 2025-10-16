import ContentLoader from "react-content-loader";

const CheckoutSkeletonLg = (props) => (
  <div className="border-gray-200 mx-auto border-[1px] rounded-lg mt-5 pb-2">
    <ContentLoader
      speed={2}
      width={700}
      height={160}
      viewBox="0 0 700 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="550" y="10" rx="8" ry="8" width="125" height="20" />
      <rect x="500" y="50" rx="8" ry="8" width="175" height="30" />
      <rect x="300" y="50" rx="8" ry="8" width="175" height="30" />
      <rect x="100" y="50" rx="8" ry="8" width="175" height="30" />

      {/* اینپوت پایین */}
      <rect x="500" y="100" rx="8" ry="8" width="175" height="30" />

      {/* دکمه */}
      
    </ContentLoader>
  </div>
);
export default CheckoutSkeletonLg;
