// import HomeHero from "@/components/home/HomeHero";
import AgeGroupPrograms from "@/components/home/AgeGroupPrograms";
import EventsSection from "@/components/home/EventsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FloatingInfoCards from "@/components/home/FloatingInfoCards";
import HomeHero from "@/components/home/HomeHero";
import NewsSection from "@/components/home/NewsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import PreLoader from "@/components/PreLoader";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <PreLoader />
      <HomeHero />

      <FloatingInfoCards />
      <AgeGroupPrograms />

      <WelcomeSection />
      <FeaturesSection />
      <NewsSection />
      <EventsSection />
      <TestimonialsSection />
    </div>
  );
}
