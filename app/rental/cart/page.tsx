"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, Trash2, Info } from "lucide-react"
import RentalHeader from "@/components/rental-header"
import RentalFooter from "@/components/rental-footer"

// Sample equipment data (same as in rental/page.tsx)
const equipmentData = [
  {
    id: 1,
    name: "4K Ultra HD Projector",
    category: "projection",
    image: "/placeholder.svg?height=300&width=400",
    price: 250,
    priceUnit: "day",
    description:
      "Professional 4K projector with 10,000 lumens brightness, perfect for large venues and outdoor events.",
    features: ["4K Resolution", "10,000 Lumens", "HDMI/USB-C Inputs", "Includes Stand"],
    availability: true,
  },
  {
    id: 3,
    name: "Professional PA System",
    category: "audio",
    image: "/placeholder.svg?height=300&width=400",
    price: 350,
    priceUnit: "day",
    description: "Complete PA system with speakers, subwoofers, mixer, and microphones for events up to 500 people.",
    features: ["2000W System", "Digital Mixer", "Wireless Mics", "Bluetooth Connectivity"],
    availability: true,
  },
  {
    id: 7,
    name: "LED Stage Lighting Package",
    category: "lighting",
    image: "/placeholder.svg?height=300&width=400",
    price: 200,
    priceUnit: "day",
    description: "Complete LED stage lighting package with controller for events and performances.",
    features: ["12 LED Par Cans", "DMX Controller", "Truss System", "Programmable Effects"],
    availability: true,
  },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState<{ id: number; quantity: number }[]>([
    { id: 1, quantity: 1 },
    { id: 3, quantity: 1 },
    { id: 7, quantity: 1 },
  ])
  const [startDate, setStartDate] = useState<Date | undefined>(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)) // 1 week from now
  const [duration, setDuration] = useState(3) // 3 days

  // Remove item from cart
  const removeItem = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId))
  }

  // Update item quantity
  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(cartItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item)))
  }

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, cartItem) => {
      const item = equipmentData.find((e) => e.id === cartItem.id)
      return total + (item ? item.price * cartItem.quantity * duration : 0)
    }, 0)
  }

  // Calculate delivery fee (simplified example)
  const deliveryFee = 75

  // Calculate tax (simplified example - 8%)
  const calculateTax = () => {
    return calculateSubtotal() * 0.08
  }

  // Calculate total
  const calculateTotal = () => {
    return calculateSubtotal() + deliveryFee + calculateTax()
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(2)}`
  }

  return (
    <div className="flex min-h-screen flex-col">
      <RentalHeader cartItemCount={cartItems.length} />

      <main className="flex-1">
        <div className="container py-10">
          <div className="flex items-center gap-2 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/rental" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>

          <h1 className="text-3xl font-bold tracking-tight mb-6">Your Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Looks like you haven't added any equipment to your cart yet.</p>
              <Button asChild>
                <Link href="/rental">Browse Equipment</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {cartItems.map((cartItem) => {
                        const item = equipmentData.find((e) => e.id === cartItem.id)
                        if (!item) return null

                        return (
                          <div key={item.id} className="flex gap-4">
                            <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex flex-1 flex-col">
                              <div className="flex justify-between">
                                <div>
                                  <h3 className="font-medium">
                                    <Link href={`/rental/equipment/${item.id}`} className="hover:underline">
                                      {item.name}
                                    </Link>
                                  </h3>
                                  <p className="text-sm text-muted-foreground">{item.category}</p>
                                </div>
                                <p className="font-medium">
                                  {formatCurrency(item.price * cartItem.quantity * duration)}
                                </p>
                              </div>
                              <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-muted-foreground">Qty:</span>
                                  <div className="flex">
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="h-7 w-7 rounded-r-none"
                                      onClick={() => updateQuantity(item.id, cartItem.quantity - 1)}
                                      disabled={cartItem.quantity <= 1}
                                    >
                                      -
                                    </Button>
                                    <div className="flex h-7 w-8 items-center justify-center border-y border-input bg-background text-sm">
                                      {cartItem.quantity}
                                    </div>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      className="h-7 w-7 rounded-l-none"
                                      onClick={() => updateQuantity(item.id, cartItem.quantity + 1)}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <span className="text-sm text-muted-foreground ml-2">
                                    ${item.price} per day × {duration} days
                                  </span>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeItem(item.id)}
                                  className="text-muted-foreground hover:text-destructive"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-8">
                      <h3 className="font-medium mb-4">Rental Period</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Start Date</p>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button variant="outline" className="w-full justify-start text-left font-normal">
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {startDate ? format(startDate, "PPP") : <span>Select date</span>}
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                              <Calendar
                                mode="single"
                                selected={startDate}
                                onSelect={setStartDate}
                                initialFocus
                                disabled={(date) => date < new Date()}
                              />
                            </PopoverContent>
                          </Popover>
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Duration (days)</p>
                          <div className="flex">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => setDuration(Math.max(1, duration - 1))}
                              disabled={duration <= 1}
                            >
                              -
                            </Button>
                            <div className="flex-1 flex items-center justify-center border-y border-input bg-background">
                              {duration}
                            </div>
                            <Button variant="outline" size="icon" onClick={() => setDuration(duration + 1)}>
                              +
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                        <Info className="h-4 w-4" />
                        <span>
                          Equipment will be delivered on {startDate ? format(startDate, "PPP") : "the selected date"}{" "}
                          and picked up {duration} days later.
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>{formatCurrency(calculateSubtotal())}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery Fee</span>
                        <span>{formatCurrency(deliveryFee)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax (8%)</span>
                        <span>{formatCurrency(calculateTax())}</span>
                      </div>

                      <Separator className="my-4" />

                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>{formatCurrency(calculateTotal())}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-6" size="lg" asChild>
                      <Link href="/rental/checkout">Proceed to Checkout</Link>
                    </Button>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-start gap-2 text-sm">
                        <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          Delivery and pickup are included in the delivery fee. Our team will handle all setup and
                          teardown.
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          A security deposit may be required at checkout depending on the equipment rented.
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="mt-4 text-center">
                  <Button variant="link" asChild>
                    <Link href="/rental">Continue Shopping</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <RentalFooter />
    </div>
  )
}

