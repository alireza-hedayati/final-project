import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { toPersianDigits } from "@/utils/changeNum";
import MobileMenu from "../modules/MobileMenu";
import LoginModal from "../modules/LoginModal";
import { useUser } from "@/context/UserContext";
import ProfileDropDown from "./ProfileDropDown";
import LoginButtons from "./LoginButtons";
import LoginButtonSkeleton from "./LoginButtonSkeleton";
import { useRouter } from "next/router";

function Layout({ children }) {
  const links = [
    {
      id: 1,
      href: "/torino",
      label: "صفحه اصلی",
    },
    {
      id: 2,
      href: "/torino/services",
      label: "خدمات گردشگری",
    },
    { id: 3, href: "/torino/about-us", label: "درباره ما" },
    { id: 4, href: "/torino/contact-us", label: "تماس با ما" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "7485-021";
  const { state } = useUser();
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-2 shadow-lg border-b border-gray-100 lg:px-8 xl:px-4">
        <div className="flex gap-5 lg:hidden xl:hidden">
          <MobileMenu />
        </div>

        <nav className="hidden lg:flex lg: xl:flex items-center justify-between gap-20">
          <div>
            <Link aria-label="لوگو" href="/torino">
              <div className="relative w-[146px] h-[44px] border-0">
                <Image src="/images/logo.webp" alt="logo" fill />
              </div>
            </Link>
          </div>

          <ul className="flex items-center justify-between gap-5">
            {links.map(({ id,href, label }) => {
              const isActive = router.pathname === href;
              return (
                <li key={id}
                  className={`${isActive ? "text-green-500" : "text-gray-700"}`}
                >
                  <Link aria-label="لینک-صفحات" key={href} href={href}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {state.isLoading ? (
          <LoginButtonSkeleton />
        ) : state.isAuthenticated ? (
          <ProfileDropDown />
        ) : (
          <LoginButtons setIsOpen={setIsOpen} />
        )}

        {isOpen && <LoginModal setIsOpen={setIsOpen} />}
      </header>
      <main className="flex-grow">{children}</main>

      <footer>
        <div
          className={
            " w-full border-t border-dashed border-gray-300 my-4 xl:border-solid"
          }
        ></div>
        <div className=" w-full flex flex-wrap items-center justify-between gap-5 py-4 px-8  ">
          <div>
            <p className="footer-titles">تورینو</p>
            <ul>
              <li className="footer-items">
                <Link aria-label="صفحه-درباره-ما" href="/torino/about-us">
                  درباره ما
                </Link>
              </li>
              <li aria-label="صفحه-تماس-با-ما" className="footer-items">
                <Link href="/torino/contact-us">تماس با ما</Link>
              </li>
              <li className="footer-items">
                <Link aria-label="معرفی-تورینو" href="/torino/services">
                  چرا تورینو
                </Link>
              </li>
              <li className="footer-items">بیمه مسافرتی</li>
            </ul>
          </div>
          <div>
            <p className="footer-titles">خدمات مشتریان</p>
            <ul>
              <li className="footer-items">پشتیبانی آنلاین</li>
              <li className="footer-items">راهنمای خرید</li>
              <li className="footer-items">راهنمای استرداد</li>
              <li className="footer-items">پرسش و پاسخ</li>
            </ul>
          </div>

          <div className="w-full flex items-center justify-center flex-col md:w-auto xl:w-auto">
            <div className=" xl:self-end">
              <div className="relative w-[100px] h-[30px] xl:w-[146px] xl:h-[44px]">
                <Image
                  src="/images/logo.webp"
                  alt="logo"
                  width={80}
                  height={50}
                />
              </div>
              <p dir="rtl" className="text-right">
                تلفن پشتیبانی:{toPersianDigits(phoneNumber)}
              </p>
            </div>
            <div className=" flex items-center justify-between gap-5 mt-7">
              <div className="relative w-[34px] h-[38px] xl:w-[67px] xl:h-[74px]">
                <Image src="/images/airplane.webp" alt="airplane" fill />
              </div>

              <div className="relative w-[34px] h-[38px] xl:w-[67px] xl:h-[74px]">
                <Image
                  src="/images/passenger-rights.webp"
                  alt="passenger-rights"
                  fill
                />
              </div>

              <div className="relative w-[34px] h-[38px] xl:w-[67px] xl:h-[74px]">
                <Image src="/images/ecunion.webp" alt="ecunion" fill />
              </div>

              <div className="relative w-[34px] h-[38px] xl:w-[67px] xl:h-[74px]">
                <Image src="/images/samandehi.webp" alt="samandehi" fill />
              </div>

              <div className="relative w-[34px] h-[38px] xl:w-[67px] xl:h-[74px]">
                <Image src="/images/aira.webp" alt="aira" fill />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-300 border-solid"></div>
        <p className="text-sm text-center py-1">
          کلیه حقوق این وب سایت متعلق به تورینو میباشد.
        </p>
      </footer>
    </div>
  );
}

export default Layout;
