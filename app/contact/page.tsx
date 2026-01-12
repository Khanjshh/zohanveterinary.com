"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    alert("Thank you for your inquiry! We will get back to you within 24 hours.")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-accent text-accent-foreground">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">Get In Touch With Us</h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              We're here to help your farm succeed. Contact us today for consultation, farm visit, or medicine
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <a
                  href="tel:+923136568351"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  +92 313 6568351
                </a>
                <a
                  href="tel:+923016568351"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                >
                  +92 301 6568351
                </a>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:info@zohanvet.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@zohanvet.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Address</h3>
                <p className="text-sm text-muted-foreground">Ramzan Mandi, Superhighway, Karachi, Pakistan</p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Working Hours</h3>
                <p className="text-sm text-muted-foreground">Mon-Sat: 09:00 AM - 06:00 PM</p>
                <p className="text-xs text-muted-foreground mt-1">(Sunday Closed)</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary">Send Us Your Query</Badge>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Get Free Consultation</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fill the form below and our team will get back to you within 24 hours. Whether you need help improving
                milk production, solving fertility issues, starting a new farm, or sourcing quality medicines – we're
                just one call away.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 3XX XXXXXXX"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g., Farm Consultation, Medicine Order, etc."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your farm, animals, and what help you need..."
                    rows={6}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <Badge className="mb-4 bg-secondary/20 text-secondary-foreground">Our Location</Badge>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Visit Our Office</h3>

              {/* Map Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl mb-6 flex items-center justify-center border-2">
                <div className="text-center p-8">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Ramzan Mandi, Superhighway
                    <br />
                    Karachi, Pakistan
                  </p>
                  <Button variant="outline" className="mt-4 bg-transparent">
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>

              {/* Quick Contact */}
              <Card className="border-2 bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Need Immediate Assistance?</h4>
                  <p className="text-sm mb-4 opacity-90 leading-relaxed">
                    For urgent veterinary support or emergency consultations, call us directly:
                  </p>
                  <div className="space-y-2">
                    <Button
                      asChild
                      variant="secondary"
                      className="w-full bg-card text-card-foreground hover:bg-card/90"
                    >
                      <a href="tel:+923136568351">
                        <Phone className="mr-2 h-4 w-4" />
                        Call: +92 313 6568351
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="secondary"
                      className="w-full bg-card text-card-foreground hover:bg-card/90"
                    >
                      <a href="https://wa.me/923136568351" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-4 w-4" />
                        WhatsApp: +92 313 6568351
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="mt-6 border-2">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-foreground mb-3">Service Areas</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We provide on-farm veterinary services across all provinces of Pakistan including Sindh, Punjab,
                    KPK, Balochistan, and Azad Kashmir. International remote consultancy also available for clients in
                    the Middle East, Africa, and Asia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
