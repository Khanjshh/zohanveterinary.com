import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Award } from "lucide-react"

export function TeamSection() {
  const team = [
    {
      name: "Dr. Inayat Ullah",
      role: "Founder & Lead Consultant",
      qualifications: "DVM, RVMP, M.Phil, MBA",
      specialization: "Dairy Farm Management, Large Animal Medicine",
      image: "/placeholder.svg?height=300&width=300",
      phone: "+92 313 6568351",
      experience: "10+ Years",
    },
    {
      name: "Dr. Ahmed Raza",
      role: "Senior Veterinarian",
      qualifications: "DVM, M.Phil",
      specialization: "Animal Nutrition & Feeding",
      image: "/placeholder.svg?height=300&width=300",
      phone: "+92 301 6568351",
      experience: "8+ Years",
    },
    {
      name: "Dr. Fatima Khan",
      role: "Breeding Specialist",
      qualifications: "DVM, MS Theriogenology",
      specialization: "Reproductive Health & AI Services",
      image: "/placeholder.svg?height=300&width=300",
      phone: "+92 313 6568351",
      experience: "6+ Years",
    },
    {
      name: "Dr. Hassan Ali",
      role: "Field Veterinarian",
      qualifications: "DVM, RVMP",
      specialization: "Emergency Care & Surgery",
      image: "/placeholder.svg?height=300&width=300",
      phone: "+92 301 6568351",
      experience: "5+ Years",
    },
  ]

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <Badge className="mb-3 md:mb-4 bg-primary/20 text-primary text-xs md:text-sm">Our Expert Team</Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance text-foreground">
            Meet Our Veterinary Experts
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
            Highly qualified professionals dedicated to the health and productivity of your livestock
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {team.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group">
              <div className="relative">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2">
                  <Badge className="bg-accent text-accent-foreground text-[10px] md:text-xs">{member.experience}</Badge>
                </div>
              </div>
              <CardContent className="p-3 md:p-4">
                <h3 className="font-bold text-sm md:text-base lg:text-lg text-foreground mb-0.5">{member.name}</h3>
                <p className="text-xs md:text-sm text-primary font-medium mb-1">{member.role}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground mb-2">{member.qualifications}</p>
                <div className="flex items-center gap-1 text-[10px] md:text-xs text-muted-foreground mb-2">
                  <Award className="h-3 w-3 text-secondary" />
                  <span className="line-clamp-1">{member.specialization}</span>
                </div>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center gap-1 text-[10px] md:text-xs text-primary hover:underline"
                >
                  <Phone className="h-3 w-3" />
                  {member.phone}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
