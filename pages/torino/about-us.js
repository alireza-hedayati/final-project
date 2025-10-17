import AboutTorino from "@/components/modules/AboutUs/AboutTorino";
import Refund from "@/components/modules/AboutUs/Refund";
import TorinoFeature from "@/components/modules/AboutUs/TorinoFeature";
import TorinoTeam from "@/components/modules/AboutUs/TorinoTeam";
import React from "react";

function aboutUs() {
  return (
    <>
      <AboutTorino />
      <TorinoTeam />
      <TorinoFeature/>
      <Refund/>
    </>
  );
}

export default aboutUs;
