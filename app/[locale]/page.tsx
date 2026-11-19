import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { RaceCategories } from "@/components/RaceCategories";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";
import { PhotosModal } from "@/components/PhotosModal";

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
        <About />
        <RaceCategories />
        <Sponsors />
      </main>
      <Footer />
      <PhotosModal />
    </>
  );
}
