import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Stethoscope, Heart, Building2, Pill, TrendingUp } from "lucide-react"

export function ServicesGrid() {
  const services = [
    {
      icon: Leaf,
      title: "Animals' Nutrition",
      description:
        "Balanced feeding plans and nutrition strategies for optimal milk production. TMR formulation and cost-effective plans.",
      color: "primary",
    },
    {
      icon: Stethoscope,
      title: "Animals' Health",
      description:
        "Disease management, vaccination, treatment, and herd health programs. Emergency veterinary support.",
      color: "secondary",
    },
    {
      icon: Heart,
      title: "Animals' Breeding",
      description: "Fertility services, artificial insemination, and breeding programs for better livestock quality.",
      color: "accent",
    },
    {
      icon: Building2,
      title: "New Farm Projects",
      description:
        "Complete farm setup and management for new dairy or livestock farms, including international consultancy.",
      color: "primary",
    },
    {
      icon: Pill,
      title: "Medicine Supply",
      description:
        "Authentic veterinary medicines and vaccines with fast delivery across Pakistan. Bulk supplies available.",
      color: "secondary",
    },
    {
      icon: TrendingUp,
      title: "Farm Management",
      description:
        "Professional guidance for existing farms. Performance audits, cost control, and profitability analysis.",
      color: "accent",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <Badge className="mb-3 md:mb-4 bg-primary/20 text-primary text-xs md:text-sm">Our Specializations</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance text-foreground">
            Comprehensive Veterinary Services
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
            Complete range of veterinary consultancy services for dairy and livestock farms.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 border-2 group">
                <CardContent className="p-4 md:p-6">
                  <div
                    className={`h-12 w-12 md:h-14 md:w-14 rounded-lg bg-${service.color}/10 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`h-6 w-6 md:h-7 md:w-7 text-${service.color}`} />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">{service.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
