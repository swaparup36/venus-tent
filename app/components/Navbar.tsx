"use client";

import Link from "next/link";
import { Tent, Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/app/lib/utils";

const navItems = [
  { name: "Tent", href: "/tent" },
  { name: "Light", href: "/lights" },
  { name: "Sound", href: "/sounds" },
  { name: "Catering", href: "/catering" },
  { name: "Flower", href: "/flowers" },
  { name: "Band", href: "/band" },
  { name: "Photography and Videography", href: "/video-and-photo" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="bg-pink-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <p>Ranchi&apos;s Favourite Event Planning Organisation</p>
          <div className="hidden sm:flex items-center gap-4">
            <Link href="https://www.google.com/maps/place/VENUS+TENT+LIGHT+AND+SOUND/@23.6712386,85.3473032,21z/data=!4m18!1m9!3m8!1s0x6ec6e309d5b400cd:0xdc1cd8c35b292a1f!2sVENUS+TENT+LIGHT+AND+SOUND!8m2!3d23.670626!4d85.347861!9m1!1b1!16s%2Fg%2F11wxpfw20c!3m7!1s0x6ec6e309d5b400cd:0xdc1cd8c35b292a1f!8m2!3d23.670626!4d85.347861!9m1!1b1!16s%2Fg%2F11wxpfw20c?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="hover:underline">
              Write A Review
            </Link>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Tent className="h-8 w-8 text-pink-600" />
              <span className="font-bold text-xl">Venus</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right side items */}
            <div className="flex items-center gap-4">
              {/* <button
                className="p-2 hover:bg-gray-100 rounded-full"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button> */}
              {/* <Link
                href="/login"
                className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-pink-600"
              >
                <User className="h-5 w-5" />
                <span>Log In</span>
              </Link> */}
              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden",
            isMobileMenuOpen ? "block" : "hidden"
          )}
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-pink-600 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}