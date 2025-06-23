"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Clock, CheckCircle, BookOpen } from "lucide-react"
import Image from "next/image"

const courses = [
  {
    id: 1,
    title: "Complete React Development Bootcamp",
    instructor: "Sarah Johnson",
    progress: 75,
    status: "in-progress",
    thumbnail: "/placeholder.svg?height=150&width=200",
    duration: "12 weeks",
    completedLessons: 45,
    totalLessons: 60,
    nextLesson: "React Hooks Advanced Patterns",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Python for Data Science & AI",
    instructor: "Dr. Michael Chen",
    progress: 45,
    status: "in-progress",
    thumbnail: "/placeholder.svg?height=150&width=200",
    duration: "10 weeks",
    completedLessons: 23,
    totalLessons: 50,
    nextLesson: "Pandas Data Manipulation",
    category: "Data Science",
  },
  {
    id: 3,
    title: "Full Stack JavaScript Mastery",
    instructor: "Alex Rodriguez",
    progress: 20,
    status: "in-progress",
    thumbnail: "/placeholder.svg?height=150&width=200",
    duration: "16 weeks",
    completedLessons: 12,
    totalLessons: 65,
    nextLesson: "Node.js Fundamentals",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "UI/UX Design Fundamentals",
    instructor: "Emma Wilson",
    progress: 100,
    status: "completed",
    thumbnail: "/placeholder.svg?height=150&width=200",
    duration: "6 weeks",
    completedLessons: 30,
    totalLessons: 30,
    completedDate: "2024-01-15",
    category: "Design",
  },
  {
    id: 5,
    title: "Mobile App Development",
    instructor: "James Park",
    progress: 100,
    status: "completed",
    thumbnail: "/placeholder.svg?height=150&width=200",
    duration: "14 weeks",
    completedLessons: 55,
    totalLessons: 55,
    completedDate: "2023-12-20",
    category: "Mobile",
  },
]

const inProgressCourses = courses.filter((course) => course.status === "in-progress")
const completedCourses = courses.filter((course) => course.status === "completed")

export default function MyCourses() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">My Courses</h1>
        <p className="text-muted-foreground">Track your learning progress and continue where you left off.</p>
      </div>

      <Tabs defaultValue="in-progress" className="w-full">
        <TabsList>
          <TabsTrigger value="in-progress">In Progress ({inProgressCourses.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedCourses.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="in-progress" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inProgressCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      width={200}
                      height={150}
                      className="w-full h-40 object-cover"
                    />
                    <Badge className="absolute top-4 left-4">{course.category}</Badge>
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="sm" variant="secondary">
                        <Play className="h-4 w-4 mr-2" />
                        Continue
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>
                        {course.completedLessons}/{course.totalLessons} lessons
                      </span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground mb-3">Next: {course.nextLesson}</p>
                      <Button className="w-full" size="sm">
                        <Play className="h-4 w-4 mr-2" />
                        Continue Learning
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <Image
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      width={200}
                      height={150}
                      className="w-full h-40 object-cover"
                    />
                    <Badge className="absolute top-4 left-4">{course.category}</Badge>
                    <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">Completed</span>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{course.totalLessons} lessons completed</span>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <p className="text-sm text-muted-foreground mb-3">
                        Completed on {new Date(course.completedDate!).toLocaleDateString()}
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Review
                        </Button>
                        <Button size="sm" className="flex-1">
                          Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
