import Image from "next/image";
import { SearchForm } from "./SearchForm";
import PopularSearches from "./popularSearch";


export function Hero() {
  return (
    <div className="relative h-[500px] sm:h-[650px]">
      {/* Background Images */}
      <div className="absolute inset-0">
        <Image
          src="/images/landing/venus-tent-hero.jpg"
          alt="Indian Wedding Ceremony"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center mb-4">
            Your Event, Our Expertise
        </h1>
        <p className="text-lg sm:text-xl text-white text-center mb-8 max-w-2xl">
            Complete event solutions - from tents and decor to catering and entertainment with more than 18 years of experience
        </p>
        
        <SearchForm />
        <PopularSearches />
      </div>
    </div>
  );
}