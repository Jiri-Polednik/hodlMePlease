import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-gray-dark text-white py-8 lg:p-4">
      <div className="flex flex-col gap-8 lg:flex-row lg:justify-around items-center">
        <div className="flex flex-col">
          <Image src={"/Icon.svg"} alt={"logo"} width={150} height={30} />
          <p className="text-sm mt-2">{t("tagline")}</p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://telegram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <Image
              src={"/images/telegram.svg"}
              alt={"Facebook"}
              width={25}
              height={25}
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1"
          >
            <Image src={"/images/x.svg"} alt={"X"} width={25} height={25} />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:justify-around items-center py-8">
        <div className="flex flex-col">
          <p className="text-xs">{t("poweredBy")}</p>
        </div>

        <div className="text-xs">
          <p>{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
