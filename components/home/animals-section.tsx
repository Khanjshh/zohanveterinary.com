import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function AnimalsSection() {
  const animals = [
    {
      name: "Dairy Cows",
      urdu: "دودھ والی گائے",
      image: "/placeholder.svg?height=250&width=350",
      services: ["Milk Production", "Mastitis Treatment", "Nutrition Planning", "AI Services"],
      color: "border-primary",
    },
    {
      name: "Buffaloes",
      urdu: "بھینس",
      image: "/placeholder.svg?height=250&width=350",
      services: ["Health Management", "Breeding Programs", "Feed Formulation", "Disease Control"],
      color: "border-secondary",
    },
    {
      name: "Goats",
      urdu: "بکری",
      image: "/placeholder.svg?height=250&width=350",
      services: ["Vaccination", "Deworming", "Kid Rearing", "Nutrition Support"],
      color: "border-accent",
    },
    {
      name: "Sheep",
      urdu: "بھیڑ",
      image: "/placeholder.svg?height=250&width=350",
      services: ["Flock Health", "Lambing Support", "Wool Care", "Feed Programs"],
      color: "border-primary",
    },
  ]

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <Badge className="mb-3 md:mb-4 bg-primary/20 text-primary text-xs md:text-sm">Animals We Serve</Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance text-foreground">
            Expert Care for All Livestock
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">
            Specialized veterinary services for cows, buffaloes, goats, and sheep
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {animals.map((animal, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 border-2 ${animal.color}`}
            >
              <div className="relative">
                <img
                  src={animal.image || "/placeholder.svg"}
                  alt={animal.name}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                />
              </div>
              <CardContent className="p-3 md:p-4">
                <h3 className="font-bold text-sm md:text-lg text-foreground mb-0.5">{animal.name}</h3>
                <p className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">{animal.urdu}</p>
                <ul className="space-y-1 mb-3">
                  {animal.services.slice(0, 3).map((service, i) => (
                    <li key={i} className="text-[10px] md:text-xs text-muted-foreground flex items-center gap-1">
                      <span className="h-1 w-1 rounded-full bg-primary"></span>
                      {service}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full h-7 md:h-8 text-[10px] md:text-xs bg-transparent"
                >
                  <Link href="/services">
                    Learn More <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
