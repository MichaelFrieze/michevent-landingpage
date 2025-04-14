"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Monitor, Menu, ShoppingCart, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

interface RentalHeaderProps {
  cartItemCount: number;
}

export default function RentalHeader({ cartItemCount }: RentalHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-primary text-primary-foreground backdrop-blur supports-[backdrop-filter]:bg-primary/90">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center justify-center">
            <Monitor className="h-6 w-6 text-primary-foreground" />
            <span className="ml-2 text-xl font-bold tracking-tight">
              MEET Rentals
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary-foreground/80"
          >
            Equipment
          </Link>
          <Link
            href="/rental/packages"
            className="text-sm font-medium transition-colors hover:text-primary-foreground/80"
          >
            Packages
          </Link>
          <Link
            href="/rental/how-it-works"
            className="text-sm font-medium transition-colors hover:text-primary-foreground/80"
          >
            How It Works
          </Link>
          <Link
            href="/rental/faq"
            className="text-sm font-medium transition-colors hover:text-primary-foreground/80"
          >
            FAQ
          </Link>
          <Link
            href="/rental/support"
            className="text-sm font-medium transition-colors hover:text-primary-foreground/80"
          >
            Support
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/rental/cart">
            <Button variant="secondary" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                  {cartItemCount}
                </span>
              )}
            </Button>
          </Link>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-6 px-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Monitor className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold tracking-tight">
                      MEET Rentals
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className="flex py-2 text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Equipment
                  </Link>
                  <Link
                    href="/rental/packages"
                    className="flex py-2 text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Packages
                  </Link>
                  <Link
                    href="/rental/how-it-works"
                    className="flex py-2 text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/rental/faq"
                    className="flex py-2 text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                  <Link
                    href="/rental/support"
                    className="flex py-2 text-base font-medium transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Support
                  </Link>
                </nav>

                <div className="flex flex-col gap-2">
                  <Button asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/rental/cart">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Cart ({cartItemCount})
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
