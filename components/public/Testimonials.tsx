"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Full Stack Developer",
    company: "Google",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "CoderZonee transformed my career! The courses are practical, and the referral program helped me earn while learning. I landed my dream job at Google within 6 months.",
  },
  {
    name: "Maria Garcia",
    role: "Data Scientist",
    company: "Netflix",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The Python for Data Science course was exceptional. The hands-on projects and real-world datasets prepared me perfectly for my role at Netflix.",
  },
  {
    name: "David Kim",
    role: "React Developer",
    company: "Airbnb",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "As an instructor on EduCode, I've been able to share my knowledge and earn a substantial income. The platform makes teaching incredibly rewarding.",
  },
  {
    name: "Sarah Wilson",
    role: "Mobile Developer",
    company: "Uber",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    content:
      "The career path guidance was invaluable. EduCode didn't just teach me to code; it showed me how to build a successful tech career.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our students who transformed their careers with EduCode
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
