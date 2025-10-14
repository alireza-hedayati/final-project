import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import TourCard from "./TourCard";

function MyTours() {
  const { data: tours, isLoading } = useQuery({
    queryKey: ["userTours"],
    queryFn: async () => {
      const res = await api.get("/user/tours");
      return res.data;
    },
  });
  if (isLoading) {
    return <p className="text-center mt-5">در حال بارگزاری اطلاعات ...</p>;
  }
  console.log("hello", tours);
  return (
    <div className="lg:w-14/15 lg:border-[1px] lg:border-gray-200 lg:shadow-sm lg:rounded-lg lg:px-4">
      {(tours || []).map((tour) => (
        <TourCard {...tour} key={tour.id} />
      ))}
    </div>
  );
}

export default MyTours;
