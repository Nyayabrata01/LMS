"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DollarSign, TrendingUp, Users, BookOpen, Calendar, Download, Eye } from "lucide-react"

const monthlyEarnings = [
  { month: "Jan", earnings: 45000, students: 120, courses: 3 },
  { month: "Feb", earnings: 52000, students: 145, courses: 3 },
  { month: "Mar", earnings: 48000, students: 135, courses: 4 },
  { month: "Apr", earnings: 65000, students: 180, courses: 4 },
  { month: "May", earnings: 72000, students: 210, courses: 5 },
  { month: "Jun", earnings: 85000, students: 245, courses: 5 },
]

const courseEarnings = [
  {
    id: 1,
    title: "Complete React Development",
    students: 2340,
    price: 2999,
    totalEarnings: 4918860,
    monthlyEarnings: 245000,
    growth: 15.2,
    status: "active",
  },
  {
    id: 2,
    title: "Advanced JavaScript Patterns",
    students: 1890,
    price: 1999,
    totalEarnings: 2644110,
    monthlyEarnings: 180000,
    growth: 12.8,
    status: "active",
  },
  {
    id: 3,
    title: "Node.js Backend Development",
    students: 1560,
    price: 3499,
    totalEarnings: 3822840,
    monthlyEarnings: 165000,
    growth: 8.5,
    status: "active",
  },
  {
    id: 4,
    title: "React Testing Fundamentals",
    students: 890,
    price: 1499,
    totalEarnings: 934110,
    monthlyEarnings: 85000,
    growth: -2.1,
    status: "pending",
  },
]

const payoutHistory = [
  {
    id: 1,
    amount: 125000,
    date: "2024-01-15",
    status: "completed",
    method: "Bank Transfer",
    transactionId: "TXN123456789",
  },
  {
    id: 2,
    amount: 98000,
    date: "2024-01-01",
    status: "completed",
    method: "UPI",
    transactionId: "TXN987654321",
  },
  {
    id: 3,
    amount: 156000,
    date: "2024-01-20",
    status: "pending",
    method: "Bank Transfer",
    transactionId: "TXN456789123",
  },
]

const studentReviews = [
  {
    student: "Rahul Sharma",
    course: "Complete React Development",
    rating: 5,
    comment: "Excellent course! Very detailed explanations and practical examples.",
    date: "2024-01-20",
  },
  {
    student: "Priya Patel",
    course: "Advanced JavaScript",
    rating: 5,
    comment: "Best JavaScript course I've taken. Helped me land a job!",
    date: "2024-01-18",
  },
  {
    student: "Amit Kumar",
    course: "Node.js Backend",
    rating: 4,
    comment: "Great content, would love more real-world projects.",
    date: "2024-01-15",
  },
]

export default function InstructorEarnings() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Earnings Dashboard</h1>
        <p className="text-muted-foreground">Track your course performance and revenue analytics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹12,31,920</div>
            <p className="text-xs text-green-600">+18% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹85,000</div>
            <p className="text-xs text-green-600">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6,680</div>
            <p className="text-xs text-muted-foreground">Across all courses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">1 pending approval</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="courses">Course Performance</TabsTrigger>
          <TabsTrigger value="payouts">Payout History</TabsTrigger>
          <TabsTrigger value="reviews">Student Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Earnings Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Earnings Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyEarnings.map((data, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{data.month}</span>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-32 bg-muted rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${(data.earnings / 85000) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">₹{(data.earnings / 1000).toFixed(0)}K</span>
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

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Earnings Report
                </Button>
                <Button className="w-full" variant="outline">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Request Payout
                </Button>
                <Button className="w-full" variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  View Tax Documents
                </Button>
                <Button className="w-full" variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule 1-on-1 Session
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="courses" className="space-y-6">
          <div className="space-y-4">
            {courseEarnings.map((course) => (
              <Card key={course.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{course.title}</h3>
                        <Badge variant={course.status === "active" ? "default" : "secondary"}>{course.status}</Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Students:</span>
                          <p className="font-medium">{course.students.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Price:</span>
                          <p className="font-medium">₹{course.price.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Total Earnings:</span>
                          <p className="font-medium text-green-600">₹{course.totalEarnings.toLocaleString()}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">This Month:</span>
                          <p className="font-medium">₹{course.monthlyEarnings.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={course.growth > 0 ? "default" : "destructive"}>
                        {course.growth > 0 ? "+" : ""}
                        {course.growth}%
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="payouts" className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Payout History</h3>
            <Button>
              <DollarSign className="h-4 w-4 mr-2" />
              Request New Payout
            </Button>
          </div>

          <div className="space-y-4">
            {payoutHistory.map((payout) => (
              <Card key={payout.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-lg">₹{payout.amount.toLocaleString()}</span>
                          <Badge variant={payout.status === "completed" ? "default" : "secondary"}>
                            {payout.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(payout.date).toLocaleDateString()}
                          </div>
                          <span>{payout.method}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono text-muted-foreground">{payout.transactionId}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-6">
          <div className="space-y-4">
            {studentReviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold">{review.student}</h4>
                      <p className="text-sm text-muted-foreground">{review.course}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-muted-foreground italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
