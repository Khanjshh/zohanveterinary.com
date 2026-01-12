import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog - Zohan Veterinary Services",
  description:
    "Expert insights, tips, and guides on dairy farm management, livestock health, nutrition, breeding, and veterinary best practices from Dr. Inayat Ullah.",
}

const blogPosts = [
  {
    id: 1,
    title: "How to Control Mastitis in High-Yielding Dairy Cows",
    excerpt:
      "Mastitis is one of the most costly diseases affecting dairy farms. Learn proven strategies for prevention, early detection, and effective treatment to protect your herd and maintain milk quality.",
    category: "Animal Health",
    date: "2026-01-10",
    readTime: "8 min read",
    image: "/veterinarian-examining-dairy-cow-udder-mastitis-ch.jpg",
  },
  {
    id: 2,
    title: "Best Feeding Practices for Buffaloes During Summer",
    excerpt:
      "Summer heat stress significantly impacts buffalo milk production. Discover nutrition strategies, feeding schedules, and dietary adjustments to maintain optimal performance during hot months.",
    category: "Nutrition",
    date: "2026-01-08",
    readTime: "10 min read",
    image: "/buffalo-farm-feeding-nutrition-summer-heat.jpg",
  },
  {
    id: 3,
    title: "Step-by-Step Guide to Start a Modern Dairy Farm in Pakistan",
    excerpt:
      "Thinking of starting a dairy farm? This comprehensive guide covers everything from land selection and financing to herd building and achieving profitability in the Pakistani market.",
    category: "Farm Management",
    date: "2026-01-05",
    readTime: "15 min read",
    image: "/new-modern-dairy-farm-construction-planning-pakist.jpg",
  },
  {
    id: 4,
    title: "Importance of Mineral Mixture in Livestock Nutrition",
    excerpt:
      "Mineral deficiencies often go unnoticed but significantly impact milk production, fertility, and overall health. Learn which minerals are critical and how to supplement effectively.",
    category: "Nutrition",
    date: "2026-01-03",
    readTime: "7 min read",
    image: "/livestock-mineral-supplements-nutrition-vitamins.jpg",
  },
  {
    id: 5,
    title: "Heat Stress Management – Practical Tips for Farmers",
    excerpt:
      "Heat stress reduces milk yield, affects fertility, and compromises animal welfare. Explore practical, cost-effective solutions to help your livestock cope with rising temperatures.",
    category: "Farm Management",
    date: "2025-12-28",
    readTime: "9 min read",
    image: "/dairy-cows-heat-stress-cooling-system-shade.jpg",
  },
  {
    id: 6,
    title: "Artificial Insemination vs Natural Breeding – What Works Best?",
    excerpt:
      "Choosing the right breeding method impacts genetics, costs, and farm efficiency. Compare AI and natural breeding to make informed decisions for your herd improvement program.",
    category: "Breeding",
    date: "2025-12-25",
    readTime: "11 min read",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    title: "Common Reproductive Disorders in Dairy Cattle and Their Solutions",
    excerpt:
      "Reproductive problems cost dairy farms millions annually. Identify common fertility issues, understand their causes, and learn evidence-based treatment protocols.",
    category: "Breeding",
    date: "2025-12-20",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    title: "Building a Profitable Goat Farm: A Complete Business Guide",
    excerpt:
      "Goat farming offers excellent returns with lower investment. Learn breed selection, housing requirements, feeding strategies, and marketing tips for successful goat farming in Pakistan.",
    category: "Farm Management",
    date: "2025-12-15",
    readTime: "14 min read",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 9,
    title: "Vaccination Schedule for Dairy Cattle in Pakistan",
    excerpt:
      "Preventive vaccination protects your herd from costly diseases. Get a complete vaccination protocol tailored to Pakistani livestock conditions with timing and dosage guidelines.",
    category: "Animal Health",
    date: "2025-12-10",
    readTime: "6 min read",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">Knowledge Center</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">
              Veterinary Insights & Farm Management Tips
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Expert advice on dairy farming, livestock health, nutrition, breeding, and veterinary best practices from
              Dr. Inayat Ullah and the Zohan Veterinary Services team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Badge className="mb-6 bg-primary/20 text-primary">Featured Article</Badge>
            <Card className="border-2 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="mb-3 w-fit bg-secondary/20 text-secondary-foreground">
                    {blogPosts[0].category}
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground text-balance">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(blogPosts[0].date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit bg-primary text-primary-foreground hover:bg-primary/90">
                    Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Latest Articles</h2>
              <div className="flex gap-2">
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  All
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Nutrition
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Health
                </Badge>
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Breeding
                </Badge>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-accent/20 text-accent-foreground text-xs">{post.category}</Badge>
                    <h3 className="text-lg font-semibold mb-3 text-foreground text-balance line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                      Read More <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground border-0">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Get Expert Tips Delivered to Your Inbox
              </h2>
              <p className="text-lg mb-8 text-pretty leading-relaxed opacity-90 max-w-2xl mx-auto">
                Subscribe to our newsletter for weekly veterinary insights, farm management tips, and exclusive content
                from Dr. Inayat Ullah.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground bg-card"
                />
                <Button size="lg" className="bg-card text-card-foreground hover:bg-card/90 whitespace-nowrap">
                  Subscribe Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
