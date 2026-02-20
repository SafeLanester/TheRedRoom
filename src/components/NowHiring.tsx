import { Sparkles, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

/**
 * Now Hiring Component - Recruitment banner for The Red Room
 * 
 * Highlights job opportunities with no experience required and earning potential.
 */

export default function NowHiring() {
  return (
    <section className="py-16 bg-gradient-to-b from-red-950/30 to-black">
      <div className="mx-auto max-w-4xl px-6">
        <Card className="bg-gradient-to-r from-red-900/40 via-red-950/50 to-red-900/40 border-2 border-red-600/50 shadow-lg shadow-red-900/20">
          <CardContent className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-red-700/50 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-10 h-10 text-red-300" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-grow text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
                  <span className="text-red-400">NOW HIRING</span> LADIES 18+!!!
                </h2>
                <p className="text-lg text-gray-300 mb-4">
                  <span className="text-red-300 font-semibold">No Experience Necessary.</span> Possible to make 
                  <span className="text-green-400 font-bold"> hundreds a day</span> even with no experience!
                </p>
                <p className="text-gray-400">
                  Contact us for an interview and start your journey today.
                </p>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-500 text-white px-6 py-5 text-lg font-semibold"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  CALL NOW
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-red-600 text-red-400 hover:bg-red-950/50 px-6 py-5 text-lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  EMAIL US
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}