"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, DollarSign, Users, TrendingUp, Clock, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

const recentCourses = [
  {
    id: 1,
    title: "Complete React Development",
    status: "published",
    students: 2340,
    revenue: 2340000,
    rating: 4.9,
    lastUpdated: "2024-01-15",
  },
  {
    id: 2,
    title: "Advanced JavaScript Patterns",
    status: "pending",
    students: 0,
    revenue: 0,
    rating: 0,
    lastUpdated: "2024-01-20",
  },
  {
    id: 3,
    title: "Node.js Masterclass",
    status: "draft",
    students: 0,
    revenue: 0,
    rating: 0,
    lastUpdated: "2024-01-25",
  },
]

const monthlyData = [
  { month: "Jan", revenue: 450000, students: 45 },
  { month: "Feb", revenue: 680000, students: 68 },
  { month: "Mar", revenue: 520000, students: 52 },
  { month: "Apr", revenue: 750000, students: 75 },
  { month: "May", revenue: 890000, students: 89 },
  { month: "Jun", revenue: 1200000, students: 120 },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "published":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />
    case "draft":
      return <AlertCircle className="h-4 w-4 text-blue-500" />
    default:
      return <Clock className="h-4 w-4 text-muted-foreground" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "published":
      return "default"
    case "pending":
      return "secondary"
    case "draft":
      return "outline"
    default:
      return "secondary"
  }
}

export default function InstructorDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah! 👋</h1>
        <p className="text-muted-foreground">Here's how your courses are performing this month.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">3 published, 2 pending</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15,420</div>
            <p className="text-xs text-muted-foreground">+1,234 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹45,23,000</div>
            <p className="text-xs text-muted-foreground">+₹5,67,000 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <p className="text-xs text-muted-foreground">+0.2 from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{data.month}</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(data.revenue / 1200000) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">₹{data.revenue}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{data.students}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link href="/instructor/courses/create">
                <Button className="w-full" size="sm">
                  Create New Course
                </Button>
              </Link>
              <Button variant="outline" className="w-full" size="sm">
                View Analytics
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                Manage Students
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                Update Profile
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Course Reviews</span>
                  <Badge variant="secondary">2</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Student Questions</span>
                  <Badge variant="secondary">5</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Payout Requests</span>
                  <Badge variant="secondary">1</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Courses */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Recent Courses</CardTitle>
          <Link href="/instructor/courses">
            <Button variant="outline" size="sm">
              View All
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCourses.map((course) => (
              <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(course.status)}
                  <div>
                    <h4 className="font-medium">{course.title}</h4>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>Updated {new Date(course.lastUpdated).toLocaleDateString()}</span>
                      {course.students > 0 && (
                        <>
                          <span>•</span>
                          <span>{course.students} students</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={getStatusColor(course.status) as any}>{course.status}</Badge>
                  {course.revenue > 0 && (
                    <div className="text-right">
                      <p className="font-medium">₹{course.revenue.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">Revenue</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
