"use client";

import React, { useState } from 'react';
import { Calendar, Clock, Mail, Phone, User, Building, Check } from 'lucide-react';
import Image from 'next/image';
import { AVAILABLE_SERVICES } from '../lib/constants/availableServices';
import { AppointmentFormData } from '../lib/interfaces/interface';
import { eventTypes } from '../lib/constants/eventTypes';
import axios from 'axios';
import SuccessModal from '../components/SuccessModal';
import FailModal from '../components/FailModal';


function Events() {
    const [formData, setFormData] = useState<AppointmentFormData>({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        eventType: typeof window !== 'undefined' ? localStorage.getItem('selectedEvent') || '' : '',
        services: [],
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isSubmissionSuccessfull, setIsSubmissionSuccessfull] = useState<boolean>(false);
    const [isSubmissionFailed, setIsSubmissionFailed] = useState<boolean>(false);

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

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Call api to book appointment
            const response = await axios.post('/api/book-appoinment', {
                ...formData,
            });
    
            console.log("booking response: ", response.data);
    
            if(response.data.success) {
                console.log("appointment booked successfully");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    eventType: '',
                    services: [],
                });
                setIsSubmitting(false);
                setIsSubmissionSuccessfull(true);
                
                setTimeout(() => {
                    setIsSubmissionSuccessfull(false);
                }, 3000);
            }
            setIsSubmitting(false);
            setIsSubmissionFailed(true);
            setTimeout(() => {
                setIsSubmissionFailed(false);
            }, 3000);
        } catch (error) {
            console.error('Can not book appointment: ', error);
            setIsSubmitting(false);
        }
    };

  return (
    <>
        <SuccessModal isOpen={isSubmissionSuccessfull} onClose={() => setIsSubmissionSuccessfull(false)} />
        <FailModal isOpen={isSubmissionFailed} onClose={() => setIsSubmissionFailed(false)} />

        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="w-[95%] md:w-[90%] mx-auto p-4">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-6 w-full my-4">
                    <div className='flex md:flex-row flex-col justify-center items-start h-full'>
                        {/* Header Image */}
                        <div className='flex flex-col justify-start items-start w-full md:w-[70%] rounded-xl'>
                            <div className="h-64 w-full relative rounded-xl">
                                <Image
                                    src="/images/forms/all-services-hero.jpeg"
                                    alt="Luxury Event Space"
                                    className="w-full h-full object-cover rounded-xl"
                                    width={800}
                                    height={400}
                                />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>
                                    <div className="absolute bottom-6 left-6 text-white">
                                    <h1 className="text-3xl font-bold">Book All Kind of Services for Your Event</h1>
                                    <p className="text-sm mt-2">Fill out the form on the right side to schedule your special occasion</p>
                                </div>
                            </div>

                            <div className='flex flex-col justify-center items-start mt-4'>
                                <h2 className='font-bold mb-4 text-xl'>Venus - All Services</h2>
                                <p className='text-gray-500 mb-2'>At VENUS TENT LIGHT AND SOUND, we offer a wide range of event services to make your celebration truly extraordinary. From stylish tent setups and stunning lighting to high-quality sound systems, catering, floral decorations, live bands, and professional photography and videography, we handle every detail to ensure your event is seamless and unforgettable.</p>
                                <p className='text-gray-500 mb-2'>Serving Ranchi, Ramgarh, and surrounding areas, our expert team provides tailored solutions to match your event’s theme and requirements. Whether it’s an intimate gathering or a grand celebration, we’ve got you covered with exceptional service and attention to detail.</p>
                                <p className='text-gray-500 mb-2'>Book all your event services with us today and let VENUS TENT LIGHT AND SOUND make your special occasion a resounding success!</p>
                            </div>
                        </div>

                        {/* Booking Form */}
                        <form onSubmit={handleSubmit} className="p-4 border-2 border-gray-300 md:ml-4 md:mr-2 h-full rounded-xl">
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
                                    placeholder="Phone number"
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
                                className={`w-full text-white py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${isSubmitting ? 'bg-pink-500 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700'}`}
                                disabled={isSubmitting}
                            >
                                {
                                    isSubmitting ? (
                                        <>
                                            Booking...
                                        </>
                                    ) : (
                                        <>
                                            <Check className="h-5 w-5" />
                                            Book Appointment
                                        </>
                                    )
                                }
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
    </>
  );
}

export default Events;