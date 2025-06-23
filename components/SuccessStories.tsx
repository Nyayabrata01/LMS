"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Briefcase } from "lucide-react"
import Image from "next/image"

const successStories = [
  {
    name: "Rahul Verma",
    role: "Full Stack Developer",
    company: "Flipkart",
    location: "Bangalore",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    salary: "₹18 LPA",
    story:
      "CoderZonee transformed my career completely! From a non-tech background to landing a job at Flipkart in just 8 months. The practical projects and mentorship were game-changers.",
    course: "Full Stack Development",
    timeToJob: "8 months",
  },
  {
    name: "Priya Singh",
    role: "Data Scientist",
    company: "Zomato",
    location: "Gurgaon",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    salary: "₹22 LPA",
    story:
      "The Data Science course at CoderZonee is incredibly comprehensive. The real-world projects and industry connections helped me secure my dream role at Zomato.",
    course: "Data Science & AI",
    timeToJob: "6 months",
  },
  {
    name: "Amit Patel",
    role: "React Developer",
    company: "Paytm",
    location: "Noida",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    salary: "₹15 LPA",
    story:
      "The React bootcamp was exactly what I needed. The instructors are industry experts and the curriculum is always updated with the latest trends.",
    course: "React Development",
    timeToJob: "4 months",
  },
  {
    name: "Sneha Reddy",
    role: "Mobile App Developer",
    company: "Swiggy",
    location: "Hyderabad",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    salary: "₹16 LPA",
    story:
      "CoderZonee's mobile development course gave me the skills and confidence to build production-ready apps. Now I'm building apps used by millions!",
    course: "Mobile Development",
    timeToJob: "5 months",
  },
]

export default function SuccessStories() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from real students who transformed their careers with CoderZonee
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={story.name}
                    width={80}
                    height={80}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {story.timeToJob}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Briefcase className="h-4 w-4" />
                      <span>
                        {story.role} at {story.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{story.location}</span>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {story.salary}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Story */}
                <p className="text-muted-foreground mb-4 leading-relaxed italic">"{story.story}"</p>

                {/* Course */}
                <div className="flex items-center justify-between">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{story.course}</Badge>
                  <span className="text-sm text-muted-foreground">Hired in {story.timeToJob}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
