"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent } from "@/components/ui/card"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeft, Check, Info, ShoppingCart } from "lucide-react"
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
    details: {
      brand: "Sony",
      model: "VPL-VW915ES",
      weight: "35 lbs",
      dimensions: '22" x 18" x 8"',
      powerRequirements: "110-240V, 500W",
      includes: ["Projector", "Remote Control", "Power Cable", "HDMI Cable", "Adjustable Stand", "Carrying Case"],
      technicalSpecs: [
        "Native Resolution: 4096 x 2160 (4K)",
        "Brightness: 10,000 ANSI lumens",
        "Contrast Ratio: 20,000:1",
        "Lamp Life: 6,000 hours (eco mode)",
        "Inputs: 2x HDMI 2.0, 1x DisplayPort, 1x USB-C",
        "Wireless Connectivity: Wi-Fi, Bluetooth",
      ],
      setupRequirements:
        'Requires stable surface or mounting point. Minimum 15ft distance for 100" screen. Ambient light control recommended for best performance.',
      additionalNotes:
        "Technical support available for setup. Delivery and setup service available for an additional fee.",
    },
  },
  {
    id: 2,
    name: '200" Projection Screen',
    category: "projection",
    image: "/placeholder.svg?height=300&width=400",
    price: 150,
    priceUnit: "day",
    description: "Large format projection screen with stand, suitable for conferences and outdoor movie nights.",
    features: ['200" Diagonal', "16:9 Aspect Ratio", "Easy Setup", "Includes Frame"],
    availability: true,
    details: {
      brand: "Elite Screens",
      model: "Yard Master 2",
      weight: "45 lbs",
      dimensions: '175" x 98" (screen), 10" x 10" x 72" (packed)',
      powerRequirements: "None",
      includes: ["Screen Material", "Frame Components", "Ground Stakes", "Carrying Bag"],
      technicalSpecs: [
        'Screen Size: 200" diagonal',
        "Aspect Ratio: 16:9",
        "Viewing Angle: 160°",
        "Gain: 1.1",
        "Material: CineWhite UHD-B",
      ],
      setupRequirements: "Requires 15ft x 10ft flat area. Setup time approximately 15 minutes with two people.",
      additionalNotes: "Suitable for front and rear projection. Wind-resistant up to 10mph.",
    },
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
    details: {
      brand: "JBL",
      model: "EON Series",
      weight: "120 lbs (complete system)",
      dimensions: "Various (multiple components)",
      powerRequirements: "110-240V, 2000W total",
      includes: [
        "2x Main Speakers",
        "2x Subwoofers",
        "Digital Mixer",
        "2x Wireless Microphones",
        "Speaker Stands",
        "All Necessary Cables",
      ],
      technicalSpecs: [
        "Total Power: 2000W RMS",
        "Frequency Response: 35Hz - 20kHz",
        "Max SPL: 132dB",
        "Mixer: 16-channel digital",
        "Wireless Microphone Range: 300ft",
      ],
      setupRequirements:
        "Requires stable power source. Allow 30 minutes for setup. Sound check recommended before event.",
      additionalNotes:
        "Technical operator available for an additional fee. System can be scaled down for smaller venues.",
    },
  },
  {
    id: 4,
    name: "Wireless Lavalier Microphone Set",
    category: "audio",
    image: "/placeholder.svg?height=300&width=400",
    price: 75,
    priceUnit: "day",
    description: "Professional wireless lavalier microphone set, perfect for presentations and speeches.",
    features: ["Digital Transmission", "8-Hour Battery", "100ft Range", "Noise Cancellation"],
    availability: false,
    details: {
      brand: "Sennheiser",
      model: "EW 112P G4",
      weight: "1.5 lbs",
      dimensions: '4" x 2" x 1" (receiver), 2.5" x 1.5" x 0.75" (transmitter)',
      powerRequirements: "Battery powered (AA)",
      includes: ["Bodypack Transmitter", "Receiver", "Lavalier Microphone", "Windscreen", "Belt Clip", "Carrying Case"],
      technicalSpecs: [
        "Frequency Range: 516-558 MHz",
        "Transmission Range: 100ft line-of-sight",
        "Battery Life: 8 hours",
        "Frequency Response: 80Hz - 18kHz",
        "Signal-to-Noise Ratio: > 110dB",
      ],
      setupRequirements: "Fresh batteries recommended. Test range before event.",
      additionalNotes: "Compatible with most PA systems and cameras. Additional microphones available.",
    },
  },
  {
    id: 5,
    name: "4K Multi-Camera Setup",
    category: "video",
    image: "/placeholder.svg?height=300&width=400",
    price: 500,
    priceUnit: "day",
    description: "Professional multi-camera setup with switcher for live event recording and streaming.",
    features: ["3x 4K Cameras", "Live Switching", "Recording & Streaming", "Operator Included"],
    availability: true,
    details: {
      brand: "Various (Sony, Blackmagic)",
      model: "Custom Package",
      weight: "85 lbs (complete system)",
      dimensions: "Various (multiple components)",
      powerRequirements: "110-240V, multiple outlets required",
      includes: [
        "3x 4K Cameras",
        "Tripods",
        "Blackmagic ATEM Switcher",
        "Recording Device",
        "Streaming Encoder",
        "Monitors",
        "Professional Operator",
      ],
      technicalSpecs: [
        "Camera Resolution: 4K (3840 x 2160)",
        "Recording Format: ProRes 422",
        "Streaming Capability: Up to 4K @ 30fps",
        "Storage: 1TB SSD included",
        "Connectivity: HDMI, SDI, Ethernet",
      ],
      setupRequirements: "Requires 1 hour setup time. Stable power and internet connection needed for streaming.",
      additionalNotes:
        "Includes professional operator. Additional cameras available. Post-production services offered separately.",
    },
  },
  {
    id: 6,
    name: "Drone Camera Package",
    category: "video",
    image: "/placeholder.svg?height=300&width=400",
    price: 300,
    priceUnit: "day",
    description: "Professional drone camera package for aerial videography and photography.",
    features: ["4K 60fps Video", "Licensed Operator", "30-Min Flight Time", "Edited Highlights"],
    availability: true,
    details: {
      brand: "DJI",
      model: "Inspire 2 with X5S Camera",
      weight: "8 lbs",
      dimensions: '18" x 18" x 8" (folded)',
      powerRequirements: "Battery powered (included)",
      includes: ["Drone", "Camera", "Controller", "3 Batteries", "Licensed Operator", "Basic Editing"],
      technicalSpecs: [
        "Camera Resolution: 5.2K video, 20.8MP stills",
        "Flight Time: 27 minutes per battery",
        "Max Speed: 58 mph",
        "Range: 4.3 miles",
        "Obstacle Sensing: 5-direction",
      ],
      setupRequirements: "Weather dependent (no rain, wind under 20mph). Requires FAA clearance for certain locations.",
      additionalNotes:
        "Includes FAA licensed pilot. Additional editing services available. Indoor operation not recommended.",
    },
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
    details: {
      brand: "Chauvet",
      model: "SlimPAR Pro Series",
      weight: "75 lbs (complete system)",
      dimensions: "Various (multiple components)",
      powerRequirements: "110-240V, 1200W total",
      includes: [
        "12x LED Par Cans",
        "DMX Controller",
        "10ft Truss System",
        "Clamps",
        "Safety Cables",
        "Power and DMX Cables",
      ],
      technicalSpecs: [
        "LED Type: RGBWA+UV",
        "Beam Angle: 25°",
        "Control: DMX, Automated, Sound-activated",
        "Channels: 6/8/12 channel modes",
        "Dimming: 0-100% electronic",
      ],
      setupRequirements: "Requires 45 minutes for setup. Mounting points or stands needed for truss.",
      additionalNotes: "Pre-programmed light shows available. Lighting technician available for an additional fee.",
    },
  },
  {
    id: 8,
    name: "Wireless Uplighting Set",
    category: "lighting",
    image: "/placeholder.svg?height=300&width=400",
    price: 150,
    priceUnit: "day",
    description: "Set of 10 wireless LED uplights with remote control, perfect for venue decoration.",
    features: ["Battery Powered", "RGBW Colors", "DMX Compatible", "8-Hour Runtime"],
    availability: true,
    details: {
      brand: "ADJ",
      model: "Element ST HEX",
      weight: "35 lbs (complete set)",
      dimensions: '8" x 3.5" x 8.75" (per light)',
      powerRequirements: "Battery powered (built-in lithium)",
      includes: ["10x Wireless LED Uplights", "Wireless Remote", "Charging Case", "Color Selection Guide"],
      technicalSpecs: [
        "LED Type: 4-in-1 RGBA",
        "Battery Life: 8+ hours (full color), 20+ hours (single color)",
        "Wireless Range: 100ft",
        "Control: IR Remote, Wireless DMX, Manual",
        "Beam Angle: 20°",
      ],
      setupRequirements: "No power cables needed. Place around venue perimeter for best effect.",
      additionalNotes: "Custom color matching available. Additional units available in sets of 10.",
    },
  },
]

export default function EquipmentDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const equipmentId = Number.parseInt(params.id)
  const equipment = equipmentData.find((item) => item.id === equipmentId)

  const [date, setDate] = useState<Date | undefined>(undefined)
  const [duration, setDuration] = useState(1)
  const [inCart, setInCart] = useState(false)

  if (!equipment) {
    return (
      <div className="flex min-h-screen flex-col">
        <RentalHeader cartItemCount={0} />
        <main className="flex-1 container py-10">
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold mb-4">Equipment Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The equipment you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link href="/rental">Back to Equipment</Link>
            </Button>
          </div>
        </main>
        <RentalFooter />
      </div>
    )
  }

  const addToCart = () => {
    setInCart(true)
    // In a real app, this would add to a cart state or API
    setTimeout(() => {
      router.push("/rental/cart")
    }, 1000)
  }

  const totalPrice = equipment.price * duration

  return (
    <div className="flex min-h-screen flex-col">
      <RentalHeader cartItemCount={inCart ? 1 : 0} />

      <main className="flex-1">
        <div className="container py-10">
          <div className="flex items-center gap-2 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/rental" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                Back to Equipment
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Equipment Image */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image src={equipment.image || "/placeholder.svg"} alt={equipment.name} fill className="object-cover" />
              </div>

              <div className="mt-8">
                <Tabs defaultValue="details">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="includes">What's Included</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="p-4 border rounded-lg mt-2">
                    <h3 className="font-medium mb-2">Equipment Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Brand</p>
                        <p className="font-medium">{equipment.details.brand}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Model</p>
                        <p className="font-medium">{equipment.details.model}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Weight</p>
                        <p className="font-medium">{equipment.details.weight}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Dimensions</p>
                        <p className="font-medium">{equipment.details.dimensions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Power Requirements</p>
                        <p className="font-medium">{equipment.details.powerRequirements}</p>
                      </div>
                    </div>

                    <h3 className="font-medium mt-6 mb-2">Setup Requirements</h3>
                    <p className="text-sm">{equipment.details.setupRequirements}</p>

                    <h3 className="font-medium mt-6 mb-2">Additional Notes</h3>
                    <p className="text-sm">{equipment.details.additionalNotes}</p>
                  </TabsContent>
                  <TabsContent value="specs" className="p-4 border rounded-lg mt-2">
                    <h3 className="font-medium mb-2">Technical Specifications</h3>
                    <ul className="space-y-2">
                      {equipment.details.technicalSpecs.map((spec, index) => (
                        <li key={index} className="text-sm">
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="includes" className="p-4 border rounded-lg mt-2">
                    <h3 className="font-medium mb-2">What's Included</h3>
                    <ul className="space-y-2">
                      {equipment.details.includes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </div>
            </div>

            {/* Rental Details */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h1 className="text-2xl font-bold mb-2">{equipment.name}</h1>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant={equipment.availability ? "default" : "destructive"}>
                      {equipment.availability ? "Available" : "Unavailable"}
                    </Badge>
                    <Badge variant="outline">{equipment.category}</Badge>
                  </div>

                  <p className="text-muted-foreground mb-6">{equipment.description}</p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-2">Key Features</h3>
                      <ul className="space-y-2">
                        {equipment.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 text-primary mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {equipment.availability && (
                      <>
                        <div className="border-t pt-6">
                          <h3 className="font-medium mb-2">Rental Period</h3>
                          <div className="flex flex-col gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground mb-1">Start Date</p>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Select date</span>}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
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
                                <div className="flex-1 flex items-center justify-center font-medium">{duration}</div>
                                <Button variant="outline" size="icon" onClick={() => setDuration(duration + 1)}>
                                  +
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-6">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">Price per day</span>
                            <span>${equipment.price}</span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">Duration</span>
                            <span>{duration} days</span>
                          </div>
                          <div className="flex justify-between items-center text-lg font-bold mt-4">
                            <span>Total</span>
                            <span>${totalPrice}</span>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 mb-6">
                            <Info className="h-4 w-4" />
                            <span>Taxes and delivery fees calculated at checkout</span>
                          </div>

                          <Button className="w-full" disabled={!date || inCart} onClick={addToCart}>
                            {inCart ? (
                              <span className="flex items-center gap-2">
                                <Check className="h-4 w-4" />
                                Added to Cart
                              </span>
                            ) : (
                              <span className="flex items-center gap-2">
                                <ShoppingCart className="h-4 w-4" />
                                Add to Cart
                              </span>
                            )}
                          </Button>

                          <div className="text-center mt-4">
                            <Button variant="link" asChild>
                              <Link href="/rental/cart">View Cart</Link>
                            </Button>
                          </div>
                        </div>
                      </>
                    )}

                    {!equipment.availability && (
                      <div className="border-t pt-6">
                        <div className="bg-destructive/10 text-destructive p-4 rounded-lg text-sm">
                          This equipment is currently unavailable. Please check back later or contact us for
                          alternatives.
                        </div>
                        <Button className="w-full mt-4" variant="outline" asChild>
                          <Link href="/rental">Browse Similar Equipment</Link>
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <RentalFooter />
    </div>
  )
}

