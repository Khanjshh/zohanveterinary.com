"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-8 md:py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">150+</div>
            <div className="text-xs md:text-sm opacity-90">Farms Served</div>
          </div>
          <div
            className={`transition-all duration-1000 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">10+</div>
            <div className="text-xs md:text-sm opacity-90">Years Experience</div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">28%</div>
            <div className="text-xs md:text-sm opacity-90">Productivity Increase</div>
          </div>
          <div
            className={`transition-all duration-1000 delay-450 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2">24/7</div>
            <div className="text-xs md:text-sm opacity-90">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
