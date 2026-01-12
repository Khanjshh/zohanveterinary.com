"use client"

import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs?: Array<{ question: string; answer: string }>
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our veterinary services",
  faqs,
}: FAQSectionProps) {
  const defaultFaqs = [
    {
      question: "What services does Zohan Veterinary Services offer?",
      answer:
        "We offer comprehensive veterinary services including: Dairy Farm Consultancy & Management, Animal Health & Disease Management, Nutrition Planning & TMR Formulation, Breeding Services & AI, New Farm Project Setup, and Veterinary Medicine Supply. We specialize in cows, buffaloes, goats, and sheep.",
    },
    {
      question: "Do you deliver medicines across Pakistan?",
      answer:
        "Yes! We deliver authentic veterinary medicines to all provinces of Pakistan including Sindh, Punjab, KPK, Balochistan, and Azad Kashmir. Delivery typically takes 2-5 business days. Cash on Delivery is available for most areas.",
    },
    {
      question: "How can I schedule a farm consultation?",
      answer:
        "You can schedule a consultation by calling us at +92 313 6568351, sending a WhatsApp message, or filling out the contact form on our website. We offer on-farm visits across Pakistan and online/video consultations for remote clients.",
    },
    {
      question: "What are your working hours?",
      answer:
        "Our regular office hours are Monday to Saturday, 9:00 AM to 6:00 PM (PST). For emergencies, we provide 24/7 phone support. You can reach us anytime at +92 313 6568351.",
    },
    {
      question: "Do you provide services for goats and sheep?",
      answer:
        "We provide complete veterinary services for goats and sheep including vaccination schedules, deworming programs, nutrition planning, breeding management, and disease treatment. Our team has extensive experience with small ruminants.",
    },
    {
      question: "What qualifications does Dr. Inayat Ullah have?",
      answer:
        "Dr. Inayat Ullah holds DVM (Doctor of Veterinary Medicine), RVMP (Registered Veterinary Medical Practitioner), M.Phil in Veterinary Sciences, and MBA degrees. With over 10 years of experience, he has successfully helped 150+ farms improve productivity.",
    },
    {
      question: "Can you help me start a new dairy farm?",
      answer:
        "Yes! We provide complete new farm project consultancy including feasibility studies, farm design, breed selection, equipment recommendations, staff training, SOP development, and implementation support. We guide you from planning to first milking.",
    },
    {
      question: "Are your medicines authentic and genuine?",
      answer:
        "100% yes! We only supply authentic, genuine veterinary medicines from trusted Pakistani manufacturers like ICI Pakistan, Sami Pharma, Ghazi Brothers, and international brands. All products are properly stored and cold-chain maintained for vaccines.",
    },
  ]

  const displayFaqs = faqs || defaultFaqs

  return (
    <section className="py-8 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <Badge className="mb-3 md:mb-4 bg-secondary/20 text-secondary text-xs md:text-sm">FAQ</Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-balance text-foreground">
            {title}
          </h2>
          <p className="text-sm md:text-base text-muted-foreground text-pretty leading-relaxed">{subtitle}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {displayFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-4 md:px-6">
                <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions CTA */}
          <div className="mt-8 md:mt-12 text-center p-6 md:p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl">
            <MessageCircle className="h-10 w-10 md:h-12 md:w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-foreground">Still Have Questions?</h3>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              Our AI assistant is available 24/7, or speak directly with Dr. Inayat Ullah
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="bg-primary text-primary-foreground">
                <a href="https://wa.me/923136568351" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Chat
                </a>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <a href="tel:+923136568351">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: +92 313 6568351
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
