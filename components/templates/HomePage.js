import React from "react";
import Banner from "../modules/Banner";
import SearchSec from "../modules/SearchSec";
import Tours from "../modules/Tours";
import PhoneBanner from "../modules/PhoneBanner";
import WhyUs from "../modules/WhyUs";
import Features from "../modules/Features";

function HomePage({initialData}) {
  return (
    <>
      <Banner />
      <SearchSec />
      <Tours initialData={initialData} />
      <PhoneBanner />
      <WhyUs />
      <Features/>
    </>
  );
}

export default HomePage;
