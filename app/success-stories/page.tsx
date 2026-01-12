import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Award, MapPin } from "lucide-react"
import { AIChatbot } from "@/components/ai-chatbot"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FAQSection } from "@/components/home/faq-section"

export const metadata = {
  title: "Success Stories - Zohan Veterinary Services",
  description:
    "Successful farm transformations and client testimonials from Zohan Veterinary Services. See how we helped 150+ farms improve productivity and profitability.",
}

export default function SuccessStoriesPage() {
  // Gallery of Karachi/Pakistan farms
  const galleryImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/milking-parlor-dairy-farm-pakistan.jpg",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/sheep-flock-grazing-pakistan-mountains.jpg",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  const successFaqs = [
    {
      question: "How much can I expect my milk production to increase?",
      answer:
        "Results vary based on current management, but our clients typically see 15-35% increase in milk production within 6-12 months. Some farms have achieved up to 70% increase with comprehensive management changes including nutrition, health, and breeding improvements.",
    },
    {
      question: "How long does it take to see results from your consultancy?",
      answer:
        "You'll start seeing improvements within the first month with better nutrition and health protocols. Significant results in milk production typically show within 3-6 months. For breeding improvements and genetic progress, expect 12-18 months for full impact.",
    },
    {
      question: "Do you work with small farms or only large operations?",
      answer:
        "We work with farms of all sizes! From small family farms with 5-10 animals to large commercial operations with 500+ animals. Our services are customized based on your farm size, goals, and budget. Many of our most successful transformations are small farms.",
    },
    {
      question: "Can you help if my farm is losing money?",
      answer:
        "Many farms come to us when facing financial challenges. We conduct thorough assessments to identify cost leakages, improve feed efficiency, reduce disease losses, and optimize milk production. Most struggling farms see profitability within 6-12 months of implementing our recommendations.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-3 md:mb-4 bg-secondary text-secondary-foreground text-xs md:text-sm">
              Success Stories
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance text-foreground">
              Successful Farm Transformations
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-muted-foreground text-pretty leading-relaxed">
              We have proudly helped 150+ farms improve productivity, animal health, and profitability across Pakistan
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">28%</div>
                <div className="text-xs md:text-base text-muted-foreground">Avg Milk Increase</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">150+</div>
                <div className="text-xs md:text-base text-muted-foreground">Farms Served</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <Award className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">98%</div>
                <div className="text-xs md:text-base text-muted-foreground">Satisfaction Rate</div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-4 md:p-8 text-center">
                <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-4">
                  <MapPin className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">5</div>
                <div className="text-xs md:text-base text-muted-foreground">Provinces Covered</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Farm Gallery Section */}
      <section className="py-8 md:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-primary/20 text-primary text-xs md:text-sm">Farm Gallery</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-balance text-foreground">
              Pakistani Farms We've Transformed
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
              Real images from dairy and livestock farms across Karachi, Sindh, Punjab, and all of Pakistan
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Pakistani Farm ${index + 1}`}
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2 md:p-4">
                  <span className="text-white text-xs md:text-sm font-medium">Farm Success #{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-secondary/20 text-secondary text-xs md:text-sm">
              Client Testimonials
            </Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-balance text-foreground">
              What Farmers Say About Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Muhammad Aslam",
                location: "Dairy Farm, Punjab",
                quote:
                  "Dr. Inayat Ullah's guidance increased our daily milk production by 28% in just 6 months. His nutrition planning and health protocols made a remarkable difference to our farm's profitability.",
                rating: 5,
              },
              {
                name: "Ahmed Khan",
                location: "Buffalo Farm, Sindh",
                quote:
                  "We were struggling with fertility issues in our buffalo herd. Zohan Veterinary Services implemented a comprehensive breeding program that improved our conception rate by over 35%. Highly professional!",
                rating: 5,
              },
              {
                name: "Tariq Mehmood",
                location: "New Farm Owner, Karachi",
                quote:
                  "Starting a new dairy farm seemed overwhelming until we contacted Dr. Inayat. From land selection to first milking, his guidance was invaluable. Our farm is now running smoothly and profitably.",
                rating: 5,
              },
              {
                name: "Rashid Ali",
                location: "Large Dairy Operation, KPK",
                quote:
                  "The medicine supply service is excellent! Always authentic products delivered on time. We no longer worry about sourcing quality veterinary medicines for our 200-head dairy farm.",
                rating: 5,
              },
              {
                name: "Saeed Ahmed",
                location: "Goat Farm, Balochistan",
                quote:
                  "Dr. Inayat helped us control a PPR outbreak that was devastating our goat herd. His biosecurity protocols and treatment plan saved our farm. True professional expertise!",
                rating: 5,
              },
              {
                name: "Bilal Hassan",
                location: "Progressive Farmer, Lahore",
                quote:
                  "The quarterly performance audits have transformed how we manage our farm. We now make data-driven decisions and our profits have increased significantly. Worth every rupee!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 hover:border-primary/30 hover:shadow-lg transition-all">
                <CardContent className="p-4 md:p-6">
                  <div className="flex gap-1 mb-3 md:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 md:h-5 md:w-5 fill-accent text-accent" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-semibold text-sm md:text-base text-foreground">{testimonial.name}</div>
                  <div className="text-xs md:text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {testimonial.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-8 md:py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-accent/20 text-accent text-xs md:text-sm">Case Studies</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-balance text-foreground">
              Real Results from Real Farms
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <Card className="border-2 overflow-hidden">
              <div className="aspect-video">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="Farm Success Story"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <Badge className="mb-2 md:mb-3 bg-primary/20 text-primary text-xs">Before & After</Badge>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                  From 500L to 850L Daily Production
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  A 50-cow dairy farm in Punjab was struggling with low milk yield and frequent health issues. Through
                  comprehensive nutrition planning, health protocols, and breeding improvements, we increased their
                  daily production by 70% within 8 months.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-primary">70%</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Milk Increase</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-primary">8</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Months</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 overflow-hidden">
              <div className="aspect-video">
                <img
                  src="/placeholder.svg?height=300&width=500"
                  alt="New Farm Project"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4 md:p-6">
                <Badge className="mb-2 md:mb-3 bg-secondary/20 text-secondary text-xs">New Farm Success</Badge>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-foreground">
                  Zero to 100-Head Dairy Farm
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  Guided a new investor through complete farm establishment – from land selection and design to herd
                  building and staff training. The farm achieved profitability in its second year of operation,
                  exceeding initial projections.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-secondary">100</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Animals</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-secondary">2 Yrs</div>
                    <div className="text-xs md:text-sm text-muted-foreground">To Profit</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title="Success Stories FAQs"
        subtitle="Common questions about farm transformations and results"
        faqs={successFaqs}
      />

      <Footer />
      <WhatsAppButton />
      <AIChatbot />
    </div>
  )
}
