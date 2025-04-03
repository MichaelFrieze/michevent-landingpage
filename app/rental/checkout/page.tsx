"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, CreditCard, Building, Truck, Calendar, Check } from "lucide-react"
import RentalHeader from "@/components/rental-header"
import RentalFooter from "@/components/rental-footer"

// Sample cart data
const cartItems = [
  { id: 1, name: "4K Ultra HD Projector", price: 250, quantity: 1 },
  { id: 3, name: "Professional PA System", price: 350, quantity: 1 },
  { id: 7, name: "LED Stage Lighting Package", price: 200, quantity: 1 },
]

export default function CheckoutPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  // Calculate order totals
  const duration = 3 // days
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity * duration, 0)
  const deliveryFee = 75
  const tax = subtotal * 0.08
  const total = subtotal + deliveryFee + tax

  // Format currency
  const formatCurrency = (amount: number) => {
    return `$${amount.toFixed(2)}`
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      router.push("/rental/confirmation")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <RentalHeader cartItemCount={3} />

      <main className="flex-1">
        <div className="container py-10">
          <div className="flex items-center gap-2 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/rental/cart" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                Back to Cart
              </Link>
            </Button>
          </div>

          <h1 className="text-3xl font-bold tracking-tight mb-6">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="space-y-8">
                  {/* Customer Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Customer Information</CardTitle>
                      <CardDescription>Enter your contact details for this rental</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" required />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Event Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Details</CardTitle>
                      <CardDescription>Tell us about your event so we can provide the best service</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="event-name">Event Name</Label>
                        <Input id="event-name" required />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="event-type">Event Type</Label>
                          <select
                            id="event-type"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="">Select event type</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="wedding">Wedding</option>
                            <option value="conference">Conference</option>
                            <option value="concert">Concert/Performance</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="attendees">Expected Attendees</Label>
                          <Input id="attendees" type="number" min="1" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="event-notes">Special Requirements or Notes</Label>
                        <Textarea id="event-notes" rows={3} />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Delivery Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Delivery Information</CardTitle>
                      <CardDescription>Where should we deliver and set up the equipment?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="venue-name">Venue Name</Label>
                        <Input id="venue-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Street Address</Label>
                        <Input id="address" required />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">State</Label>
                          <Input id="state" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="zip">ZIP Code</Label>
                          <Input id="zip" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="delivery-notes">Delivery Instructions</Label>
                        <Textarea
                          id="delivery-notes"
                          rows={2}
                          placeholder="E.g., Loading dock location, parking information, access codes"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Payment Information */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Payment Method</CardTitle>
                      <CardDescription>Select your preferred payment method</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="payment" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="payment">Payment</TabsTrigger>
                          <TabsTrigger value="invoice">Invoice (Business Only)</TabsTrigger>
                        </TabsList>
                        <TabsContent value="payment" className="space-y-4 pt-4">
                          <RadioGroup
                            defaultValue="credit-card"
                            value={paymentMethod}
                            onValueChange={setPaymentMethod}
                            className="space-y-3"
                          >
                            <div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="credit-card" id="credit-card" />
                                <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer">
                                  <CreditCard className="h-4 w-4" />
                                  Credit or Debit Card
                                </Label>
                              </div>

                              {paymentMethod === "credit-card" && (
                                <div className="mt-3 pl-6 space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="card-number">Card Number</Label>
                                    <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                      <Label htmlFor="expiry">Expiry Date</Label>
                                      <Input id="expiry" placeholder="MM/YY" required />
                                    </div>
                                    <div className="space-y-2">
                                      <Label htmlFor="cvc">CVC</Label>
                                      <Input id="cvc" placeholder="123" required />
                                    </div>
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="name-on-card">Name on Card</Label>
                                    <Input id="name-on-card" required />
                                  </div>
                                </div>
                              )}
                            </div>

                            <div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="invoice" id="invoice" />
                                <Label htmlFor="invoice" className="flex items-center gap-2 cursor-pointer">
                                  <Building className="h-4 w-4" />
                                  Pay by Invoice (Business Only)
                                </Label>
                              </div>

                              {paymentMethod === "invoice" && (
                                <div className="mt-3 pl-6 space-y-4">
                                  <div className="space-y-2">
                                    <Label htmlFor="company-name">Company Name</Label>
                                    <Input id="company-name" required />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="purchase-order">Purchase Order Number</Label>
                                    <Input id="purchase-order" required />
                                  </div>
                                  <div className="space-y-2">
                                    <Label htmlFor="billing-email">Billing Email</Label>
                                    <Input id="billing-email" type="email" required />
                                  </div>
                                </div>
                              )}
                            </div>
                          </RadioGroup>
                        </TabsContent>
                        <TabsContent value="invoice" className="space-y-4 pt-4">
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="business-name">Business Name</Label>
                              <Input id="business-name" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="business-address">Business Address</Label>
                              <Input id="business-address" required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="tax-id">Tax ID / EIN</Label>
                                <Input id="tax-id" required />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="business-phone">Business Phone</Label>
                                <Input id="business-phone" type="tel" required />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="billing-contact">Billing Contact Name</Label>
                              <Input id="billing-contact" required />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="billing-email-alt">Billing Email</Label>
                              <Input id="billing-email-alt" type="email" required />
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>

                  <div className="flex justify-end">
                    <Button type="submit" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        "Complete Order"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Rental Period */}
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Rental Period</p>
                      <p className="text-sm text-muted-foreground">May 15, 2025 - May 18, 2025 (3 days)</p>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-md">
                    <Truck className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Delivery & Setup</p>
                      <p className="text-sm text-muted-foreground">May 15, 2025 (Morning)</p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="space-y-3">
                    <h3 className="font-medium">Items ({cartItems.length})</h3>
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span>{formatCurrency(item.price * item.quantity * duration)}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery & Setup Fee</span>
                      <span>{formatCurrency(deliveryFee)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span>{formatCurrency(tax)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>{formatCurrency(total)}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-start space-y-2 pt-0">
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Includes professional delivery, setup, and pickup</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Technical support available throughout your event</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      Equipment is fully insured (damage waiver available at checkout)
                    </span>
                  </div>
                </CardFooter>
              </Card>

              <div className="mt-4 text-center">
                <Button variant="link" asChild>
                  <Link href="/rental/cart">Edit Cart</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <RentalFooter />
    </div>
  )
}

