"use client";

import React from 'react'
import { eventTypes } from '../lib/constants/eventTypes';
import { useRouter } from 'nextjs-toploader/app';

function FooterEventLinks() {
    const router = useRouter();
    const handleEventBookingLinks = (selectedEvent: string) => {
        console.log(selectedEvent)
        if(typeof window !== 'undefined'){
            localStorage.setItem("selectedEvent", selectedEvent);
            router.push("/event-booking");
        }
    }
    return (
        <div>
        <h4 className="text-white font-semibold mb-4">Event Types</h4>
        <ul className="space-y-2">
          {eventTypes.slice(0, 6).map((event) => (
            <li key={event.id}>
              <li
                className="text-sm hover:text-white transition-colors cursor-pointer"
                onClick={() => handleEventBookingLinks(event.label)}
              >
                {event.label}
              </li>
            </li>
          ))}
        </ul>
      </div>
    )
}

export default FooterEventLinks