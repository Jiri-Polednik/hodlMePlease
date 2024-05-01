import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import "@styles/globals.scss";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import TextContent from "@components/textContent";
import PageSection from "@components/pageSection";
import Card from "@components/ui/card";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    title: t("homepage.title"),
    description: t("homepage.description"),
  };
}

export default function Index({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div>
      <PageSection
        title={t("PageSection.title")}
        leftContent={
          <div>
            <img
              className={"lg:w-3/4 m-auto"}
              src={"/images/logo.png"}
              alt={"Image 1"}
            />
          </div>
        }
        rightContent={
          <div>
            <TextContent title={t("PageSection.one.title")}>
              <p className="text-gray-dark pt-5 text-opacity-75">
                {t("PageSection.one.paragraph.one")}
              </p>
              <p className="text-gray-dark text-opacity-75">
                {t("PageSection.one.paragraph.two")}
              </p>
              <p className="text-gray-dark text-opacity-75">
                {t("PageSection.one.paragraph.three")}
              </p>
              <p className="text-gray-dark text-opacity-75">
                {t("PageSection.one.paragraph.four")}
              </p>
              <p className="text-gray-dark pt-5 text-opacity-75">
                {t("PageSection.one.paragraph.five")}
              </p>
              <p className="text-gray-dark text-opacity-75">
                {t("PageSection.one.paragraph.six")}
              </p>
            </TextContent>
          </div>
        }
      />

      <PageSection
        content={
          <div className={"w-full flex-col flex items-center"}>
            <div className="w-5/6">
              <div className="lg:flex lg:flex-row flex-grow lg:justify-between lg:items-stretch h-full flex-col justify-center items-start gap-8 mb-4">
                <Card
                  title={t("CardSection.card.one.title")}
                  description={t("CardSection.card.one.description")}
                  icon={"/images/fire.svg"}
                />
                <Card
                  title={t("CardSection.card.two.title")}
                  description={t("CardSection.card.two.description")}
                  icon={"/images/supply.svg"}
                />
                <Card
                  title={t("CardSection.card.three.title")}
                  description={t("CardSection.card.three.description")}
                  icon={"/images/tax.svg"}
                />
              </div>
            </div>
          </div>
        }
        darkBackground={true}
      />

      <PageSection
        content={
          <div className="flex justify-center py-12">
            <p className="text-6xl">{t("PageSection.two.paragraph.one")}</p>
            <p className="text-6xl break-all">
              {t("PageSection.two.paragraph.two")}
            </p>
          </div>
        }
      />
    </div>
  );
}
