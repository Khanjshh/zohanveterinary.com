"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"

export function ProductsCarousel() {
  // Pakistani veterinary medicine products
  const products = [
    {
      name: "Penstrep Injection",
      brand: "ICI Pakistan",
      category: "Antibiotics",
      price: "1,850",
      originalPrice: "2,100",
      image: "/placeholder.svg?height=200&width=200",
      animal: "Cows & Buffaloes",
      rating: 4.8,
    },
    {
      name: "Ivomec Dewormer",
      brand: "Merial",
      category: "Dewormers",
      price: "2,450",
      originalPrice: "2,800",
      image: "/placeholder.svg?height=200&width=200",
      animal: "All Animals",
      rating: 4.9,
    },
    {
      name: "Calcium Boro D3",
      brand: "Sami Pharma",
      category: "Minerals",
      price: "850",
      originalPrice: "950",
      image: "/placeholder.svg?height=200&width=200",
      animal: "Dairy Animals",
      rating: 4.7,
    },
    {
      name: "Mastilep Tubes",
      brand: "Ghazi Brothers",
      category: "Mastitis",
      price: "3,200",
      originalPrice: "3,600",
      image: "/placeholder.svg?height=200&width=200",
      animal: "Dairy Cows",
      rating: 4.8,
    },
    {
      name: "Oxytocin Injection",
      brand: "Star Labs",
      category: "Hormones",
      price: "450",
      originalPrice: "550",
      image: "/placeholder.svg?height=200&width=200",
      animal: "Cows & Buffaloes",
      rating: 4.6,
    },
    {
      name: "AD3E Vitamin",
      brand: "ICI Pakistan",
      category: "Vitamins",
      price: "1,200",
      originalPrice: "1,400",
      image: "/placeholder.svg?height=200&width=200",
      animal: "All Livestock",
      rating: 4.7,
    },
    {
      name: "Albendazole Oral",
      brand: "Sami Pharma",
      category: "Dewormers",
      price: "650",
      originalPrice: "750",
      image: "/placeholder.svg?height=200&width=200",
      animal: "Goats & Sheep",
      rating: 4.5,
    },
    {
      name: "FMD Vaccine",
      brand: "Veterinary RI",
      category: "Vaccines",
      price: "4,500",
      originalPrice: "5,000",
      image: "/placeholder.svg?height=200&width=200",
      animal: "All Ruminants",
      rating: 4.9,
    },
    {
      name: "Liver Tonic Plus",
      brand: "Ghazi Brothers",
      category: "Tonics",
      price: "1,650",
      originalPrice: "1,900",
      image: "/placeholder.svg?height=200&width=200",
      animal: "All Animals",
      rating: 4.6,
    },
    {
      name: "Mineral Mixture",
      brand: "Star Labs",
      category: "Supplements",
      price: "2,200",
      originalPrice: "2,500",
      image: "/placeholder.svg?height=200&width=200",
      animal: "Dairy Animals",
      rating: 4.7,
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Seamless Loop Carousel */}
      <div className="flex animate-scroll-right" style={{ width: "fit-content" }}>
        {[...products, ...products].map((product, index) => (
          <Card
            key={index}
            className="flex-shrink-0 w-40 sm:w-48 md:w-52 lg:w-56 mx-1 md:mx-2 hover:shadow-xl transition-shadow group border-2 hover:border-primary/30"
          >
            <CardContent className="p-3 md:p-4">
              <div className="relative mb-2 md:mb-3">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-28 sm:h-32 md:h-36 object-cover rounded-lg group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-1 left-1 bg-accent text-accent-foreground text-[10px] md:text-xs px-1.5 py-0.5">
                  {product.category}
                </Badge>
                {product.originalPrice && (
                  <Badge className="absolute top-1 right-1 bg-destructive text-destructive-foreground text-[10px] md:text-xs px-1.5 py-0.5">
                    Sale
                  </Badge>
                )}
              </div>
              <div className="text-[10px] md:text-xs text-secondary font-medium mb-1">{product.brand}</div>
              <h3 className="font-semibold text-xs md:text-sm text-foreground mb-1 line-clamp-1">{product.name}</h3>
              <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5">For {product.animal}</p>
              <div className="flex items-center gap-1 mb-2">
                <Star className="h-3 w-3 fill-accent text-accent" />
                <span className="text-[10px] md:text-xs font-medium">{product.rating}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm md:text-base font-bold text-primary">Rs {product.price}</span>
                  {product.originalPrice && (
                    <span className="text-[10px] md:text-xs text-muted-foreground line-through ml-1">
                      Rs {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
              <Button size="sm" className="w-full mt-2 h-7 md:h-8 text-[10px] md:text-xs">
                <ShoppingCart className="h-3 w-3 mr-1" />
                Add
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
