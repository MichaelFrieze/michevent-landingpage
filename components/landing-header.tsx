"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";

export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Monitor className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">MEET</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#services"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            How It Works
          </Link>
          <Link
            href="#equipment"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Equipment
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild>
            <Link href="/">Rent Equipment</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
