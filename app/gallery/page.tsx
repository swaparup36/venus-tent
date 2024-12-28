"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Footer } from '../components/Footer';
import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface GalleryImages {
    Catering: string[];
    Flower: string[];
    Tent: string[];
    Wedding: string[];
    'Decoration Video': string[];
    'Wedding Snaps': string[];
}

const categories = [
  'Catering',
  'Flower',
  'Tent',
  'Wedding',
  'Decoration Video',
  'Wedding Snaps',
];

const images: GalleryImages = {
  Catering: ['/images/gallery/catering-gallery-1.jpg', '/images/gallery/catering-gallery-2.jpg'],
  Flower: ['/images/gallery/flower-gallery-1.jpg', '/images/gallery/flower-gallery-2.jpg', '/images/gallery/flower-gallery-3.jpg'],
  Tent: ['/images/gallery/tent-gallery-1.jpg', '/images/gallery/tent-gallery-2.jpg',],
  Wedding: ['/images/gallery/wedding-gallery-1.jpg', '/images/gallery/wedding-gallery-2.jpg'],
  'Decoration Video': ['/videos/gallery/decoration-video-1.mp4', '/videos/gallery/decoration-video-2.mp4', '/videos/gallery/decoration-video-3.mp4', '/videos/gallery/decoration-video-4.mp4'],
  'Wedding Snaps': ['/videos/gallery/wedding-snaps-gallery-1.mp4', '/videos/gallery/wedding-snaps-gallery-2.mp4'],
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Catering");

  return (
    <>
        <div className="p-6 font-sans">
        <header>
            <div className='text-sm text-gray-500 mb-4 flex items-center gap-1'>
                <Home size={15}/>
                <Link className='hover:text-pink-600' href={'/'}>{"Home"}</Link> 
                {" > "} 
                <Link className='hover:text-pink-600' href={'/gallery'}>{"Gallery"}</Link>
            </div>
            <h1 className="text-2xl font-semibold text-left mb-1">Gallery</h1>
            <p className='text-sm mb-8 text-gray-500 max-w-[60%]'>Explore a curated collection of images from various categories to inspire your special day.</p>
            <nav className="flex flex-wrap justify-start items-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                    key={category}
                    className={`px-4 py-1 border rounded-2xl text-sm font-medium transition-colors ${
                        selectedCategory === category
                        ? 'bg-pink-500 text-white border-pink-500'
                        : 'bg-gray-50 text-gray-700 border-gray-300 hover:bg-pink-100'
                    }`}
                    onClick={() => {
                        console.log(category);
                        setSelectedCategory(category);
                    }}
                    >
                        {category}
                    </button>
                ))}
            </nav>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 min-h-[80svh]">
            {images[selectedCategory]?.map((image, index) => {
                return (selectedCategory === 'Decoration Video' || selectedCategory === 'Wedding Snaps') ? (
                    <video key={index} controls className="w-full h-auto object-cover" width={400} height={300}>
                        <source src={image} type="video/mp4" />
                    </video>
                ) : (
                    <div key={index} className="flex justify-center items-center overflow-hidden rounded-lg shadow-lg">
                        <Image
                            src={image}
                            alt={`${selectedCategory} ${index + 1}`}
                            className="w-full h-auto object-cover"
                            width={400}
                            height={300}
                        />
                    </div>
                )
        })}
        </section>
        </div>
        <Footer />
    </>
  );
}
