"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Award, TrendingUp, MapPin, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Students",
    description: "Learning and growing every day",
    color: "text-blue-500",
  },
  {
    icon: BookOpen,
    value: "500+",
    label: "Courses Available",
    description: "Across 20+ technologies",
    color: "text-green-500",
  },
  {
    icon: Award,
    value: "25,000+",
    label: "Certificates Issued",
    description: "Industry-recognized credentials",
    color: "text-purple-500",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Job Placement Rate",
    description: "Within 6 months of completion",
    color: "text-orange-500",
  },
  {
    icon: MapPin,
    value: "28",
    label: "States Covered",
    description: "Across India",
    color: "text-red-500",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support Available",
    description: "Always here to help",
    color: "text-cyan-500",
  },
]

export default function StatsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">CoderZonee by the Numbers</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful developers who have transformed their careers with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardContent className="p-8">
                  <div className={`${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-12 w-12 mx-auto" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                  <p className="text-muted-foreground text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
