import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Leaf,
  Stethoscope,
  Heart,
  Building2,
  Pill,
  TrendingUp,
  CheckCircle2,
  Syringe,
  ClipboardList,
  LineChart,
  Users,
  ArrowRight,
} from "lucide-react"

export const metadata = {
  title: "Our Services - Zohan Veterinary Services",
  description:
    "Complete range of veterinary consultancy services including dairy farm management, animal health, nutrition, breeding programs, medicines supply & new farm setup.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">Our Veterinary Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
              Comprehensive Veterinary & Farm Management Solutions
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              From nutrition to breeding, health to farm setup – complete professional guidance for sustainable
              livestock success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Service 1: Farm Consultancy */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-6">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Dairy Farm Consultancy & Management</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We provide complete professional guidance to existing and new dairy farms, helping you optimize
                  operations and maximize profitability through data-driven strategies.
                </p>
                <ul className="space-y-3">
                  {[
                    "Farm layout planning & shed design optimization",
                    "Herd health monitoring & record-keeping systems",
                    "Milk production enhancement strategies",
                    "Cost control & profitability analysis",
                    "Monthly/quarterly performance audits",
                    "Standard Operating Procedures (SOP) development",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/modern-dairy-farm-with-cows-in-clean-organized-fac.jpg"
                  alt="Dairy Farm Management"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Service 2: Health */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative">
                <img
                  src="/veterinarian-examining-cow-with-stethoscope-health.jpg"
                  alt="Animal Health Services"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-secondary/10 mb-6">
                  <Stethoscope className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Animals' Health & Disease Management</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Comprehensive preventive and curative healthcare services for livestock, ensuring optimal herd health
                  and minimizing production losses.
                </p>
                <ul className="space-y-3">
                  {[
                    "Vaccination & deworming schedules",
                    "Disease diagnosis & treatment protocols",
                    "Biosecurity planning & implementation",
                    "Mastitis, lameness & respiratory disorder management",
                    "Reproductive disorder treatment",
                    "Emergency on-farm veterinary support",
                    "Laboratory testing coordination",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 3: Nutrition */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-accent/10 mb-6">
                  <Leaf className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Animals' Nutrition & Feeding Programs</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Scientific nutrition planning for maximum productivity, combining cost-effectiveness with optimal
                  animal health and performance.
                </p>
                <ul className="space-y-3">
                  {[
                    "Total Mixed Ration (TMR) formulation",
                    "Silage & fodder preservation techniques",
                    "Cost-effective concentrate & mineral mixture plans",
                    "Dry cow & transition feeding programs",
                    "Body condition scoring & monitoring",
                    "Feed efficiency improvement strategies",
                    "Nutritional deficiency diagnosis & correction",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img src="/livestock-feeding-nutrition-mixed-ration-dairy-far.jpg" alt="Animal Nutrition" className="rounded-2xl shadow-lg w-full" />
              </div>
            </div>

            {/* Service 4: Breeding */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative">
                <img src="/artificial-insemination-breeding-livestock-veterin.jpg" alt="Animal Breeding" className="rounded-2xl shadow-lg w-full" />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-primary/10 mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Animals' Breeding & Fertility Services</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Improve genetics and reproductive performance through modern breeding techniques and comprehensive
                  fertility management.
                </p>
                <ul className="space-y-3">
                  {[
                    "Heat detection training & synchronization programs",
                    "Artificial Insemination (AI) services & semen selection",
                    "Pregnancy diagnosis & monitoring",
                    "Infertility troubleshooting & treatment",
                    "Genetic improvement planning",
                    "Calf rearing & heifer development protocols",
                    "Bull management & natural breeding optimization",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 5: New Farm Projects */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-secondary/10 mb-6">
                  <Building2 className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">New Farm Projects & Startup Consultancy</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From idea to first milking – complete guidance for establishing successful dairy and livestock
                  operations with international standards.
                </p>
                <ul className="space-y-3">
                  {[
                    "Land selection & feasibility studies",
                    "Farm design & infrastructure planning",
                    "Project budgeting & financial planning",
                    "Breed selection & herd building strategy",
                    "Equipment & machinery recommendations",
                    "Startup staff recruitment & training",
                    "SOP development & implementation",
                    "Complete project implementation support",
                    "International consultancy services",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="/new-modern-dairy-farm-construction-planning-bluepr.jpg"
                  alt="New Farm Projects"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Service 6: Medicine Supply */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 relative">
                <img
                  src="/veterinary-medicines-vaccines-bottles-supplies-pha.jpg"
                  alt="Veterinary Medicines"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-accent/10 mb-6">
                  <Pill className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">Veterinary Medicines & Supplies</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Authentic, high-quality veterinary products with fast, reliable delivery across Pakistan. We ensure
                  you have access to genuine medicines when you need them.
                </p>
                <ul className="space-y-3">
                  {[
                    "Vaccines for all major livestock diseases",
                    "Antibiotics & anti-inflammatory medicines",
                    "Vitamins, minerals & feed supplements",
                    "Dewormers & anti-parasitic products",
                    "Reproductive hormones & medicines",
                    "Bulk supplies for large farms",
                    "Doorstep delivery across Pakistan",
                    "Genuine products with authenticity guarantee",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary">Specialized Services</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
              Additional Expert Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Syringe className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Emergency Care</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  24/7 emergency veterinary support for critical cases
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <ClipboardList className="h-10 w-10 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Record Keeping</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Digital herd management and performance tracking systems
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <LineChart className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Performance Audits</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive farm performance analysis and benchmarking
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Staff Training</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Professional training programs for farm workers and managers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl p-8 md:p-12 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Need Professional Veterinary Support?</h2>
            <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90 max-w-2xl mx-auto">
              Whether you need ongoing farm management support or help with a specific challenge, our team is ready to
              assist you with expert veterinary consultancy services.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-card text-card-foreground hover:bg-card/90">
                <Link href="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="tel:+923136568351">Call: +92 313 6568351</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
