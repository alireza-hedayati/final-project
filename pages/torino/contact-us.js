import SEO from "@/components/common/SEO";
import Brand from "@/components/modules/ContactUs/Brand";
import ContactInfoCard from "@/components/modules/ContactUs/ContactInfoCard";
import ContactUsBanner from "@/components/modules/ContactUs/ContactUsBanner";
import Header from "@/components/modules/ContactUs/Header";
import SocialMedia from "@/components/modules/ContactUs/SocialMedia";
import React from "react";

function ContactUs() {
  return (
    <>
      <SEO
        title="تماس با ما"
        description="از طریق فرم تماس یا شبکه‌های اجتماعی با تیم پشتیبانی تورینو در ارتباط باشید."
        keywords="تماس با تورینو, پشتیبانی تورینو, ارتباط با ما, گردشگری"
      />
      <ContactUsBanner />
      <Header />
      <ContactInfoCard />
      <SocialMedia />
      <Brand />
    </>
  );
}

export default ContactUs;
