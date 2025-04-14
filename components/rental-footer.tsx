import Link from "next/link";
import { Monitor, Phone, Mail, MapPin } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle";

export default function RentalFooter() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Monitor className="h-6 w-6 text-primary-foreground" />
              <span className="text-xl font-bold tracking-tight">
                MEET Rentals
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Michigan Entertainment Event Technologies provides professional
              audio-visual equipment rentals for events of all sizes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-primary-foreground/80" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-primary-foreground/80" />
                <span>info@michiganeet.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4 text-primary-foreground/80" />
                <span>123 Tech Avenue, Grand Rapids, MI 49503</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Equipment</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/rental?category=projection"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Projection Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/rental?category=audio"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Audio Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/rental?category=video"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Video Recording
                </Link>
              </li>
              <li>
                <Link
                  href="/rental?category=lighting"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Lighting Solutions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Rental Info</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/rental/how-it-works"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/rental/packages"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Rental Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/rental/faq"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/rental/support"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/rental/agreement"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Rental Agreement
                </Link>
              </li>
              <li>
                <Link
                  href="/rental/insurance"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
                >
                  Insurance & Liability
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Michigan Entertainment Event
            Technologies. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground"
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
            <Link
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
