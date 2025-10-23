import { useMemo, useState } from "react";
import Banner from "../modules/Banner";
import SearchSec from "../modules/SearchSec";
import Tours from "../modules/Tours";
import PhoneBanner from "../modules/PhoneBanner";
import WhyUs from "../modules/WhyUs";
import Features from "../modules/Features";
import api from "@/config/api";
import { useRouter } from "next/router";
import extractUniqueCities from "@/utils/extractCities";

function HomePage({ initialData }) {
  const [tours, setTours] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  
  const origins = useMemo(() => extractUniqueCities(initialData, "origin"));
  const destinations = useMemo(() =>
    extractUniqueCities(initialData, "destination")
  );

  const handleSearch = async ({
    originId,
    destinationId,
    startDate,
    endDate,
  }) => {
    router.push(
      {
        pathname: "/torino",
        query: { originId, destinationId, startDate, endDate },
      },
      undefined,
      { shallow: true }
    );

    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (originId) params.append("originId", originId);
      if (destinationId) params.append("destinationId", destinationId);
      if (startDate) params.append("startDate", startDate);
      if (endDate) params.append("endDate", endDate);
      const queryString = params.toString();
      const res = await api.get(`/tour${queryString ? `?${queryString}` : ""}`);
      setTours(res.data);
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Banner />
      <SearchSec
        onSearch={handleSearch}
        origins={origins}
        destinations={destinations}
      />
      <Tours data={tours} loading={loading} />
      <PhoneBanner />
      <WhyUs />
      <Features />
    </>
  );
}

export default HomePage;
