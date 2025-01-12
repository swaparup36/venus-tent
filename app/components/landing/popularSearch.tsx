"use client";

import { useRouter } from 'nextjs-toploader/app';

const searches = [
  "Wedding",
  "Corporate Event",
  "Birthday Party",
  "Reception"
];

function PopularSearches() {
  const router = useRouter();
    return (
      <div className="text-white text-sm mt-6">
        <span className="opacity-80">Popular Searches:</span>{" "}
        {searches.map((search, index) => (
          <span key={index}>
            <span
              onClick={()=>{
                if(typeof window !== 'undefined'){
                  localStorage.setItem("selectedEvent", search);
                  router.push("/event-booking");
                }
              }}
              className="hover:underline"
            >
              {search}
            </span>
            {index < searches.length - 1 && (
              <span className="mx-2 opacity-60">|</span>
            )}
          </span>
        ))}
      </div>
    );
}

export default PopularSearches;