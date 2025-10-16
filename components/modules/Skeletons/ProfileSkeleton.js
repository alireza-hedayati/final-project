import ContentLoader from "react-content-loader";

const ProfileSkeleton = () => (
  <div className="w-8/10 lg:w-full lg:max-w-2xl mx-auto border border-gray-200 rounded-lg shadow-sm mt-5 p-4">
    <ContentLoader
      speed={2}
      viewBox="0 0 700 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="w-full h-auto"
    >
      <rect x="5%" y="10" rx="8" ry="8" width="90%" height="45" />
      <rect x="5%" y="80" rx="8" ry="8" width="90%" height="45" />
    </ContentLoader>
  </div>
);

export default ProfileSkeleton;
