import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 md:h-6 md:w-6"
                >
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5Z" />
                  <path d="M12 12c-1.5 0-2-1-2-2s.5-2 2-2 2 1 2 2-.5 2-2 2Z" />
                </svg>
              </div>
              <div>
                <div className="font-bold text-sm md:text-base text-foreground">Zohan Veterinary</div>
                <div className="text-xs text-muted-foreground">Services</div>
              </div>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
              A Trusted Veterinary Consultancy Firm specializing in dairy farms, livestock health, and farm management
              services.
            </p>
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/923136568351"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-3 py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-[#128C7E] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm md:text-base text-foreground mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors">
                  Shop Medicines
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-muted-foreground hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm md:text-base text-foreground mb-3 md:mb-4">Our Services</h3>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>Animals' Nutrition</li>
              <li>Animals' Health</li>
              <li>Animals' Breeding</li>
              <li>New Farm Projects</li>
              <li>Medicine Supply</li>
              <li>Farm Consultancy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm md:text-base text-foreground mb-3 md:mb-4">Contact Us</h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Ramzan Mandi, Superhighway, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <a href="tel:+923136568351" className="hover:text-primary block">
                    +92 313 6568351
                  </a>
                  <a href="tel:+923016568351" className="hover:text-primary block">
                    +92 301 6568351
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@zohanvet.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@zohanvet.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Mon-Sat: 9AM-6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t text-center text-xs md:text-sm text-muted-foreground">
          <p>© 2026 Zohan Veterinary Services. All Rights Reserved.</p>
          <p className="mt-2">
            <Link href="/" className="hover:text-primary transition-colors">
              www.zohanvet.com
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
