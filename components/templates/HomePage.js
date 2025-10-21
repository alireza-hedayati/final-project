import { useMemo, useState } from "react";
import Banner from "../modules/Banner";
import SearchSec from "../modules/SearchSec";
import Tours from "../modules/Tours";
import PhoneBanner from "../modules/PhoneBanner";
import WhyUs from "../modules/WhyUs";
import Features from "../modules/Features";
import api from "@/config/api";
import { useRouter } from "next/router";

function extractUniqueCities(data, key) {
  
  const citiesMap = new Map();
  data.forEach((tour) => {
    const city = tour[key];
    if (!citiesMap.has(city.id)) {
      citiesMap.set(city.id, city);
    }
  });
  return Array.from(citiesMap.values());
}

function HomePage({ initialData }) {
  const [tours, setTours] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const origins = useMemo(() => extractUniqueCities(initialData, "origin"));
  const destinations = useMemo(() =>
    extractUniqueCities(initialData, "destination")
  );

  const handleSearch = async ({ originId, destinationId, startDate }) => {
    router.push(
      {
        pathname: "/torino",
        query: { originId, destinationId, startDate },
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
      const queryString = params.toString();
      const res = await api.get(`/tour${queryString ? `?${queryString}` : ""}`);
      setTours(res.data);
    } catch (err) {
      console.error("Client-side search failed:", err);
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
