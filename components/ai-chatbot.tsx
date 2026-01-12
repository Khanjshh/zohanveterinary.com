"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Phone, Bot, User } from "lucide-react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const faqResponses: Record<string, string> = {
  hello:
    "Hello! Welcome to Zohan Veterinary Services. I'm your AI assistant. How can I help you today? You can ask me about our services, medicines, farm consultancy, or any veterinary questions.",
  hi: "Hi there! Welcome to Zohan Veterinary Services. How can I assist you today?",
  services:
    "We offer comprehensive veterinary services including:\n\n1. **Dairy Farm Consultancy** - Complete farm management\n2. **Animal Health** - Disease diagnosis & treatment\n3. **Nutrition Planning** - TMR formulation & feeding programs\n4. **Breeding Services** - AI, heat detection, fertility management\n5. **New Farm Projects** - From planning to implementation\n6. **Medicine Supply** - Authentic veterinary medicines\n\nWhich service would you like to know more about?",
  medicine:
    "We supply authentic veterinary medicines for:\n\n- **Cows & Buffaloes**: Antibiotics, dewormers, vitamins, mastitis treatments\n- **Goats & Sheep**: Oral dewormers, vaccines, supplements\n- **All Livestock**: Minerals, growth promoters, liver tonics\n\nAll medicines are from trusted Pakistani brands like Sami Pharma, ICI Pakistan, and Ghazi Brothers. Visit our Shop page or call +92 313 6568351 for orders.",
  price:
    "Our medicine prices range from Rs 500 to Rs 5,000 depending on the product. For bulk orders, we offer special discounts. Contact us for a complete price list or visit our Shop page.",
  delivery:
    "Yes! We deliver across all of Pakistan including Sindh, Punjab, KPK, Balochistan, and Azad Kashmir. Delivery typically takes 2-5 business days depending on location. Cash on Delivery is available.",
  consultation:
    "Dr. Inayat Ullah (DVM, RVMP, M.Phil, MBA) provides expert consultations for:\n\n- Farm visits across Pakistan\n- Online/video consultations\n- Phone consultations\n- Emergency support\n\nCall +92 313 6568351 to schedule a consultation.",
  cow: "For cows, we provide:\n\n- **Health**: Mastitis treatment, FMD vaccines, deworming\n- **Nutrition**: TMR formulation, mineral supplements\n- **Breeding**: AI services, pregnancy diagnosis\n- **Medicines**: Antibiotics, calcium, vitamins\n\nWhat specific help do you need for your cows?",
  buffalo:
    "For buffaloes (bhans), we offer:\n\n- **Health Management**: Disease prevention & treatment\n- **Nutrition**: Customized feeding programs\n- **Breeding**: Heat detection, AI services\n- **Milk Production**: Strategies to increase yield\n\nBuffaloes are our specialty! How can we help?",
  goat: "For goats, we provide:\n\n- **Dewormers**: Oral & injectable options\n- **Vaccines**: PPR, Enterotoxemia, FMD\n- **Nutrition**: Feed supplements & minerals\n- **Breeding**: Buck selection, fertility management\n\nWhat help do you need for your goats?",
  sheep:
    "For sheep, we offer:\n\n- **Health Care**: Vaccination schedules, disease management\n- **Nutrition**: Grazing & supplemental feeding plans\n- **Breeding**: Ram selection, lambing support\n- **Medicines**: Dewormers, antibiotics, vitamins\n\nHow can we assist with your sheep?",
  "new farm":
    "Starting a new farm? We provide complete support:\n\n1. **Feasibility Study** - Location, investment analysis\n2. **Farm Design** - Shed layout, infrastructure\n3. **Breed Selection** - Best breeds for your goals\n4. **Equipment** - Machinery recommendations\n5. **Staff Training** - SOPs, management practices\n6. **Implementation** - Start to first milking\n\nCall +92 313 6568351 to discuss your project!",
  contact:
    "You can reach us through:\n\n📞 **Phone**: +92 313 6568351 / +92 301 6568351\n📧 **Email**: info@zohanvet.com\n📍 **Address**: Ramzan Mandi, Superhighway, Karachi\n💬 **WhatsApp**: +92 313 6568351\n\n**Hours**: Mon-Sat 9AM-6PM",
  location:
    "We are located at:\n\n📍 Ramzan Mandi, Superhighway, Karachi, Pakistan\n\nWe provide on-farm services across all provinces of Pakistan and international remote consultancy.",
  doctor:
    "Dr. Inayat Ullah is our founder and lead consultant:\n\n🎓 **Qualifications**: DVM, RVMP, M.Phil, MBA\n📞 **Contact**: +92 313 6568351\n\nWith over a decade of experience in veterinary practice and farm consultancy, Dr. Inayat has helped 150+ farms improve productivity.",
  mastitis:
    "Mastitis is a common issue in dairy cows. We provide:\n\n- **Diagnosis**: CMT testing, culture sensitivity\n- **Treatment**: Intramammary tubes, antibiotics\n- **Prevention**: Milking hygiene protocols, dry cow therapy\n- **Medicines**: Cepravin, Mastijet, Spectramast\n\nFor immediate help, call +92 313 6568351",
  vaccine:
    "We supply all major livestock vaccines:\n\n- **FMD Vaccine** - Foot & Mouth Disease\n- **HS Vaccine** - Hemorrhagic Septicemia\n- **BQ Vaccine** - Black Quarter\n- **PPR Vaccine** - Peste des Petits Ruminants\n- **Brucella Vaccine** - For breeding animals\n\nAll vaccines are genuine and properly cold-chain maintained.",
  feeding:
    "Proper feeding is crucial for productivity. We help with:\n\n- **TMR Formulation** - Total Mixed Ration\n- **Silage Making** - Corn, maize, fodder\n- **Concentrate Mix** - Cost-effective formulas\n- **Mineral Supplementation** - Ca, P, trace minerals\n\nWant a customized feeding plan? Contact us!",
  breeding:
    "Our breeding services include:\n\n- **Heat Detection** - Training & synchronization\n- **Artificial Insemination** - Proven semen\n- **Pregnancy Diagnosis** - Rectal & ultrasound\n- **Infertility Treatment** - Hormonal protocols\n- **Genetic Selection** - Bull/semen selection\n\nImprove your herd genetics with us!",
}

function findBestResponse(input: string): string {
  const lowercaseInput = input.toLowerCase()

  for (const [key, response] of Object.entries(faqResponses)) {
    if (lowercaseInput.includes(key)) {
      return response
    }
  }

  // Default response when no match found
  return "I appreciate your question! However, I'm not able to provide a specific answer to that. For detailed assistance, please:\n\n📞 **Call Dr. Inayat Ullah**: +92 313 6568351\n💬 **WhatsApp**: +92 313 6568351\n📧 **Email**: info@zohanvet.com\n\nOur team will be happy to help you with any veterinary questions!"
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Assalam-o-Alaikum! Welcome to Zohan Veterinary Services. I'm your AI assistant. How can I help you today?\n\nYou can ask me about:\n- Our Services\n- Medicines & Prices\n- Cow, Buffalo, Goat, Sheep care\n- New Farm Projects\n- Contact Information",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const response = findBestResponse(input)
      const assistantMessage: Message = { role: "assistant", content: response }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000)
  }

  const quickQuestions = ["Services", "Medicine", "Contact", "New Farm", "Cow Care", "Goat Care"]

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-24 right-4 z-50 h-14 w-14 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:bg-secondary/90 transition-all flex items-center justify-center animate-pulse-glow ${isOpen ? "hidden" : ""}`}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 z-50 w-[calc(100%-2rem)] max-w-[380px] h-[500px] flex flex-col shadow-2xl animate-slide-in-right">
          <CardHeader className="bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-t-lg py-3 px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">Zohan Vet Assistant</CardTitle>
                  <p className="text-xs opacity-80">Online - Ask me anything!</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-3 space-y-3 bg-muted/30">
            {messages.map((message, index) => (
              <div key={index} className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "assistant" && (
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm whitespace-pre-line ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-card border rounded-bl-sm"
                  }`}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <div className="h-7 w-7 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <User className="h-4 w-4 text-secondary" />
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 justify-start">
                <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-card border rounded-2xl rounded-bl-sm px-3 py-2 text-sm">
                  <span className="flex gap-1">
                    <span className="animate-bounce">.</span>
                    <span className="animate-bounce delay-150">.</span>
                    <span className="animate-bounce delay-300">.</span>
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          {/* Quick Questions */}
          <div className="px-3 py-2 border-t bg-card flex gap-2 overflow-x-auto scrollbar-hide">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => {
                  setInput(q)
                  setTimeout(() => handleSend(), 100)
                }}
                className="flex-shrink-0 text-xs px-3 py-1.5 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t bg-card rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your question..."
                className="flex-1 text-sm"
              />
              <Button onClick={handleSend} size="icon" className="h-9 w-9">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Phone className="h-3 w-3" />
              <span>Need human help? Call +92 313 6568351</span>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
