import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";
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
      href: "/torino",
      label: "صفحه اصلی",
    },
    {
      href: "/torino/services",
      label: "خدمات گردشگری",
    },
    { href: "/torino/about-us", label: "درباره ما" },
    { href: "/torino/contact-us", label: "تماس با ما" },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "7485-021";
  const { state } = useUser();
  const router = useRouter();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="flex items-center justify-between px-6 py-2 shadow-lg border-b border-gray-100 lg:px-8 xl:px-4">
        <div className="block lg:hidden xl:hidden">
          <MobileMenu />
        </div>

        <div className="hidden lg:flex lg: xl:flex items-center justify-between gap-20">
          <div className="">
            <Link href="/torino">
              <Image
                src="/images/logo.webp"
                alt="logo"
                width={80}
                height={80}
              />
            </Link>
          </div>
          <ul className="flex items-center justify-between gap-5">
            {links.map(({ href, label }) => {
              const isActive = router.pathname === href;
              return (
                <li
                  className={`${isActive ? "text-green-500" : "text-gray-700"}`}
                >
                  <Link key={href} href={href}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
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
                <Link href="/torino/about-us">درباره ما</Link>
              </li>
              <li className="footer-items">
                <Link href="/torino/contact-us">تماس با ما</Link>
              </li>
              <li className="footer-items">
                <Link href="/torino/services">چرا تورینو</Link>
              </li>
              <li className="footer-items">
                <Link href="#">بیمه مسافرتی</Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="footer-titles">خدمات مشتریان</p>
            <ul>
              <li className="footer-items">
                <Link href="#">پشتیبانی آنلاین</Link>
              </li>
              <li className="footer-items">
                <Link href="#">راهنمای خرید</Link>
              </li>
              <li className="footer-items">
                <Link href="#">راهنمای استرداد</Link>
              </li>
              <li className="footer-items">
                <Link href="#">پرسش و پاسخ</Link>
              </li>
            </ul>
          </div>

          <div className="w-full flex items-center justify-center flex-col md:w-auto xl:w-auto">
            <div className=" xl:self-end">
              <Image
                src="/images/logo.webp"
                alt="logo"
                width={80}
                height={50}
              />
              <p dir="rtl" className="text-right">
                تلفن پشتیبانی:{toPersianDigits(phoneNumber)}
              </p>
            </div>
            <div className=" flex items-center justify-between gap-5 mt-7">
              <Image
                src="/images/airplane.webp"
                alt="airplane"
                width={50}
                height={20}
              />
              <Image
                src="/images/passenger-rights.webp"
                alt="passenger-rights"
                width={50}
                height={20}
              />
              <Image
                src="/images/ecunion.webp"
                alt="ecunion"
                width={50}
                height={20}
              />
              <Image
                src="/images/samandehi.webp"
                alt="samandehi"
                width={50}
                height={20}
              />
              <Image
                src="/images/aira.webp"
                alt="aira"
                width={50}
                height={20}
              />
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
