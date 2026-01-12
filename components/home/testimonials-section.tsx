"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Khan",
      business: "Khan Dairy Farm",
      location: "Karachi",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Dr. Inayat helped us increase milk production by 30%. His nutrition plans are excellent!",
    },
    {
      name: "Fatima Ali",
      business: "Green Valley Farms",
      location: "Lahore",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Best veterinary service in Pakistan. Fast medicine delivery and expert advice.",
    },
    {
      name: "Muhammad Hassan",
      business: "Hassan Livestock",
      location: "Multan",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Started our new goat farm with Dr. Inayat's guidance. Very professional and knowledgeable.",
    },
    {
      name: "Bilal Raza",
      business: "Raza Buffalo Farm",
      location: "Hyderabad",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Excellent breeding consultation. Our buffalo conception rate improved significantly.",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-3 md:mb-4 bg-accent/20 text-accent-foreground text-xs md:text-sm">
            Client Testimonials
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance text-foreground">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">Trusted by farmers across Pakistan</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm md:text-base text-foreground truncate">{testimonial.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{testimonial.business}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2 md:mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
