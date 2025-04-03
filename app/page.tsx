import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Mic2,
  Monitor,
  Video,
  Music,
  Calendar,
  Truck,
  Settings,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">MEET</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
              How It Works
            </Link>
            <Link href="#equipment" className="text-sm font-medium transition-colors hover:text-primary">
              Equipment
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/rental">Rent Equipment</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative h-[600px]">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              alt="Event with projection screens and audio equipment"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Michigan Entertainment
              <br />
              Event Technologies
            </h1>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl">
              Professional audio, video, and projection equipment rentals for your events and conferences
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href="#services">Explore Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 text-white border-white/20 hover:bg-white/20 text-base"
              >
                <Link href="/rental">Rent Equipment</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                We provide top-quality entertainment technology for events of all sizes, from small gatherings to large
                conferences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Projection Systems</h3>
                <p className="text-muted-foreground">
                  High-definition projectors and screens for presentations, movies, and displays.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mic2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Audio Systems</h3>
                <p className="text-muted-foreground">
                  Professional sound equipment for speeches, music, and performances.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Live Video Recording</h3>
                <p className="text-muted-foreground">
                  Multi-camera setups to capture and stream your event in real-time.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Music className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Entertainment Systems</h3>
                <p className="text-muted-foreground">
                  Complete entertainment solutions for conferences, parties, and corporate events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">How It Works</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                Renting equipment from MEET is simple and hassle-free. We handle everything from setup to teardown.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Book Your Equipment</h3>
                <p className="text-muted-foreground">
                  Choose the equipment you need through our website or upcoming app. Specify your event date and
                  requirements.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. We Deliver & Setup</h3>
                <p className="text-muted-foreground">
                  Our team delivers and professionally installs all equipment at your venue, ensuring everything works
                  perfectly.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Enjoy & We Handle the Rest</h3>
                <p className="text-muted-foreground">
                  Focus on your event while we manage the technology. After it's over, we'll handle teardown and
                  removal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Showcase */}
        <section id="equipment" className="py-20 bg-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Equipment</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                We offer state-of-the-art technology to make your event memorable and professional.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Projection system"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">4K Projectors</h3>
                  <p className="text-muted-foreground mb-4">
                    Ultra-high definition projectors with 10,000+ lumens for crystal clear presentations even in bright
                    rooms.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 relative">
                  <Image src="/placeholder.svg?height=400&width=600" alt="Audio system" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Professional Sound Systems</h3>
                  <p className="text-muted-foreground mb-4">
                    Complete audio solutions including speakers, mixers, microphones, and monitoring equipment.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
              <div className="bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Video recording equipment"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Video Production Gear</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional cameras, switchers, and streaming equipment for live event capture and broadcasting.
                  </p>
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link href="#app">View All Equipment</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* App Promo Section */}
        <section id="app" className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                  Coming Soon: The MEET Rental App
                </h2>
                <p className="text-xl mb-6 text-primary-foreground/90">
                  Rent equipment with just a few taps. Our upcoming mobile app makes it easier than ever to browse,
                  select, and book the perfect entertainment technology for your event.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Browse our complete equipment catalog</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Get instant quotes based on your event needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Schedule delivery and setup with a few taps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Manage all your rentals in one place</span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary">
                    Join the Waitlist
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-[500px] md:h-[600px]">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="MEET Rental App Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="MEET Team"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">About MEET</h2>
                <p className="text-muted-foreground mb-4">
                  Michigan Entertainment Event Technologies (MEET) was founded with a simple mission: to provide
                  high-quality entertainment technology rentals with exceptional service.
                </p>
                <p className="text-muted-foreground mb-4">
                  With over 15 years of experience in the events industry, our team understands the critical role that
                  technology plays in creating memorable experiences. We've served hundreds of clients across Michigan,
                  from corporate conferences to weddings and festivals.
                </p>
                <p className="text-muted-foreground mb-6">
                  What sets us apart is our commitment to reliability, quality, and customer service. When you work with
                  MEET, you're not just renting equipment – you're gaining a partner dedicated to making your event a
                  success.
                </p>
                <Button asChild>
                  <Link href="#contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                Don't just take our word for it – hear from some of our satisfied customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-bold">John Doe</h4>
                    <p className="text-sm text-muted-foreground">Event Coordinator, TechCon</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "MEET provided flawless audio-visual support for our 3-day conference. Their team was professional,
                  responsive, and the equipment was top-notch. We'll definitely be using them again."
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">SJ</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-sm text-muted-foreground">Wedding Planner</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "The projection and sound system MEET provided for our client's wedding reception created the perfect
                  atmosphere. Their attention to detail and willingness to go the extra mile made all the difference."
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="mr-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold">MB</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Brown</h4>
                    <p className="text-sm text-muted-foreground">Director, Annual Charity Gala</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">
                  "We've worked with MEET for three consecutive years for our annual gala. Their equipment is always
                  reliable, and their team is a pleasure to work with. They understand our needs and consistently
                  deliver."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to elevate your event with professional entertainment technology? Contact us today for a custom
                  quote or to learn more about our services.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-bold">Email Us</h3>
                      <p className="text-muted-foreground">info@michiganeet.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-bold">Call Us</h3>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-primary" />
                    <div>
                      <h3 className="font-bold">Visit Us</h3>
                      <p className="text-muted-foreground">123 Tech Avenue, Grand Rapids, MI 49503</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-6">Request a Quote</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="event-type" className="text-sm font-medium">
                      Event Type
                    </label>
                    <select
                      id="event-type"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                    <label htmlFor="date" className="text-sm font-medium">
                      Event Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell us about your event and equipment needs"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
              From corporate conferences to weddings and concerts, we have the technology to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/rental">Rent Equipment</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/20 hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/rental">Browse Equipment</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Monitor className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold tracking-tight">MEET</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Michigan Entertainment Event Technologies provides professional audio-visual equipment rentals for
                events of all sizes.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Projection Systems
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Audio Equipment
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Video Recording
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Lighting Solutions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                    Rental Agreement
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Michigan Entertainment Event Technologies. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
              <Link href="#" className="text-muted-foreground hover:text-foreground">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

