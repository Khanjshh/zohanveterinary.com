import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroSection } from "@/components/home/hero-section"
import { AnimatedStats } from "@/components/home/animated-stats"
import { ServicesGrid } from "@/components/home/services-grid"
import { ScrollingGallery } from "@/components/home/scrolling-gallery"
import { ProductsCarousel } from "@/components/home/products-carousel"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FarmGallery } from "@/components/home/farm-gallery"
import { TeamSection } from "@/components/home/team-section"
import { FAQSection } from "@/components/home/faq-section"
import { InfographicsSection } from "@/components/home/infographics-section"
import { AnimalsSection } from "@/components/home/animals-section"
import { AIChatbot } from "@/components/ai-chatbot"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArrowRight, Package, Truck, Shield, Headphones, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Infographics Section */}
      <InfographicsSection />

      {/* Animals We Serve Section */}
      <AnimalsSection />

      {/* About Section with Illustration */}
      <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <Badge className="mb-3 md:mb-4 bg-secondary/20 text-secondary text-xs md:text-sm">
                About Our Practice
              </Badge>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-6 text-balance text-foreground">
                Meet Dr. Inayat Ullah
              </h2>
              <div className="space-y-3 md:space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                <p className="text-base md:text-lg">
                  <span className="font-semibold text-foreground">DVM, RVMP, M.Phil, MBA</span>
                </p>
                <p>
                  Dr. Inayat Ullah is a highly qualified veterinarian with extensive experience in clinical practice,
                  farm consultancy, and livestock project management.
                </p>
                <p>
                  Specializing in dairy cows, buffaloes, goats, and other halal livestock species, Dr. Inayat provides
                  end-to-end support across Pakistan and internationally.
                </p>
              </div>
              <Button
                asChild
                className="mt-4 md:mt-6 bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base"
              >
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative animate-bounce-slow">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Veterinary Service Illustration"
                  className="w-full h-auto max-w-xs md:max-w-md mx-auto drop-shadow-2xl rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesGrid />

      {/* Scrolling Gallery */}
      <ScrollingGallery />

      {/* Team Section */}
      <TeamSection />

      {/* Shop Section - Featured Medicines */}
      <section className="py-8 md:py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-primary/20 text-primary text-xs md:text-sm">Veterinary Medicines</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-balance text-foreground">
              Quality Medicines for Your Livestock
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground text-pretty leading-relaxed">
              Authentic Pakistani veterinary medicines for cows, buffaloes, goats, and sheep. Fast delivery across
              Pakistan.
            </p>
          </div>

          <ProductsCarousel />

          <div className="text-center mt-6 md:mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm md:text-base"
            >
              <Link href="/shop">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Farm Gallery */}
      <FarmGallery />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Why Choose Us */}
      <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-6 md:mb-12">
            <Badge className="mb-3 md:mb-4 bg-accent/20 text-accent text-xs md:text-sm">Why Choose Us</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-4 text-balance text-foreground">
              Your Trusted Partner
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            <Card className="text-center p-3 md:p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/30">
              <CardContent className="p-0">
                <div className="h-10 w-10 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-4 mx-auto">
                  <Package className="h-5 w-5 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-foreground">Quality Products</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  100% authentic veterinary medicines
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-3 md:p-6 hover:shadow-lg transition-shadow border-2 hover:border-secondary/30">
              <CardContent className="p-0">
                <div className="h-10 w-10 md:h-16 md:w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-2 md:mb-4 mx-auto">
                  <Truck className="h-5 w-5 md:h-8 md:w-8 text-secondary" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-foreground">Fast Delivery</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Quick delivery across Pakistan
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-3 md:p-6 hover:shadow-lg transition-shadow border-2 hover:border-accent/30">
              <CardContent className="p-0">
                <div className="h-10 w-10 md:h-16 md:w-16 rounded-full bg-accent/10 flex items-center justify-center mb-2 md:mb-4 mx-auto">
                  <Shield className="h-5 w-5 md:h-8 md:w-8 text-accent" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-foreground">Expert Guidance</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Professional veterinary support
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-3 md:p-6 hover:shadow-lg transition-shadow border-2 hover:border-primary/30">
              <CardContent className="p-0">
                <div className="h-10 w-10 md:h-16 md:w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-4 mx-auto">
                  <Headphones className="h-5 w-5 md:h-8 md:w-8 text-primary" />
                </div>
                <h3 className="text-sm md:text-lg font-semibold mb-1 md:mb-2 text-foreground">24/7 Support</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">Always here when you need us</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16 lg:py-20 bg-gradient-to-br from-primary via-secondary to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/placeholder.svg?height=600&width=1200" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 text-pretty leading-relaxed opacity-90">
              Get expert consultation for your livestock. Call us today!
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
              <Button asChild size="lg" className="bg-card text-card-foreground hover:bg-card/90 text-sm md:text-base">
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-sm md:text-base"
              >
                <a href="tel:+923136568351">
                  <Phone className="h-4 w-4 mr-2" />
                  +92 313 6568351
                </a>
              </Button>
              <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#128C7E] text-sm md:text-base">
                <a href="https://wa.me/923136568351" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 mr-2 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Floating Buttons */}
      <WhatsAppButton />
      <AIChatbot />
    </div>
  )
}
