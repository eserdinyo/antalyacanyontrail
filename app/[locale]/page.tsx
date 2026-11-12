import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Countdown } from "@/components/Countdown";
import { About } from "@/components/About";
import { RaceCategories } from "@/components/RaceCategories";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";
import { LiveResultsModal } from "@/components/LiveResultsModal";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Countdown />
        <About />
        <RaceCategories />
        <Sponsors />
      </main>
      <Footer />
      <LiveResultsModal />
    </>
  );
}
