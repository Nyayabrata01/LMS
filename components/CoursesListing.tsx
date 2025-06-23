"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Clock, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Complete React Development Bootcamp",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    rating: 4.9,
    students: 2340,
    price: 99,
    originalPrice: 199,
    category: "Frontend",
    level: "Beginner",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Python for Data Science & AI",
    instructor: "Dr. Michael Chen",
    duration: "10 weeks",
    rating: 4.8,
    students: 1890,
    price: 129,
    originalPrice: 249,
    category: "Data Science",
    level: "Intermediate",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Full Stack JavaScript Mastery",
    instructor: "Alex Rodriguez",
    duration: "16 weeks",
    rating: 4.9,
    students: 3200,
    price: 149,
    originalPrice: 299,
    category: "Full Stack",
    level: "Advanced",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    instructor: "Emma Wilson",
    duration: "14 weeks",
    rating: 4.7,
    students: 1560,
    price: 119,
    originalPrice: 239,
    category: "Mobile",
    level: "Intermediate",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "DevOps and Cloud Computing",
    instructor: "James Park",
    duration: "8 weeks",
    rating: 4.8,
    students: 980,
    price: 89,
    originalPrice: 179,
    category: "DevOps",
    level: "Advanced",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    instructor: "Lisa Thompson",
    duration: "6 weeks",
    rating: 4.6,
    students: 2100,
    price: 79,
    originalPrice: 159,
    category: "Design",
    level: "Beginner",
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile", "Data Science", "DevOps", "Design"]
const levels = ["Beginner", "Intermediate", "Advanced"]
const priceRanges = [
  { label: "Free", min: 0, max: 0 },
  { label: "$1 - $50", min: 1, max: 50 },
  { label: "$51 - $100", min: 51, max: 100 },
  { label: "$101 - $200", min: 101, max: 200 },
  { label: "$200+", min: 200, max: Number.POSITIVE_INFINITY },
]

export default function CoursesListing() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([])

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory
    const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level)
    const matchesPrice =
      selectedPriceRange.length === 0 ||
      selectedPriceRange.some((range) => {
        const priceRange = priceRanges.find((p) => p.label === range)
        return priceRange && course.price >= priceRange.min && course.price <= priceRange.max
      })

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice
  })

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">All Courses</h1>
        <p className="text-xl text-muted-foreground">Discover {courses.length} courses to advance your coding skills</p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Search courses, instructors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 text-lg"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Filters */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                <h3 className="font-semibold">Filters</h3>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Category Filter */}
              <div>
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div>
                <h4 className="font-medium mb-3">Level</h4>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <Checkbox
                        id={level}
                        checked={selectedLevels.includes(level)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedLevels([...selectedLevels, level])
                          } else {
                            setSelectedLevels(selectedLevels.filter((l) => l !== level))
                          }
                        }}
                      />
                      <label htmlFor={level} className="text-sm">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-medium mb-3">Price</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <div key={range.label} className="flex items-center space-x-2">
                      <Checkbox
                        id={range.label}
                        checked={selectedPriceRange.includes(range.label)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedPriceRange([...selectedPriceRange, range.label])
                          } else {
                            setSelectedPriceRange(selectedPriceRange.filter((p) => p !== range.label))
                          }
                        }}
                      />
                      <label htmlFor={range.label} className="text-sm">
                        {range.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Courses Grid */}
        <div className="lg:col-span-3">
          <div className="flex justify-between items-center mb-6">
            <p className="text-muted-foreground">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
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
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">${course.price}</span>
                    <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                  </div>
                  <Link href={`/courses/${course.id}`}>
                    <Button size="sm">View Course</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No courses found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                  setSelectedLevels([])
                  setSelectedPriceRange([])
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
