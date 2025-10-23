import Image from "next/image";
function ContactUsBanner() {
  return (
    <div className="hidden lg:block lg:relative lg:mt-0 lg:h-[280px] xl:h-[250px]">
      <Image src="/images/contactus.webp" fill alt="contact-us" />
      <p className="absolute top-10 right-10 text-white font-bold text-2xl">با ما در تماس باشید.</p>
    </div>
  );
}

export default ContactUsBanner;
