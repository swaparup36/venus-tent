import { ReviewInterFace } from "@/app/lib/interfaces/interface";
import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const reviewsResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${process.env.PLACE_ID}&fields=reviews&key=${process.env.GOOGLE_PLACE_API_KEY}&reviews_sort=most%20relevent`);

        if(reviewsResponse.status !== 200) {
            return NextResponse.json({
                success: false,
                message: "unable to get reviews from google",
            });
        }

        const allReviews: ReviewInterFace[] = reviewsResponse.data.result.reviews;
        const reviews = allReviews.filter((review) => review.text !== "");

        return NextResponse.json({
            success: true,
            reviews: reviews.slice(0, 4),
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            message: error,
        });
    }
}