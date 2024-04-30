"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <div className="fixed top-0 z-[1000] flex flex-col gap-0 w-full bg-green-dark shadow-lg px-16">
        <div className="flex w-full bg-transparent justify-around text-gray-light">
          <div className="flex items-center mr-auto py-2 lg:px-3 lg:py-7">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Your Logo"
                width={84}
                height={84}
                priority
              />
            </Link>
          </div>
          <div className="flex justify-between">
            <nav className="hidden lg:flex gap-16 2xl:gap-10 sm:w-full sm:h-full text-6xl items-center">
              <div className={"justify-center w-full flex"}>
                <Image
                  src={"/images/telegram.svg"}
                  alt={"Telegram Logo"}
                  height={40}
                  width={40}
                />
              </div>

              <div className={"justify-center w-full flex"}>
                <Image
                  src={"/images/x.svg"}
                  alt={"X Logo"}
                  height={40}
                  width={40}
                />
              </div>
            </nav>
            <div className="lg:hidden flex items-center justify-end my-auto">
              <button
                onClick={toggleMobileMenu}
                className="z-[501] ml-auto pr-2"
              >
                <Image
                  src={`${isMobileMenuOpen ? "/images/xmark.svg" : "/images/bars.svg"}`}
                  alt="Menu Toggle"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 transition-transform duration-200 ease-in-out z-[500] w-full max-w-[1500px] h-[250px] lg:hidden text-gray-light ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="bg-green-dark h-full overflow-y-auto flex flex-col items-center justify-center text-gray-light mt-12 gap-4">
          <div className={"justify-end w-full flex px-16"}>
            <p className={"my-auto px-4"}>{t("telegram")}</p>
            <Image
              src={"/images/telegram.svg"}
              alt={"Telegram Logo"}
              height={40}
              width={40}
            />
          </div>

          <div className={"justify-end w-full flex px-16"}>
            <p className={"my-auto px-4"}>{t("x")}</p>
            <Image
              src={"/images/x.svg"}
              alt={"X Logo"}
              height={40}
              width={40}
            />
          </div>
        </nav>
      </div>
      {/* Spacer for the header to prevent content from being hidden behind it */}
      <div className="h-[60px] lg:h-[100px]" />
    </>
  );
}
