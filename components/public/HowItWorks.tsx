"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, DollarSign, Target, Zap } from "lucide-react"

const steps = [
  {
    icon: BookOpen,
    title: "Learn",
    description: "Master coding skills with our expert-led courses and hands-on projects",
    color: "bg-blue-500",
  },
  {
    icon: Users,
    title: "Refer & Earn",
    description: "Share courses with friends and earn commission on every successful referral",
    color: "bg-green-500",
  },
  {
    icon: DollarSign,
    title: "Teach & Earn",
    description: "Create and sell your own courses to thousands of eager learners",
    color: "bg-purple-500",
  },
]

const pathways = [
  {
    icon: Target,
    title: "Skill Paths",
    description: "Focused learning tracks for specific technologies and frameworks",
    courses: "50+ Courses",
  },
  {
    icon: Zap,
    title: "Career Paths",
    description: "Complete roadmaps from beginner to job-ready professional",
    courses: "100+ Courses",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* How It Works */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Three simple ways to succeed on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8">
                  <div
                    className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Learning Paths */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Structured learning experiences designed for your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{pathway.title}</h3>
                        <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {pathway.courses}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{pathway.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
