import Brand from "@/components/modules/ContactUs/Brand";
import ContactInfoCard from "@/components/modules/ContactUs/ContactInfoCard";
import ContactUsBanner from "@/components/modules/ContactUs/ContactUsBanner";
import Header from "@/components/modules/ContactUs/Header";
import SocialMedia from "@/components/modules/ContactUs/SocialMedia";
import React from "react";

function ContactUs() {
  return (
    <>
      <ContactUsBanner />
      <Header />
      <ContactInfoCard />
      <SocialMedia />
      <Brand />
    </>
  );
}

export default ContactUs;
