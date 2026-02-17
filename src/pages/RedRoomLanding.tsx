import { useState } from "react";
import {
  Wine,
  Music,
  CalendarDays,
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Twitter,
  ChevronRight,
  Star,
  Mic2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

/**
 * The Red Room - Premium Club & Bar Landing Page
 *
 * A sophisticated, dark-themed landing page designed to attract
 * guests to The Red Room nightclub and cocktail lounge.
 */

// Alias for clarity
const GlassFull = Wine;
const IconCalendar = CalendarDays;
const IconMapPin = MapPin;
const IconClock = Clock;
const IconPhone = Phone;
const IconMail = Mail;
const IconInstagram = Instagram;
const IconBrandX = Twitter;
const IconChevronRight = ChevronRight;
const IconStar = Star;
const IconMicrophone2 = Mic2;

const features = [
  {
    icon: Wine,
    title: "Craft Cocktails",
    description:
      "Expertly mixed signature drinks and classic cocktails by our award-winning bartenders.",
  },
  {
    icon: Music,
    title: "Live Music",
    description:
      "Curated DJs and live performances every weekend. House, jazz, and everything in between.",
  },
  {
    icon: GlassFull,
    title: "Premium Spirits",
    description:
      "Extensive selection of rare whiskies, small-batch gins, and exclusive champagne.",
  },
  {
    icon: IconMicrophone2,
    title: "Intimate Vibes",
    description:
      "Underground atmosphere with mood lighting, velvet seating, and secret corners.",
  },
];

const upcomingEvents = [
  {
    date: "FEB 14",
    day: "Friday",
    title: "Valentine's Masquerade",
    description: "Mystery, romance, and midnight cocktails. Mask required.",
    time: "9PM - 3AM",
    price: "$20 cover",
  },
  {
    date: "FEB 15",
    day: "Saturday",
    title: "DJ Shadow Session",
    description: "Underground beats with resident selector Marcus V.",
    time: "10PM - 4AM",
    price: "$15 cover",
  },
  {
    date: "FEB 21",
    day: "Friday",
    title: "Jazz & Smoke",
    description: "Live jazz quartet. Whisky tastings until midnight.",
    time: "8PM - 2AM",
    price: "$10 cover",
  },
];

const testimonials = [
  {
    name: "Alexandra M.",
    text: "The atmosphere is unmatched. Best cocktails in the city, hands down.",
    rating: 5,
  },
  {
    name: "James K.",
    text: "Found my new favorite spot. The speakeasy vibes are authentic.",
    rating: 5,
  },
  {
    name: "Sophia L.",
    text: "Incredible music, amazing drinks, and the staff treats you like family.",
    rating: 5,
  },
];

export default function RedRoomLanding() {
  const [email, setEmail] = useState("");

  const handleGuestList = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle guest list signup
    alert("You're on the list! Check your email for confirmation.");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/30">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold tracking-wider">
              <span className="text-red-600">THE</span> RED ROOM
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
              <a href="#events" className="hover:text-red-500 transition-colors">EVENTS</a>
              <a href="#about" className="hover:text-red-500 transition-colors">ABOUT</a>
              <a href="#menu" className="hover:text-red-500 transition-colors">MENU</a>
              <a href="#contact" className="hover:text-red-500 transition-colors">CONTACT</a>
            </div>
            <Button className="bg-red-700 hover:bg-red-600 text-white border-0">
              BOOK TABLE
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/40 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center pt-20">
          <Badge className="mb-6 bg-red-900/50 text-red-200 border-red-700/50 px-4 py-1">
            <IconStar className="mr-1 size-3" />
            NOW OPEN - THURSDAY THROUGH SUNDAY
          </Badge>
          
          <h1 className="mb-6 text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              THE RED ROOM
            </span>
          </h1>
          
          <p className="mb-4 text-xl md:text-2xl text-red-200/80 font-light tracking-wide">
            Where the night comes alive
          </p>
          
          <p className="mb-10 text-lg text-gray-400 max-w-2xl mx-auto">
            An underground cocktail lounge and nightclub experience. 
            Craft cocktails, world-class DJs, and an atmosphere you won't find anywhere else.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white px-8 py-6 text-lg">
              RESERVE A TABLE
            </Button>
            <Button size="lg" variant="outline" className="border-red-700 text-red-400 hover:bg-red-950/50 px-8 py-6 text-lg">
              VIEW EVENTS
            </Button>
          </div>

          {/* Quick Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <IconMapPin className="size-4 text-red-500" />
              <span>123 Underground Ave, Downtown</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <IconClock className="size-4 text-red-500" />
              <span>Thu-Sun: 8PM - 4AM</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <IconPhone className="size-4 text-red-500" />
              <span>(555) 123-RED-ROOM</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-700 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-red-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black to-red-950/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              WHY THE RED ROOM?
            </h2>
            <p className="text-lg text-gray-400">
              Experience nightlife reimagined
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-red-950/20 border-red-900/30 hover:border-red-700/50 transition-colors">
                <CardHeader>
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-900/30">
                    <feature.icon className="h-7 w-7 text-red-500" />
                  </div>
                  <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section id="events" className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                UPCOMING EVENTS
              </h2>
              <p className="text-lg text-gray-400">
                Don't miss what's happening this week
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0 border-red-700 text-red-400 hover:bg-red-950/50">
              VIEW ALL EVENTS
              <IconChevronRight className="ml-2 size-4" />
            </Button>
          </div>

          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="bg-gradient-to-r from-red-950/20 to-black border-red-900/30 hover:border-red-700/50 transition-all group">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Date */}
                    <div className="flex-shrink-0 text-center md:text-left">
                      <div className="text-3xl font-bold text-red-500">{event.date.split(" ")[0]}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">{event.date.split(" ")[1]}</div>
                      <div className="text-xs text-gray-600 mt-1">{event.day}</div>
                    </div>
                    
                    <Separator orientation="vertical" className="hidden md:block h-16 bg-red-900/30" />
                    
                    {/* Event Details */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-gray-400 mb-3">{event.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <IconClock className="size-4" />
                          {event.time}
                        </span>
                        <span className="text-red-500 font-medium">{event.price}</span>
                      </div>
                    </div>
                    
                    {/* CTA */}
                    <Button className="flex-shrink-0 bg-red-700 hover:bg-red-600">
                      GET TICKETS
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guest List / Newsletter Section */}
      <section className="py-24 bg-gradient-to-b from-black to-red-950/20">
        <div className="mx-auto max-w-4xl px-6">
          <Card className="bg-red-950/20 border-red-700/50">
            <CardContent className="p-8 md:p-12 text-center">
              <IconCalendar className="mx-auto h-12 w-12 text-red-500 mb-6" />
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                JOIN THE GUEST LIST
              </h2>
              <p className="mb-8 text-gray-400 max-w-lg mx-auto">
                Skip the line and get exclusive access to special events, 
                drink specials, and VIP table offers. Be the first to know.
              </p>
              
              <form onSubmit={handleGuestList} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black/50 border-red-700 text-white placeholder:text-gray-500 flex-grow"
                  required
                />
                <Button type="submit" className="bg-red-700 hover:bg-red-600 whitespace-nowrap">
                  SIGN UP
                </Button>
              </form>
              
              <p className="mt-4 text-xs text-gray-500">
                No spam. Unsubscribe anytime. Must be 21+ to enter.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              WHAT PEOPLE ARE SAYING
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-red-950/10 border-red-900/30">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <IconStar key={i} className="size-4 text-red-500 fill-red-500" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-sm text-red-400 font-medium">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Location Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-red-950/20 to-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                FIND US
              </h2>
              <p className="text-gray-400 mb-8">
                Tucked away in the heart of downtown. Look for the red door 
                beneath the neon sign. Admission is 21+ with valid ID.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center">
                    <IconMapPin className="size-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Address</h4>
                    <p className="text-gray-400">123 Underground Avenue<br />Downtown District, NY 10001</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center">
                    <IconClock className="size-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Hours</h4>
                    <p className="text-gray-400">
                      Thursday - Sunday<br />
                      8:00 PM - 4:00 AM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-900/30 flex items-center justify-center">
                    <IconPhone className="size-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Reservations</h4>
                    <p className="text-gray-400">(555) 123-RED-ROOM<br />vip@theredroom.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="aspect-square md:aspect-video bg-red-950/20 border border-red-900/30 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <IconMapPin className="mx-auto h-16 w-16 text-red-700 mb-4" />
                <p className="text-gray-500">Interactive Map</p>
                <p className="text-sm text-gray-600">123 Underground Ave</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-t from-red-950/30 to-black">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-bold tracking-tight">
            READY FOR TONIGHT?
          </h2>
          <p className="mb-10 text-xl text-gray-400">
            Tables fill up fast. Reserve yours now and experience The Red Room.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white px-10 py-6 text-lg">
              BOOK A TABLE
            </Button>
            <Button size="lg" variant="outline" className="border-red-700 text-red-400 hover:bg-red-950/50 px-10 py-6 text-lg">
              <IconPhone className="mr-2 size-5" />
              CALL NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-900/30 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="text-2xl font-bold tracking-wider mb-4">
                <span className="text-red-600">THE</span> RED ROOM
              </div>
              <p className="text-sm text-gray-500">
                An underground cocktail lounge and nightclub experience.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-red-500 transition-colors">Events</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Menu</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Private Events</a></li>
                <li><a href="#" className="hover:text-red-500 transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>(555) 123-RED-ROOM</li>
                <li>vip@theredroom.com</li>
                <li>123 Underground Ave</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-white">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <IconInstagram className="size-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <IconBrandX className="size-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  <IconMail className="size-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-red-900/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 The Red Room. Must be 21+ to enter.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
