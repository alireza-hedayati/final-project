import ContentLoader from "react-content-loader";

const CheckoutSkeleton = () => (
  <div className="w-7/11 max-w-[700px] mx-auto border border-gray-200 rounded-lg shadow-sm mt-5 p-4  lg:w-8/10 ">
    <ContentLoader
      speed={2}
      viewBox="0 0 700 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="w-full"
    >

      <rect x="350" y="1" rx="8" ry="8" width="45%" height="45" />
      <rect x="10" y="75" rx="8" ry="8" width="95%" height="75" />
      <rect x="10" y="175" rx="8" ry="8" width="95%" height="75" />
      <rect x="10" y="275" rx="8" ry="8" width="95%" height="75" />
      <rect x="10" y="375" rx="8" ry="8" width="95%" height="75" />
      
    </ContentLoader>
  </div>
);

export default CheckoutSkeleton;
