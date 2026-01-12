import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FarmGallery() {
  const galleryImages = [
    "/images/image.png",
    "/images/image.png",
    "/images/image.png",
    "/images/image.png",
    "/images/image.png",
    "/images/image.png",
  ]

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <Badge className="mb-3 md:mb-4 bg-primary/20 text-primary text-xs md:text-sm">Our Gallery</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance text-foreground">
            Visit Our Farm Gallery
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">See our work with farms across Pakistan</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-square hover:shadow-2xl transition-all"
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Farm Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                  <p className="text-xs md:text-sm font-semibold">Farm Visit</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <Button asChild variant="outline" className="text-sm md:text-base bg-transparent">
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
