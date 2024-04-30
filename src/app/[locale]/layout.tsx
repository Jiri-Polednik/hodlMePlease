import { locales } from "@/i18n";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider, useMessages } from "next-intl";
import pick from "lodash/pick";
import Header from "@components/layout/header";
import { Metadata } from "next";
import Footer from "@components/layout/footer";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");

  return {
    applicationName: t("common.applicationName"),
    keywords: t("common.keywords"),
    authors: [{ name: t("common.authors") }],
    publisher: t("common.publisher"),
    robots: "index, follow",
    icons: "/Icon.svg",
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function Layout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const messages = useMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={pick(messages, "Header")}>
          <Header />
        </NextIntlClientProvider>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
