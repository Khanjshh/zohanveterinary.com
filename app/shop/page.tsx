import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, Filter, Star, Phone } from "lucide-react"
import { AIChatbot } from "@/components/ai-chatbot"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FAQSection } from "@/components/home/faq-section"

export default function ShopPage() {
  // Pakistani veterinary medicines with realistic products
  const products = [
    {
      name: "Penstrep Injection 100ml",
      brand: "ICI Pakistan",
      category: "Antibiotics",
      animal: "Cows & Buffaloes",
      price: "1,850",
      originalPrice: "2,100",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 124,
    },
    {
      name: "Ivomec Super 50ml",
      brand: "Merial",
      category: "Dewormers",
      animal: "All Animals",
      price: "2,450",
      originalPrice: "2,800",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 89,
    },
    {
      name: "Calcium Boro D3 500ml",
      brand: "Sami Pharma",
      category: "Minerals",
      animal: "Dairy Animals",
      price: "850",
      originalPrice: "950",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 156,
    },
    {
      name: "Mastilep Intramammary Tubes",
      brand: "Ghazi Brothers",
      category: "Mastitis",
      animal: "Dairy Cows",
      price: "3,200",
      originalPrice: "3,600",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 78,
    },
    {
      name: "Oxytocin Injection 10ml",
      brand: "Star Labs",
      category: "Hormones",
      animal: "Cows & Buffaloes",
      price: "450",
      originalPrice: "550",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 203,
    },
    {
      name: "AD3E Forte 100ml",
      brand: "ICI Pakistan",
      category: "Vitamins",
      animal: "All Livestock",
      price: "1,200",
      originalPrice: "1,400",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 167,
    },
    {
      name: "Albomar Oral Suspension",
      brand: "Sami Pharma",
      category: "Dewormers",
      animal: "Goats & Sheep",
      price: "650",
      originalPrice: "750",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 92,
    },
    {
      name: "FMD Vaccine 50 Doses",
      brand: "Veterinary RI",
      category: "Vaccines",
      animal: "All Ruminants",
      price: "4,500",
      originalPrice: "5,000",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 234,
    },
    {
      name: "Livol Plus 1 Liter",
      brand: "Ghazi Brothers",
      category: "Tonics",
      animal: "All Animals",
      price: "1,650",
      originalPrice: "1,900",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 145,
    },
    {
      name: "Mineral Mixture 5kg",
      brand: "Star Labs",
      category: "Supplements",
      animal: "Dairy Animals",
      price: "2,200",
      originalPrice: "2,500",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 189,
    },
    {
      name: "Terramycin LA 100ml",
      brand: "Pfizer",
      category: "Antibiotics",
      animal: "All Livestock",
      price: "2,800",
      originalPrice: "3,200",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.8,
      reviews: 112,
    },
    {
      name: "Buscopan 50ml",
      brand: "Boehringer",
      category: "Digestive",
      animal: "All Animals",
      price: "1,450",
      originalPrice: "1,650",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.6,
      reviews: 98,
    },
    {
      name: "Dexamethasone 50ml",
      brand: "ICI Pakistan",
      category: "Anti-inflammatory",
      animal: "All Livestock",
      price: "750",
      originalPrice: "850",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.5,
      reviews: 176,
    },
    {
      name: "Wormex Bolus (10 pcs)",
      brand: "Sami Pharma",
      category: "Dewormers",
      animal: "Cows & Buffaloes",
      price: "580",
      originalPrice: "680",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.4,
      reviews: 134,
    },
    {
      name: "Iron Dextran 100ml",
      brand: "Star Labs",
      category: "Minerals",
      animal: "Calves & Piglets",
      price: "950",
      originalPrice: "1,100",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.7,
      reviews: 67,
    },
    {
      name: "PPR Vaccine 50 Doses",
      brand: "Veterinary RI",
      category: "Vaccines",
      animal: "Goats & Sheep",
      price: "2,800",
      originalPrice: "3,200",
      image: "/placeholder.svg?height=300&width=300",
      rating: 4.9,
      reviews: 156,
    },
  ]

  const categories = [
    "All",
    "Antibiotics",
    "Dewormers",
    "Vitamins",
    "Vaccines",
    "Supplements",
    "Digestive",
    "Hormones",
    "Mastitis",
  ]
  const animals = ["All Animals", "Cows & Buffaloes", "Goats & Sheep", "Dairy Animals", "Calves"]

  const shopFaqs = [
    {
      question: "Are all medicines authentic and genuine?",
      answer:
        "Yes! We only supply 100% authentic medicines from trusted Pakistani manufacturers like ICI Pakistan, Sami Pharma, Ghazi Brothers, Star Labs, and international brands like Pfizer, Merial, and Boehringer. All products come with original packaging and batch numbers.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery takes 2-5 business days depending on your location. For Karachi and major cities, we offer same-day or next-day delivery. Remote areas may take 5-7 days. You'll receive tracking information once your order ships.",
    },
    {
      question: "Do you offer Cash on Delivery?",
      answer:
        "Yes! Cash on Delivery (COD) is available for most areas across Pakistan. For orders above Rs 10,000, we may require advance payment. You can also pay via bank transfer or online payment methods.",
    },
    {
      question: "What if I receive damaged or wrong products?",
      answer:
        "Customer satisfaction is our priority. If you receive damaged or wrong products, contact us within 24 hours with photos. We'll arrange free replacement or full refund. Our helpline is available at +92 313 6568351.",
    },
    {
      question: "Do you offer bulk discounts?",
      answer:
        "Yes! We offer special discounts for bulk orders. Orders above Rs 25,000 get 5% discount, above Rs 50,000 get 10% discount. For large farms with regular requirements, we offer customized pricing. Contact us for details.",
    },
    {
      question: "Can I get advice on which medicine to use?",
      answer:
        "Our veterinary team can help you choose the right medicines for your animals. Call us at +92 313 6568351 or use our AI chatbot for instant guidance. For complex cases, we recommend consulting Dr. Inayat Ullah directly.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-3 md:mb-4 bg-secondary text-secondary-foreground text-xs md:text-sm">
              Online Veterinary Store
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance text-foreground">
              Veterinary Medicines & Supplies
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-4 md:mb-8 text-pretty leading-relaxed">
              Authentic Pakistani veterinary medicines for cows, buffaloes, goats, and sheep. Fast delivery across
              Pakistan with Cash on Delivery.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search for medicines..." className="pl-12 h-11 md:h-14 text-sm md:text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-4 md:py-8 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 md:gap-4 mb-3 md:mb-6">
            <Filter className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground" />
            <h2 className="text-sm md:text-lg font-semibold">Filter by Category</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className="flex-shrink-0 text-xs md:text-sm bg-transparent h-8 md:h-9"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2 md:gap-4 mt-4 mb-2 md:mb-4">
            <h2 className="text-sm md:text-lg font-semibold">Filter by Animal</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {animals.map((animal) => (
              <Button
                key={animal}
                variant="outline"
                size="sm"
                className="flex-shrink-0 text-xs md:text-sm bg-transparent h-8 md:h-9"
              >
                {animal}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-4 md:mb-8 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs md:text-base text-muted-foreground">Showing 1-16 of 139 products</p>
            <Badge className="bg-accent text-accent-foreground">Free Delivery on orders above Rs 5,000</Badge>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all hover:-translate-y-1 group border-2 hover:border-primary/30"
              >
                <CardContent className="p-2 md:p-4">
                  <div className="relative mb-2 md:mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-28 sm:h-36 md:h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                    />
                    <Badge className="absolute top-1 md:top-2 left-1 md:left-2 bg-secondary text-secondary-foreground text-[10px] md:text-xs">
                      {product.category}
                    </Badge>
                    {product.originalPrice && (
                      <Badge className="absolute top-1 md:top-2 right-1 md:right-2 bg-destructive text-destructive-foreground text-[10px] md:text-xs">
                        Sale
                      </Badge>
                    )}
                  </div>
                  <div className="text-[10px] md:text-xs text-secondary font-medium mb-0.5">{product.brand}</div>
                  <h3 className="font-semibold text-xs md:text-sm lg:text-base text-foreground mb-0.5 md:mb-1 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-2">For {product.animal}</p>
                  <div className="flex items-center gap-1 mb-1 md:mb-2">
                    <Star className="h-3 w-3 fill-accent text-accent" />
                    <span className="text-[10px] md:text-xs font-medium">{product.rating}</span>
                    <span className="text-[10px] md:text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <div className="flex flex-col gap-1 md:gap-2">
                    <div>
                      <span className="text-sm md:text-lg lg:text-xl font-bold text-primary">Rs {product.price}</span>
                      {product.originalPrice && (
                        <span className="text-[10px] md:text-xs text-muted-foreground line-through ml-1">
                          Rs {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button size="sm" className="w-full h-7 md:h-9 text-[10px] md:text-sm">
                      <ShoppingCart className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            <Button variant="outline" size="sm" className="text-xs md:text-sm bg-transparent">
              Previous
            </Button>
            <Button variant="outline" size="sm" className="text-xs md:text-sm bg-transparent">
              1
            </Button>
            <Button size="sm" className="text-xs md:text-sm">
              2
            </Button>
            <Button variant="outline" size="sm" className="text-xs md:text-sm bg-transparent">
              3
            </Button>
            <Button variant="outline" size="sm" className="text-xs md:text-sm bg-transparent">
              Next
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection title="Shop FAQs" subtitle="Common questions about ordering medicines" faqs={shopFaqs} />

      {/* Call to Action */}
      <section className="py-8 md:py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">Need Help Choosing Medicines?</h2>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-8 opacity-90">
            Our veterinary experts can guide you to the right products for your animals
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-card text-card-foreground hover:bg-card/90 text-sm md:text-base">
              <a href="tel:+923136568351">
                <Phone className="h-4 w-4 mr-2" />
                Call: +92 313 6568351
              </a>
            </Button>
            <Button asChild size="lg" className="bg-[#25D366] text-white hover:bg-[#128C7E] text-sm md:text-base">
              <a href="https://wa.me/923136568351" target="_blank" rel="noopener noreferrer">
                WhatsApp Order
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <AIChatbot />
    </div>
  )
}
