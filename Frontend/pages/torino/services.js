import SEO from "@/components/common/SEO";
import Benfeits from "@/components/modules/TourServices/Benfeits";
import CallToAction from "@/components/modules/TourServices/CallToAction";
import ChooseUs from "@/components/modules/TourServices/ChooseUs";
import ServiceBanner from "@/components/modules/TourServices/ServiceBanner";
import Standard from "@/components/modules/TourServices/Standard";
import React from "react";

function Services() {
  return (
    <>
      <SEO
        title="خدمات گردشگری"
        description="تورینو با ارائه بهترین خدمات گردشگری، رزرو هتل، بلیط و تورهای خارجی در خدمت شماست."
        keywords="خدمات گردشگری, رزرو تور, تورینو, تور خارجی, سفر"
      />
      <Standard />
      <ServiceBanner />
      <Benfeits />
      <ChooseUs />
      <CallToAction />
    </>
  );
}

export default Services;
