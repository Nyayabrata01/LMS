"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, DollarSign, TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react"

const recentActivities = [
  {
    id: 1,
    type: "course_approval",
    message: "New course 'Advanced React Patterns' submitted for approval",
    user: "Priya Sharma",
    time: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    type: "user_registration",
    message: "50 new users registered today",
    time: "4 hours ago",
    status: "info",
  },
  {
    id: 3,
    type: "payment",
    message: "Instructor payout of ₹45,000 processed",
    user: "Rajesh Kumar",
    time: "6 hours ago",
    status: "success",
  },
  {
    id: 4,
    type: "course_approval",
    message: "Course 'Python Basics' approved and published",
    user: "Amit Patel",
    time: "1 day ago",
    status: "success",
  },
]

const pendingApprovals = [
  {
    id: 1,
    title: "Advanced JavaScript Patterns",
    instructor: "Priya Sharma",
    submitted: "2024-01-20",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Rajesh Kumar",
    submitted: "2024-01-19",
    category: "Data Science",
  },
  {
    id: 3,
    title: "React Native Mobile Development",
    instructor: "Arjun Patel",
    submitted: "2024-01-18",
    category: "Mobile",
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Monitor and manage CoderZonee platform operations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52,340</div>
            <p className="text-xs text-muted-foreground">+2,340 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,245</div>
            <p className="text-xs text-muted-foreground">+45 pending approval</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,45,000</div>
            <p className="text-xs text-muted-foreground">+18% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Instructors</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-4 border rounded-lg">
                    <div className="mt-1">
                      {activity.status === "pending" && <Clock className="h-4 w-4 text-yellow-500" />}
                      {activity.status === "success" && <CheckCircle className="h-4 w-4 text-green-500" />}
                      {activity.status === "info" && <AlertCircle className="h-4 w-4 text-blue-500" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{activity.message}</p>
                      {activity.user && <p className="text-xs text-muted-foreground">by {activity.user}</p>}
                      <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                    </div>
                    <Badge
                      variant={
                        activity.status === "pending"
                          ? "secondary"
                          : activity.status === "success"
                            ? "default"
                            : "outline"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Approvals */}
        <div className="space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Pending Approvals</CardTitle>
              <Badge variant="secondary">{pendingApprovals.length}</Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {pendingApprovals.map((course) => (
                  <div key={course.id} className="p-3 border rounded-lg">
                    <h4 className="font-medium text-sm mb-1">{course.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">by {course.instructor}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {course.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{course.submitted}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" size="sm">
                Review All
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" size="sm" variant="outline">
                Create Discount Code
              </Button>
              <Button className="w-full" size="sm" variant="outline">
                Send Announcement
              </Button>
              <Button className="w-full" size="sm" variant="outline">
                Generate Report
              </Button>
              <Button className="w-full" size="sm" variant="outline">
                Manage Featured Courses
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
