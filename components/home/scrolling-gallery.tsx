"use client"

import { Badge } from "@/components/ui/badge"

export function ScrollingGallery() {
  // Pakistani farm images
  const imagesRow1 = [
    "/modern-dairy-farm-pakistan-with-buffaloes.jpg",
    "/veterinarian-examining-cow-on-pakistani-farm.jpg",
    "/healthy-cows-grazing-green-fields-pakistan.jpg",
    "/goat-farming-pakistan-rural-area.jpg",
    "/buffalo-herd-dairy-farm-karachi-pakistan.jpg",
    "/modern-cattle-shed-pakistan.jpg",
    "/sheep-flock-grazing-pakistan-mountains.jpg",
    "/milking-parlor-dairy-farm-pakistan.jpg",
  ]

  const imagesRow2 = [
    "/newborn-calf-with-mother-cow-pakistan-farm.jpg",
    "/fodder-crops-green-field-pakistan.jpg",
    "/veterinary-medicine-administration-cow.jpg",
    "/buffalo-milking-traditional-pakistan.jpg",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  return (
    <section className="py-8 md:py-16 bg-gradient-to-r from-secondary/5 via-primary/5 to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-6 md:mb-8">
        <div className="text-center">
          <Badge className="mb-3 md:mb-4 bg-secondary/20 text-secondary text-xs md:text-sm">Our Work</Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-balance text-foreground">
            Farm Success Stories
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Real farms across Pakistan transformed by our veterinary expertise
          </p>
        </div>
      </div>

      {/* Left to Right Scrolling - Seamless Loop */}
      <div className="relative mb-4 md:mb-6">
        <div className="flex animate-scroll-left" style={{ width: "fit-content" }}>
          {[...imagesRow1, ...imagesRow1].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 sm:w-64 md:w-72 lg:w-80 mx-1 md:mx-2 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Farm Success ${index + 1}`}
                className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right to Left Scrolling - Seamless Loop */}
      <div className="relative">
        <div className="flex animate-scroll-right" style={{ width: "fit-content" }}>
          {[...imagesRow2, ...imagesRow2].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 sm:w-64 md:w-72 lg:w-80 mx-1 md:mx-2 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={src || "/placeholder.svg"}
                alt={`Farm Gallery ${index + 1}`}
                className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
