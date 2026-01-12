import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Heart, Leaf, Baby, Pill, Building2, TrendingUp, Shield, Clock, Award } from "lucide-react"

export function InfographicsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: "28%",
      label: "Avg Milk Increase",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Award,
      value: "150+",
      label: "Farms Transformed",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Clock,
      value: "10+",
      label: "Years Experience",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Shield,
      value: "98%",
      label: "Client Satisfaction",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ]

  const services = [
    {
      icon: Droplets,
      title: "Milk Production",
      description: "Increase yield by up to 30% with our nutrition programs",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Animal Health",
      description: "Complete disease prevention & treatment protocols",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      icon: Leaf,
      title: "Nutrition Planning",
      description: "Scientific TMR formulation for optimal productivity",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Baby,
      title: "Breeding Services",
      description: "AI services & fertility management for better genetics",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: Pill,
      title: "Medicine Supply",
      description: "Authentic veterinary medicines delivered to your door",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Building2,
      title: "Farm Projects",
      description: "Complete setup support for new dairy operations",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ]

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-8 md:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <div
                  className={`h-10 w-10 md:h-14 md:w-14 rounded-full ${stat.bgColor} flex items-center justify-center mx-auto mb-2 md:mb-3`}
                >
                  <stat.icon className={`h-5 w-5 md:h-7 md:w-7 ${stat.color}`} />
                </div>
                <div className={`text-2xl md:text-4xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Services Infographic */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <Badge className="mb-3 md:mb-4 bg-accent/20 text-accent text-xs md:text-sm">What We Do</Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance text-foreground">
            Complete Veterinary Solutions
          </h2>
          <p className="text-sm md:text-base text-muted-foreground">
            From nutrition to breeding, health to farm setup - we cover everything
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all hover:-translate-y-1 group border-2 hover:border-primary/30"
            >
              <CardContent className="p-4 md:p-6">
                <div
                  className={`h-12 w-12 md:h-16 md:w-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className={`h-6 w-6 md:h-8 md:w-8 ${service.color}`} />
                </div>
                <h3 className="font-bold text-sm md:text-lg text-foreground mb-1 md:mb-2">{service.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
