"use client";


import Image from "next/image";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { ReviewInterFace } from "@/app/lib/interfaces/interface";
import axios from "axios";
import Link from "next/link";

interface ReviewCardProps {
  name: string;
  image: string;
  content: string;
  rating: number;
  timeDescription: string;
}

function ReviewCard({ name, image, content, rating, timeDescription }: ReviewCardProps) {
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
            <p className="text-sm text-gray-600">{timeDescription}</p>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="flex gap-1 mb-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>

        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const [reviews, setReviews] = useState<ReviewInterFace[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getReviewsFromGoogleMap = async() => {
    setIsLoading(true);

    try {
      const reviewResponse = await axios.get("/api/fetch-reviews");

      if(!reviewResponse.data.success){
        setIsLoading(false);
        console.log("unable to get reviews: ", reviewResponse.data.message);
      }

      setReviews(reviewResponse.data.reviews);
      setIsLoading(false);
    } catch (error) {
      console.log("unable to get reviews: ", error);
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    getReviewsFromGoogleMap();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our happy customers have to say about their experience with Venus Tent.
          </p>
        </div>

        
          {
            reviews ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                  reviews.map((review, index) => (
                    <ReviewCard
                      key={index}
                      name={review.author_name}
                      image={review.profile_photo_url}
                      content={review.text}
                      rating={review.rating}
                      timeDescription={review.relative_time_description}
                    />
                  ))
                }
              </div>
            ) : (
              isLoading ? (
                <div className="flex w-full justify-center items-center h-[20svh]">
                  <p className="text-gray-500 text-lg">Loading...</p>
                </div>
              ) : (
                <div className="flex w-full justify-center items-center h-[20svh]">
                  <p className="text-gray-500 text-lg">no reviews found</p>
                </div>
              )
            )
          }

        <div className="text-center mt-12">
          <Link
            href="https://www.google.com/maps/place/VENUS+TENT+LIGHT+AND+SOUND/@23.6712386,85.3473032,21z/data=!4m18!1m9!3m8!1s0x6ec6e309d5b400cd:0xdc1cd8c35b292a1f!2sVENUS+TENT+LIGHT+AND+SOUND!8m2!3d23.670626!4d85.347861!9m1!1b1!16s%2Fg%2F11wxpfw20c!3m7!1s0x6ec6e309d5b400cd:0xdc1cd8c35b292a1f!8m2!3d23.670626!4d85.347861!9m1!1b1!16s%2Fg%2F11wxpfw20c?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors"
          >
            View All Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}