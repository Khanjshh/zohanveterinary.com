import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-8 md:py-16 lg:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Badge className="mb-3 md:mb-4 bg-secondary text-secondary-foreground text-xs md:text-sm animate-fade-in-up">
              Leading Veterinary Services in Pakistan
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-3 md:mb-6 text-foreground leading-tight">
              Zohan Veterinary <span className="text-primary">Services</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary mb-2 md:mb-4 text-balance font-medium">
              A Trusted Veterinary Consultancy Firm
            </p>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-8 text-pretty leading-relaxed max-w-xl mx-auto lg:mx-0">
              Expert care for dairy farms, livestock health for cows, buffaloes, goats, and sheep. Serving Karachi and
              all of Pakistan with quality veterinary solutions.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base"
              >
                <Link href="/contact">
                  Get Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-sm md:text-base bg-transparent border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <Link href="/shop">Shop Medicines</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 md:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm md:text-base">150+</span>
                </div>
                <span>Farms Served</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary font-bold text-sm md:text-base">10+</span>
                </div>
                <span>Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-sm md:text-base">98%</span>
                </div>
                <span>Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative order-first lg:order-last">
            <div className="relative animate-float">
              <img
                src="/cartoon-veterinarian-doctor-with-cow-buffalo-goat-.jpg"
                alt="Veterinary Service Illustration"
                className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-20 md:w-28 lg:w-32 animate-bounce-slow">
              <img src="/cartoon-dairy-farm-building-illustration-icon.jpg" alt="Farm" className="w-full h-auto drop-shadow-xl rounded-2xl" />
            </div>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 md:w-24 lg:w-28 animate-bounce-slow delay-300">
              <img
                src="/cartoon-medicine-delivery-truck-illustration-icon.jpg"
                alt="Delivery"
                className="w-full h-auto drop-shadow-xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
