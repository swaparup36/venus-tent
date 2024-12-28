import { Hero } from "./components/landing/hero";
import { ReviewsSection } from "./components/landing/Reviews";
import { ServicesSection } from "./components/landing/services";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ServicesSection />
        <ReviewsSection />
      </main>
    </>
  );
}
