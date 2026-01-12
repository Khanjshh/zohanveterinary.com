import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Award, Users, Globe, TrendingUp } from "lucide-react"

export const metadata = {
  title: "About Us - Zohan Veterinary Services",
  description:
    "Leading veterinary consultancy firm in Pakistan specializing in dairy farm management, livestock health, breeding, nutrition, and new farm projects. Led by Dr. Inayat Ullah.",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">About Zohan Veterinary Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
              A Trusted Name in Modern Livestock & Dairy Consultancy
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Expert veterinary solutions for sustainable farm success – From Karachi to global markets
            </p>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                <span className="font-semibold text-foreground">Zohan Veterinary Services</span> is a premium veterinary
                consultancy firm headquartered in Karachi, Pakistan. Founded and led by Dr. Inayat Ullah (DVM, RVMP,
                M.Phil, MBA), we provide end-to-end support to dairy farms, large livestock operations, and new farm
                investors across Pakistan and internationally.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With years of practical field experience combined with advanced academic knowledge, our team helps farm
                owners achieve higher productivity, better animal health, cost-effective operations, and long-term
                profitability. We specialize in dairy cows, buffaloes, goats, and other halal livestock species,
                offering comprehensive solutions from nutrition to breeding and farm management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To empower dairy and livestock farmers with scientific knowledge, modern management practices, and
                  reliable veterinary support so they can build sustainable, profitable, and welfare-oriented farming
                  businesses that contribute to food security and rural prosperity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-8">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted and preferred veterinary consultancy partner for progressive livestock
                  farms in Pakistan and emerging markets across the Middle East, Africa, and Asia, recognized for
                  innovation, integrity, and measurable impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-accent/20 text-accent-foreground">Our Advantages</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
              Why Choose Zohan Veterinary Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Highly Qualified Leadership</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Led by Dr. Inayat Ullah with DVM, RVMP, M.Phil, and MBA degrees combining veterinary science with
                  business management expertise.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Deep Specialization</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Expert focus on dairy cows, buffaloes, goats, and other halal livestock species with proven field
                  experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <TrendingUp className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Proven Results</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Track record of improving milk yield by up to 28%, reproductive efficiency, and overall farm
                  economics.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Globe className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Nationwide & International</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  On-farm services across Pakistan plus international remote/online consultancy for global clients.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Complete Solutions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  From nutrition to breeding, health to new farm setup – comprehensive end-to-end veterinary support.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Quality Medicine Supply</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Fast, reliable supply of authentic veterinary medicines, vaccines, and supplies with doorstep
                  delivery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <Badge className="mb-4 bg-primary/20 text-primary">Meet the Founder</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Dr. Inayat Ullah</h2>
                <p className="text-xl font-semibold text-muted-foreground mb-6">DVM, RVMP, M.Phil, MBA</p>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With extensive experience in clinical practice, farm consultancy, and livestock project management,
                    Dr. Inayat Ullah has successfully guided hundreds of farms toward higher productivity and
                    profitability. His career spans over a decade of dedicated service to the livestock industry in
                    Pakistan and beyond.
                  </p>
                  <p>
                    Dr. Inayat's academic credentials include a Doctor of Veterinary Medicine (DVM) degree, Registered
                    Veterinary Medical Practitioner (RVMP) license, Master of Philosophy (M.Phil) in veterinary
                    sciences, and a Master of Business Administration (MBA) degree. This unique combination of
                    veterinary science and business management expertise makes him one of the most respected consultants
                    in the Pakistani livestock industry today.
                  </p>
                  <p>
                    His approach combines rigorous scientific knowledge with practical field experience, ensuring that
                    every recommendation is both evidence-based and implementable. Dr. Inayat specializes in dairy cows,
                    buffaloes, goats, and other halal livestock species, providing comprehensive solutions that address
                    nutrition, health, breeding, and farm management challenges.
                  </p>
                  <p>
                    Beyond his technical expertise, Dr. Inayat is known for his commitment to animal welfare,
                    sustainable farming practices, and empowering farmers with knowledge. He has successfully
                    implemented numerous farm improvement projects, trained farm staff, and helped establish new dairy
                    operations from the ground up.
                  </p>
                  <p className="font-semibold text-foreground">
                    Under his leadership, Zohan Veterinary Services has become synonymous with quality, reliability, and
                    measurable results in the veterinary consultancy sector.
                  </p>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-4">
                    <img
                      src="/professional-pakistani-veterinarian-doctor-in-whit.jpg"
                      alt="Dr. Inayat Ullah"
                      className="rounded-xl object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-lg p-6 shadow-lg max-w-[200px]">
                    <div className="text-3xl font-bold mb-1">150+</div>
                    <div className="text-sm">Farms Successfully Transformed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-secondary/20 text-secondary-foreground">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">What We Stand For</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                Commitment to the highest standards of veterinary care and farm management practices.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Integrity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Honest advice, transparent practices, and building long-term trust with every client.
              </p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                Delivering measurable results that transform farms and improve livelihoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
