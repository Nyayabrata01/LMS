"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Complete React Development Bootcamp",
    instructor: "Priya Sharma",
    duration: "12 weeks",
    rating: 4.9,
    students: 2340,
    price: 2999,
    originalPrice: 5999,
    category: "Frontend",
    image: "/placeholder.svg?height=200&width=300",
    description: "Master React, Redux, and modern JavaScript",
    level: "Beginner to Advanced",
  },
  {
    id: 2,
    title: "Python for Data Science & AI",
    instructor: "Dr. Rajesh Kumar",
    duration: "10 weeks",
    rating: 4.8,
    students: 1890,
    price: 3999,
    originalPrice: 7999,
    category: "Data Science",
    image: "/placeholder.svg?height=200&width=300",
    description: "Learn Python, pandas, NumPy, and machine learning",
    level: "Intermediate",
  },
  {
    id: 3,
    title: "Full Stack JavaScript Mastery",
    instructor: "Arjun Patel",
    duration: "16 weeks",
    rating: 4.9,
    students: 3200,
    price: 4999,
    originalPrice: 9999,
    category: "Full Stack",
    image: "/placeholder.svg?height=200&width=300",
    description: "Node.js, Express, MongoDB, and React",
    level: "Advanced",
  },
]

export default function FeaturedCourses() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked courses from our top instructors to accelerate your coding journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <Card
              key={course.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" variant="secondary">
                      <Play className="h-4 w-4 mr-2" />
                      Preview
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4">{course.category}</Badge>
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    {course.level}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-sm text-muted-foreground">({course.students})</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{course.description}</p>
                <p className="text-sm text-muted-foreground">by {course.instructor}</p>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">₹{course.price.toLocaleString()}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{course.originalPrice.toLocaleString()}
                  </span>
                  <Badge variant="destructive" className="text-xs">
                    {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                  </Badge>
                </div>
                <Link href={`/courses/${course.id}`}>
                  <Button size="sm">Enroll Now</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/courses">
            <Button size="lg" variant="outline">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
