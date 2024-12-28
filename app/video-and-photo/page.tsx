"use client";

import React, { useState } from 'react';
import { Calendar, Clock, Mail, Phone, User, Building, Check } from 'lucide-react';
import Image from 'next/image';
import { AVAILABLE_SERVICES } from '../lib/constants/availableServices';
import { AppointmentFormData } from '../lib/interfaces/interface';
import { eventTypes } from '../lib/constants/eventTypes';

function Sounds() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    eventType: '',
    services: ['photography and videography'],
  });

  const onServiceChange = (serviceId: string) => {
    if (formData.services.includes(serviceId)) {
      setFormData({
        ...formData,
        services: formData.services.filter((id) => id !== serviceId),
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, serviceId],
      });
    } 
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="w-[90%] mx-auto p-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 w-full">
            <div className='flex justify-center items-start h-full'>
                {/* Header Image */}
                <div className='flex flex-col justify-start items-start w-[65%] rounded-xl'>
                    <div className="h-64 w-full relative rounded-xl">
                        <Image
                            src="/images/forms/photo-and-video-hero.jpg"
                            alt="Luxury Event Space"
                            className="w-full h-full object-cover rounded-xl"
                            width={800}
                            height={400}
                        />
                            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                            <h1 className="text-3xl font-bold">Book Videography and Photography Services for Your Event</h1>
                            <p className="text-sm mt-2">Fill out the form on the right side to schedule your special occasion</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-start mt-4'>
                        <h2 className='font-bold mb-4 text-xl'>Venus - Videography and Photography Services</h2>
                        <p className='text-gray-500 mb-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dignissimos doloremque error itaque doloribus? Accusantium ad molestias ipsum, vitae ullam quam neque, accusamus incidunt porro mollitia sint, obcaecati tempora cumque debitis aut perspiciatis eum.</p>
                        <p className='text-gray-500 mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos aperiam quos accusamus id labore pariatur, laudantium laboriosam a cum. Laudantium voluptatibus non laborum pariatur labore consequatur, a repellat qui quaerat porro! Maxime illo aliquam sequi nobis id sit quisquam eum? Labore esse optio nesciunt. Illum maxime amet aliquam quibusdam ab.</p>
                        <p className='text-gray-500 mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos aperiam quos accusamus id labore pariatur, laudantium laboriosam a cum. Laudantium voluptatibus non laborum pariatur labore consequatur, a repellat qui quaerat porro! Maxime illo aliquam sequi nobis id sit quisquam eum? Labore esse optio nesciunt. Illum maxime amet aliquam quibusdam ab.</p>
                    </div>
                </div>

                {/* Booking Form */}
                <form onSubmit={handleSubmit} className="p-4 border-2 border-gray-300 ml-4 mr-2 h-full rounded-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                    {/* Name */}
                    <div className="relative">
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
                        <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            required
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
                        <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="email"
                            required
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number</label>
                        <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="tel"
                            required
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                        </div>
                    </div>

                    {/* Event Type */}
                    <div className="relative">
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Event Type</label>
                        <div className="relative">
                        <Building className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <select
                            required
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none"
                            value={formData.eventType}
                            onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                        >
                            <option value="">Select event type</option>
                            {eventTypes.map((event) => (
                                <option key={event.id} value={event.id}>
                                    {event.label}
                                </option>
                            ))}
                        </select>
                        </div>
                    </div>

                    {/* Date */}
                    <div className="relative">
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Event Date</label>
                        <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="date"
                            required
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            value={formData.date}
                            onChange={(e) => setFormData({...formData, date: e.target.value})}
                        />
                        </div>
                    </div>

                    {/* Time */}
                    <div className="relative">
                        <label className="text-sm font-medium text-gray-700 mb-1 block">Event Time</label>
                        <div className="relative">
                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="time"
                            required
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            value={formData.time}
                            onChange={(e) => setFormData({...formData, time: e.target.value})}
                        />
                        </div>
                    </div>
                    </div>

                    {/* Additional Services */}
                    <div className="col-span-2 mt-10">
                        <h3 className="text-lg font-medium text-gray-900 mb-3">Additional Services</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {AVAILABLE_SERVICES.map((service) => (
                            <div key={service.id} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={service.id}
                                    checked={formData.services.includes(service.id)}
                                    onChange={() => onServiceChange(service.id)}
                                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                                />
                                <label htmlFor={service.id} className="ml-2 text-sm text-gray-700">
                                {service.label}
                                </label>
                            </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                        <Check className="h-5 w-5" />
                        Book Appointment
                    </button>
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-4">
                    By booking, you agree to our terms and conditions
                    </p>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Sounds;