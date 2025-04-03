"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Calendar, Truck, Download, ArrowRight } from "lucide-react"
import RentalHeader from "@/components/rental-header"
import RentalFooter from "@/components/rental-footer"

export default function ConfirmationPage() {
  // Order details
  const orderNumber = "MEET-" + Math.floor(100000 + Math.random() * 900000)
  const orderDate = new Date().toLocaleDateString()
  const total = "$2,565.00"

  return (
    <div className="flex min-h-screen flex-col">
      <RentalHeader cartItemCount={0} />

      <main className="flex-1">
        <div className="container py-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-4">
                <CheckCircle className="h-10 w-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">Order Confirmed!</h1>
              <p className="text-muted-foreground mt-2">
                Thank you for your order. We've received your rental request and will be in touch shortly.
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
                <CardDescription>
                  Order #{orderNumber} • Placed on {orderDate}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Rental Period</p>
                    <p className="text-sm text-muted-foreground">May 15, 2025 - May 18, 2025 (3 days)</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-muted rounded-md">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Delivery & Setup</p>
                    <p className="text-sm text-muted-foreground">
                      May 15, 2025 (Morning) • 123 Event Center, Grand Rapids, MI
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="font-medium">Equipment</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>4K Ultra HD Projector × 1</span>
                      <span>$750.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Professional PA System × 1</span>
                      <span>$1,050.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>LED Stage Lighting Package × 1</span>
                      <span>$600.00</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$2,400.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery & Setup Fee</span>
                    <span>$75.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span>$192.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{total}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="#" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Receipt
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>What's Next?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="font-medium">Confirmation Email</h3>
                      <p className="text-sm text-muted-foreground">
                        You'll receive a detailed confirmation email with your order information shortly.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="font-medium">Pre-Event Coordination</h3>
                      <p className="text-sm text-muted-foreground">
                        Our team will contact you 48 hours before your event to confirm delivery details and any special
                        requirements.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="font-medium">Equipment Delivery & Setup</h3>
                      <p className="text-sm text-muted-foreground">
                        On May 15th, our team will deliver and set up all equipment at your venue. We'll provide a brief
                        orientation on how to use everything.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="font-medium">Enjoy Your Event!</h3>
                      <p className="text-sm text-muted-foreground">
                        Focus on your event while we handle the technology. Our support team is available 24/7 if you
                        need assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center space-y-4">
              <h2 className="text-xl font-bold">Need to make changes?</h2>
              <p className="text-muted-foreground">
                If you need to modify your order or have any questions, please contact our customer service team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
                <Button asChild>
                  <Link href="tel:+15551234567" className="flex items-center gap-2">
                    Call Us: (555) 123-4567
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="mailto:support@michiganeet.com" className="flex items-center gap-2">
                    Email Support
                  </Link>
                </Button>
              </div>
              <div className="mt-8">
                <Button variant="link" asChild>
                  <Link href="/" className="flex items-center gap-1">
                    Return to Homepage
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
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

