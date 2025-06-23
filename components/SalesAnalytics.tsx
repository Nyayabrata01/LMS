"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign, Users, BookOpen, Target } from "lucide-react"

const monthlyData = [
  { month: "Jan", revenue: 8450000, students: 1200, courses: 45 },
  { month: "Feb", revenue: 9200000, students: 1350, courses: 52 },
  { month: "Mar", revenue: 11000000, students: 1580, courses: 48 },
  { month: "Apr", revenue: 12450000, students: 1720, courses: 55 },
  { month: "May", revenue: 13800000, students: 1890, courses: 62 },
  { month: "Jun", revenue: 15200000, students: 2100, courses: 58 },
]

const topCourses = [
  {
    title: "Complete React Development",
    instructor: "Priya Sharma",
    revenue: 7020600,
    students: 2340,
    growth: 15.2,
  },
  {
    title: "Python for Data Science",
    instructor: "Dr. Rajesh Kumar",
    revenue: 7558110,
    students: 1890,
    growth: 12.8,
  },
  {
    title: "Full Stack JavaScript",
    instructor: "Arjun Patel",
    revenue: 6398400,
    students: 1280,
    growth: 8.5,
  },
  {
    title: "Mobile App Development",
    instructor: "Sneha Reddy",
    revenue: 5594400,
    students: 1120,
    growth: -2.1,
  },
]

const topInstructors = [
  {
    name: "Priya Sharma",
    courses: 12,
    students: 8500,
    revenue: 21250000,
    rating: 4.9,
  },
  {
    name: "Dr. Rajesh Kumar",
    courses: 8,
    students: 6200,
    revenue: 18600000,
    rating: 4.8,
  },
  {
    name: "Arjun Patel",
    courses: 10,
    students: 5800,
    revenue: 17400000,
    rating: 4.7,
  },
  {
    name: "Sneha Reddy",
    courses: 6,
    students: 4200,
    revenue: 12600000,
    rating: 4.8,
  },
]

export default function SalesAnalytics() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Sales Analytics</h1>
        <p className="text-muted-foreground">Comprehensive insights into platform performance and revenue</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1,52,00,000</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +18.2% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,100</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12.5% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Course Sales</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">58</div>
            <div className="flex items-center text-xs text-red-600">
              <TrendingDown className="h-3 w-3 mr-1" />
              -6.8% from last month
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.8%</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +3.2% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{data.month}</span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(data.revenue / 15200000) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">₹{(data.revenue / 100000).toFixed(1)}L</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{data.students}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Performing Courses */}
        <Card>
          <CardHeader>
            <CardTitle>Top Performing Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topCourses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{course.title}</h4>
                    <p className="text-xs text-muted-foreground">by {course.instructor}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs">₹{course.revenue.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{course.students} students</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={course.growth > 0 ? "default" : "destructive"} className="text-xs">
                      {course.growth > 0 ? "+" : ""}
                      {course.growth}%
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Instructors */}
      <Card>
        <CardHeader>
          <CardTitle>Top Instructors by Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topInstructors.map((instructor, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{instructor.name}</h4>
                  <Badge variant="outline">#{index + 1}</Badge>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Revenue:</span>
                    <span className="font-medium">₹{(instructor.revenue / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Students:</span>
                    <span>{instructor.students.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Courses:</span>
                    <span>{instructor.courses}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rating:</span>
                    <span>⭐ {instructor.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
