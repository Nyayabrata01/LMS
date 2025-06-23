"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, DollarSign, Users, TrendingUp, Copy, ExternalLink } from "lucide-react"
import Link from "next/link"

const myCourses = [
  {
    id: 1,
    title: "Complete React Development",
    progress: 75,
    thumbnail: "/placeholder.svg?height=100&width=150",
    instructor: "Sarah Johnson",
    nextLesson: "React Hooks Advanced Patterns",
  },
  {
    id: 2,
    title: "Python for Data Science",
    progress: 45,
    thumbnail: "/placeholder.svg?height=100&width=150",
    instructor: "Dr. Michael Chen",
    nextLesson: "Pandas Data Manipulation",
  },
  {
    id: 3,
    title: "Full Stack JavaScript",
    progress: 20,
    thumbnail: "/placeholder.svg?height=100&width=150",
    instructor: "Alex Rodriguez",
    nextLesson: "Node.js Fundamentals",
  },
]

export default function StudentDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
        <p className="text-muted-foreground">Continue your learning journey and track your progress.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 in progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Courses</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Referral Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹2,45,000</div>
            <p className="text-xs text-muted-foreground">+₹32,000 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Referrals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">5 active this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* My Courses */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Continue Learning</CardTitle>
              <Link href="/student/courses">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              {myCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-20 h-12 bg-muted rounded flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium truncate">{course.title}</h4>
                    <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Progress value={course.progress} className="flex-1" />
                      <span className="text-sm text-muted-foreground">{course.progress}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Next: {course.nextLesson}</p>
                  </div>
                  <Button size="sm">Continue</Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Affiliate Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Affiliate Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Total Earnings</span>
                  <span className="font-medium">₹2,45,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Pending</span>
                  <span className="font-medium">₹32,000</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Available</span>
                  <span className="font-medium text-green-600">₹2,13,000</span>
                </div>
              </div>
              <Link href="/student/affiliate">
                <Button className="w-full" size="sm">
                  View Details
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Referral Link</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-3 bg-muted rounded-lg">
                <p className="text-sm font-mono break-all">https://coderzonee.com/ref/john123</p>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
                <Button size="sm" variant="outline">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
