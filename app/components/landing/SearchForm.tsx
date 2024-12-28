"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { eventTypes } from "@/app/lib/constants/eventTypes";
import { useRouter } from "next/navigation";

export function SearchForm() {
  const router = useRouter();
  const [selectedEvent, setSelectedEvent] = useState("");

  const handleEventSearch = () => {
    if(typeof window !== 'undefined'){
      localStorage.setItem("selectedEvent", selectedEvent);
      router.push("/event-booking");
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 max-w-3xl mx-auto w-full">
      <div className="relative flex-1">
        <select
          value={selectedEvent}
          onChange={(e) => setSelectedEvent(e.target.value)}
          className="w-full p-4 bg-white rounded-lg appearance-none cursor-pointer pr-10"
        >
          <option value="">Select event type</option>
          {eventTypes.map((event) => (
            <option key={event.id} value={event.id}>
              {event.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
      </div>
      <button className="bg-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-700 transition-colors whitespace-nowrap" onClick={handleEventSearch}>
        Get Started
      </button>
    </div>
  );
}