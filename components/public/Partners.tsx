"use client"

import { Card, CardContent } from "@/components/ui/card"

const partners = [
  { name: "Stanford University", logo: "/placeholder.svg?height=60&width=120" },
  { name: "MIT", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Harvard", logo: "/placeholder.svg?height=60&width=120" },
  { name: "UC Berkeley", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Carnegie Mellon", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Georgia Tech", logo: "/placeholder.svg?height=60&width=120" },
]

export default function Partners() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Partner Colleges</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Collaborating with top universities to provide world-class education
          </p>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <div className="text-center">
                    <div className="w-20 h-12 bg-muted rounded flex items-center justify-center mb-2">
                      <span className="text-xs font-medium text-muted-foreground">{partner.name.split(" ")[0]}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{partner.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
