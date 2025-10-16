import Benfeits from "@/components/modules/TourServices/Benfeits";
import CallToAction from "@/components/modules/TourServices/CallToAction";
import ChooseUs from "@/components/modules/TourServices/ChooseUs";
import ServiceBanner from "@/components/modules/TourServices/ServiceBanner";
import Standard from "@/components/modules/TourServices/Standard";
import React from "react";

function Services() {
  return (
    <>
      <Standard />
      <ServiceBanner />
      <Benfeits />
      <ChooseUs />
      <CallToAction/>
    </>
  );
}

export default Services;
