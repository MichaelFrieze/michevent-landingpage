"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Mic2, Video, Music, Search, SlidersHorizontal, ShoppingCart } from "lucide-react"
import RentalHeader from "@/components/rental-header"
import RentalFooter from "@/components/rental-footer"

// Equipment categories
const categories = [
  { id: "all", name: "All Equipment", icon: <SlidersHorizontal className="h-4 w-4" /> },
  { id: "projection", name: "Projection", icon: <Monitor className="h-4 w-4" /> },
  { id: "audio", name: "Audio", icon: <Mic2 className="h-4 w-4" /> },
  { id: "video", name: "Video", icon: <Video className="h-4 w-4" /> },
  { id: "lighting", name: "Lighting", icon: <Music className="h-4 w-4" /> },
]

// Sample equipment data
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
    id: 2,
    name: '200" Projection Screen',
    category: "projection",
    image: "/placeholder.svg?height=300&width=400",
    price: 150,
    priceUnit: "day",
    description: "Large format projection screen with stand, suitable for conferences and outdoor movie nights.",
    features: ['200" Diagonal', "16:9 Aspect Ratio", "Easy Setup", "Includes Frame"],
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
    id: 4,
    name: "Wireless Lavalier Microphone Set",
    category: "audio",
    image: "/placeholder.svg?height=300&width=400",
    price: 75,
    priceUnit: "day",
    description: "Professional wireless lavalier microphone set, perfect for presentations and speeches.",
    features: ["Digital Transmission", "8-Hour Battery", "100ft Range", "Noise Cancellation"],
    availability: false,
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
  },
]

export default function RentalPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState<number[]>([])

  // Filter equipment based on active category and search query
  const filteredEquipment = equipmentData.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Add item to cart
  const addToCart = (itemId: number) => {
    if (!cartItems.includes(itemId)) {
      setCartItems([...cartItems, itemId])
    }
  }

  // Remove item from cart
  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((id) => id !== itemId))
  }

  // Check if item is in cart
  const isInCart = (itemId: number) => cartItems.includes(itemId)

  return (
    <div className="flex min-h-screen flex-col">
      <RentalHeader cartItemCount={cartItems.length} />

      <main className="flex-1">
        <section className="bg-muted py-10">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Equipment Rental</h1>
                <p className="text-muted-foreground mt-2">
                  Browse and rent professional audio-visual equipment for your next event
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/rental/cart">
                  <Button variant="outline" className="flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Cart ({cartItems.length})</span>
                  </Button>
                </Link>
                <Link href="/rental/checkout">
                  <Button className="hidden md:flex">Proceed to Checkout</Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Filters sidebar */}
              <div className="w-full lg:w-64 space-y-6">
                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium mb-3">Search Equipment</h3>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={activeCategory === category.id ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setActiveCategory(category.id)}
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="bg-background rounded-lg p-4 shadow-sm">
                  <h3 className="font-medium mb-3">Need Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Not sure what equipment you need for your event? Our team is here to help.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </div>
              </div>

              {/* Equipment grid */}
              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredEquipment.map((item) => (
                    <Card key={item.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                        <div className="absolute top-2 right-2">
                          <Badge variant={item.availability ? "default" : "destructive"}>
                            {item.availability ? "Available" : "Unavailable"}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.name}</CardTitle>
                        <CardDescription>{item.description.substring(0, 100)}...</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.features.slice(0, 3).map((feature, index) => (
                            <Badge key={index} variant="outline">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                        <div className="font-bold text-lg">
                          ${item.price}{" "}
                          <span className="text-sm font-normal text-muted-foreground">per {item.priceUnit}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2">
                        <Button variant="outline" className="flex-1" asChild>
                          <Link href={`/rental/equipment/${item.id}`}>View Details</Link>
                        </Button>
                        {item.availability ? (
                          isInCart(item.id) ? (
                            <Button variant="destructive" className="flex-1" onClick={() => removeFromCart(item.id)}>
                              Remove
                            </Button>
                          ) : (
                            <Button className="flex-1" onClick={() => addToCart(item.id)}>
                              Add to Cart
                            </Button>
                          )
                        ) : (
                          <Button disabled className="flex-1">
                            Unavailable
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                {filteredEquipment.length === 0 && (
                  <div className="bg-background rounded-lg p-8 text-center">
                    <h3 className="text-lg font-medium mb-2">No equipment found</h3>
                    <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                    <Button
                      onClick={() => {
                        setActiveCategory("all")
                        setSearchQuery("")
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <RentalFooter />
    </div>
  )
}

