"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, Users, Play, CheckCircle, Download, Globe, Award, Infinity } from "lucide-react"
import Image from "next/image"

const courseData = {
  id: 1,
  title: "Complete React Development Bootcamp",
  instructor: "Sarah Johnson",
  duration: "12 weeks",
  rating: 4.9,
  reviews: 2340,
  students: 15420,
  price: 99,
  originalPrice: 199,
  category: "Frontend Development",
  level: "Beginner to Advanced",
  language: "English",
  image: "/placeholder.svg?height=400&width=600",
  videoPreview: "/placeholder.svg?height=300&width=500",
  description:
    "Master React development from scratch with this comprehensive bootcamp. Build real-world projects, learn modern React patterns, and become job-ready.",
  longDescription:
    "This comprehensive React development bootcamp is designed to take you from a complete beginner to a professional React developer. You'll learn everything from basic JavaScript concepts to advanced React patterns, state management with Redux, and modern development tools.",
  learningOutcomes: [
    "Build modern React applications from scratch",
    "Master React Hooks and functional components",
    "Implement state management with Redux and Context API",
    "Create responsive UIs with CSS-in-JS and styled-components",
    "Deploy applications to production environments",
    "Write clean, maintainable, and testable code",
  ],
  curriculum: [
    {
      title: "JavaScript Fundamentals",
      lessons: 12,
      duration: "3 hours",
      topics: ["ES6+ Features", "Async/Await", "Modules", "DOM Manipulation"],
    },
    {
      title: "React Basics",
      lessons: 15,
      duration: "4 hours",
      topics: ["Components", "JSX", "Props", "State"],
    },
    {
      title: "Advanced React",
      lessons: 18,
      duration: "5 hours",
      topics: ["Hooks", "Context API", "Performance Optimization", "Testing"],
    },
    {
      title: "State Management",
      lessons: 10,
      duration: "3 hours",
      topics: ["Redux", "Redux Toolkit", "Middleware", "DevTools"],
    },
    {
      title: "Real-World Projects",
      lessons: 8,
      duration: "6 hours",
      topics: ["E-commerce App", "Social Media Dashboard", "Task Manager", "Portfolio Website"],
    },
  ],
  instructorBio: {
    name: "Sarah Johnson",
    title: "Senior React Developer at Meta",
    experience: "8+ years",
    students: 50000,
    courses: 12,
    rating: 4.9,
    bio: "Sarah is a senior React developer at Meta with over 8 years of experience building large-scale applications. She's passionate about teaching and has helped thousands of students land their dream jobs in tech.",
    image: "/placeholder.svg?height=120&width=120",
  },
  features: [
    { icon: Infinity, text: "Lifetime access" },
    { icon: Globe, text: "Access on mobile and desktop" },
    { icon: Download, text: "Downloadable resources" },
    { icon: Award, text: "Certificate of completion" },
  ],
  reviews: [
    {
      name: "Alex Chen",
      rating: 5,
      date: "2 weeks ago",
      comment:
        "Excellent course! Sarah explains complex concepts in a very understandable way. The projects are practical and helped me build a strong portfolio.",
    },
    {
      name: "Maria Rodriguez",
      rating: 5,
      date: "1 month ago",
      comment:
        "This course changed my career. I went from knowing nothing about React to landing a frontend developer job in just 4 months!",
    },
    {
      name: "David Kim",
      rating: 4,
      date: "2 months ago",
      comment:
        "Great content and well-structured curriculum. The only minor issue is that some videos could be a bit shorter, but overall highly recommended.",
    },
  ],
}

export default function CourseDetail({ courseId }: { courseId: string }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Course Header */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge>{courseData.category}</Badge>
              <Badge variant="outline">{courseData.level}</Badge>
            </div>
            <h1 className="text-4xl font-bold mb-4">{courseData.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{courseData.description}</p>

            <div className="flex flex-wrap items-center gap-6 mb-6">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{courseData.rating}</span>
                <span className="text-muted-foreground">({courseData.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-5 w-5" />
                <span>{courseData.students.toLocaleString()} students</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-5 w-5" />
                <span>{courseData.duration}</span>
              </div>
            </div>

            <p className="text-muted-foreground">
              Created by <span className="font-medium text-foreground">{courseData.instructor}</span>
            </p>
          </div>

          {/* Video Preview */}
          <Card>
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={courseData.videoPreview || "/placeholder.svg"}
                  alt="Course preview"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-t-lg">
                  <Button size="lg" className="rounded-full">
                    <Play className="h-6 w-6 mr-2" />
                    Preview Course
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Course Content Tabs */}
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>About This Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">{courseData.longDescription}</p>

                  <h4 className="font-semibold mb-4">What You'll Learn</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {courseData.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-4">
              {courseData.curriculum.map((module, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <div className="text-sm text-muted-foreground">
                        {module.lessons} lessons • {module.duration}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <Badge key={topicIndex} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="instructor">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <Image
                      src={courseData.instructorBio.image || "/placeholder.svg"}
                      alt={courseData.instructorBio.name}
                      width={120}
                      height={120}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{courseData.instructorBio.name}</h3>
                      <p className="text-lg text-primary mb-4">{courseData.instructorBio.title}</p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{courseData.instructorBio.rating}</div>
                          <div className="text-sm text-muted-foreground">Rating</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{courseData.instructorBio.students.toLocaleString()}</div>
                          <div className="text-sm text-muted-foreground">Students</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{courseData.instructorBio.courses}</div>
                          <div className="text-sm text-muted-foreground">Courses</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{courseData.instructorBio.experience}</div>
                          <div className="text-sm text-muted-foreground">Experience</div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{courseData.instructorBio.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              {courseData.reviews.map((review, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-semibold">{review.name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-3xl font-bold">${courseData.price}</span>
                  <span className="text-lg text-muted-foreground line-through">${courseData.originalPrice}</span>
                </div>
                <Badge variant="destructive" className="mb-4">
                  {Math.round((1 - courseData.price / courseData.originalPrice) * 100)}% OFF
                </Badge>

                <div className="space-y-3 mb-6">
                  <Button size="lg" className="w-full">
                    Enroll Now
                  </Button>
                  <div className="flex gap-2">
                    <Input placeholder="Referral code" className="flex-1" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">30-day money-back guarantee</p>
              </div>

              {/* Course Features */}
              <div className="space-y-4 mb-6">
                <h4 className="font-semibold">This course includes:</h4>
                {courseData.features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-sm">{feature.text}</span>
                    </div>
                  )
                })}
              </div>

              {/* Course Details */}
              <div className="space-y-3 text-sm border-t pt-6">
                <div className="flex justify-between">
                  <span>Duration</span>
                  <span className="font-medium">{courseData.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Students Enrolled</span>
                  <span className="font-medium">{courseData.students.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Language</span>
                  <span className="font-medium">{courseData.language}</span>
                </div>
                <div className="flex justify-between">
                  <span>Level</span>
                  <span className="font-medium">{courseData.level}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
