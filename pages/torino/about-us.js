import SEO from "@/components/common/SEO";
import AboutTorino from "@/components/modules/AboutUs/AboutTorino";
import Refund from "@/components/modules/AboutUs/Refund";
import TorinoFeature from "@/components/modules/AboutUs/TorinoFeature";
import TorinoTeam from "@/components/modules/AboutUs/TorinoTeam";
import React from "react";

function aboutUs() {
  return (
    <>
      <SEO
        title="درباره ما"
        description="با تیم حرفه ای تورینو آشنا شوید و خدمات گردشگری ما را بشناسید"
        keywords="درباره تورینو، سفر، گردشگری"
      />

      <AboutTorino />
      <TorinoTeam />
      <TorinoFeature />
    </>
  );
}

export default aboutUs;
