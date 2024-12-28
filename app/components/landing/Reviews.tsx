import { reviews } from "@/app/lib/constants/reviews";
import Image from "next/image";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  event: string;
  image: string;
  content: string;
  rating: number;
  location: string;
}

function ReviewCard({ name, event, image, content, rating, location }: ReviewCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-12 h-12">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-gray-600">{location}</p>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="flex gap-1 mb-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-gray-600">{event}</p>
        </div>

        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our happy customers have to say about their experience with Venus Tent.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              name={review.name}
              event={review.event}
              image={review.image}
              content={review.content}
              rating={review.rating}
              location={review.location}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/reviews" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors"
          >
            View All Reviews
          </a>
        </div>
      </div>
    </section>
  );
}