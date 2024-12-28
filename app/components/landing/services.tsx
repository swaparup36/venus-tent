import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { serviceCards } from "@/app/lib/constants/serviceCards";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
  bgColor: string;
}

function ServiceCard({ title, description, href, imageUrl, bgColor }: ServiceCardProps) {
  return (
    <Link href={href} className={`group block ${bgColor} rounded-lg overflow-hidden relative h-36`}>
      <div className="flex h-full">
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold flex items-center gap-2">
              {title}
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="mt-2 text-sm opacity-90">{description}</p>
          </div>
        </div>
        <div className="w-1/3 relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

export function ServicesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Our Services</h2>
        <Link href="/gallery" className="text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1">
          View Gallery
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {serviceCards.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            href={service.href}
            imageUrl={service.imageUrl}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </section>
  );
}