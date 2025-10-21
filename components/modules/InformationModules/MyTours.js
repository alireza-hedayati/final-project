import api from "@/config/api";
import { useQuery } from "@tanstack/react-query";
import TourCard from "./TourCard";
import ProfileSkeleton from "../Skeletons/ProfileSkeleton";

function MyTours() {
  const { data: tours, isLoading } = useQuery({
    queryKey: ["userTours"],
    queryFn: async () => {
      const res = await api.get("/user/tours");
      return res.data;
    },
  });
  if (isLoading) {
    return (
      <div className="mt-10 lg:w-14/15 lg:p-0 lg:m-0 ">
        <ProfileSkeleton />
      </div>
    );
  }
  
  return (
    <>
      {tours?.length > 0 ? (
        <div className="lg:w-14/15 lg:border-[1px] lg:border-gray-200 lg:shadow-sm lg:rounded-lg lg:px-4">
          {(tours || []).map((tour) => (
            <TourCard {...tour} key={tour.id} />
          ))}
        </div>
      ) : (
        <p className="text-lg text-center font-semibold my-5 ">
          شما هیچ توری رزرو نکردید
        </p>
      )}
    </>
  );
}

export default MyTours;
