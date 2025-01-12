import Link from "next/link";
import { serviceCards } from "@/app/lib/constants/serviceCards";
import { Facebook, Instagram, Youtube } from "lucide-react";
import FooterEventLinks from "./FooterEventLinks";

export function FooterSocial() {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">Follow Us</h4>
      <div className="flex space-x-4">
        <Link
          href="https://www.instagram.com/venus.tent.light"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="h-5 w-5" />
        </Link>
        <a
          href="https://www.instagram.com/venus.tent.light"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="Follow us on Facebook"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="https://youtube.com/@venustentlightandsound?si=Pup0_IL7wbtjShxV"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="Subscribe to our YouTube channel"
        >
          <Youtube className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export function FooterLinks() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <h4 className="text-white font-semibold mb-4">Services</h4>
        <ul className="space-y-2">
          {serviceCards.slice(0, 6).map((service) => (
            <li key={service.id}>
              <Link 
                href={service.href}
                className="text-sm hover:text-white transition-colors"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <FooterEventLinks />
    </div>
  );
}

export function FooterContact() {
    return (
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-4">Contact Us</h4>
        <div className="space-y-2 text-sm">
          <p>Email: venuslightandsound123@gmail.com</p>
          <p>Phone: +91 99341 60446</p>
          <p>Phone: +91 95765 17901</p>
          <p className="text-sm">
            Central saunda  <br />
            near football ground <br />
            Ramgarh, Jharkhand
          </p>
        </div>
      </div>
    );
}


export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Description */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Venus</h3>
            <p className="text-sm">
              Your premier destination for complete event solutions. We provide premium tents, 
              lighting, sound systems, catering, and entertainment services to make your events 
              truly memorable.
            </p>
          </div>

          {/* Quick Links */}
          <FooterLinks />

          {/* Contact & Social */}
          <div>
            <FooterContact />
            <FooterSocial />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} Swaparup Mukherjee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}