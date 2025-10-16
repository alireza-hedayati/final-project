import ContentLoader from "react-content-loader";

const TourCardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={270}
    viewBox="0 0 280 270"
    backgroundColor="#e0e0e0"
    foregroundColor="#f5f5f5"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="280" height="200" />
    <rect x="10" y="210" rx="4" ry="4" width="200" height="15" />
    <rect x="10" y="240" rx="4" ry="4" width="100" height="15" />
    <rect x="200" y="235" rx="5" ry="5" width="60" height="25" />
  </ContentLoader>
);

export default TourCardSkeleton;
