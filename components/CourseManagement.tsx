"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, XCircle, Eye, Edit } from "lucide-react"

const courses = [
  {
    id: 1,
    title: "Complete React Development Bootcamp",
    instructor: "Priya Sharma",
    category: "Frontend",
    price: 2999,
    students: 2340,
    rating: 4.9,
    status: "published",
    submittedDate: "2024-01-15",
    revenue: 7020600,
  },
  {
    id: 2,
    title: "Advanced JavaScript Patterns",
    instructor: "Priya Sharma",
    category: "Frontend",
    price: 1999,
    students: 0,
    rating: 0,
    status: "pending",
    submittedDate: "2024-01-20",
    revenue: 0,
  },
  {
    id: 3,
    title: "Python for Data Science",
    instructor: "Dr. Rajesh Kumar",
    category: "Data Science",
    price: 3999,
    students: 1890,
    rating: 4.8,
    status: "published",
    submittedDate: "2024-01-10",
    revenue: 7558110,
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    instructor: "Dr. Rajesh Kumar",
    category: "Data Science",
    price: 4999,
    students: 0,
    rating: 0,
    status: "rejected",
    submittedDate: "2024-01-18",
    revenue: 0,
  },
]

const publishedCourses = courses.filter((course) => course.status === "published")
const pendingCourses = courses.filter((course) => course.status === "pending")
const rejectedCourses = courses.filter((course) => course.status === "rejected")

export default function CourseManagement() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "published":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "rejected":
        return <XCircle className="h-4 w-4 text-red-500" />
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
      case "rejected":
        return "destructive"
      default:
        return "secondary"
    }
  }

  const CourseTable = ({ courses }: { courses: any[] }) => (
    <div className="space-y-4">
      {courses.map((course) => (
        <Card key={course.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-start space-x-4">
                {getStatusIcon(course.status)}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">{course.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">by {course.instructor}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <Badge variant="outline">{course.category}</Badge>
                    <span className="text-muted-foreground">₹{course.price.toLocaleString()}</span>
                    {course.students > 0 && <span className="text-muted-foreground">{course.students} students</span>}
                    {course.rating > 0 && <span className="text-muted-foreground">⭐ {course.rating}</span>}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <Badge variant={getStatusColor(course.status) as any}>{course.status}</Badge>
                  <p className="text-sm text-muted-foreground mt-1">
                    Submitted {new Date(course.submittedDate).toLocaleDateString()}
                  </p>
                  {course.revenue > 0 && (
                    <p className="text-sm font-medium text-green-600">₹{course.revenue.toLocaleString()} revenue</p>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  {course.status === "pending" && (
                    <>
                      <Button size="sm">
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button variant="destructive" size="sm">
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </>
                  )}
                  {course.status === "published" && (
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Course Management</h1>
        <p className="text-muted-foreground">Review and manage courses on the platform</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Courses</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{courses.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{publishedCourses.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingCourses.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ₹{publishedCourses.reduce((sum, course) => sum + course.revenue, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Courses ({courses.length})</TabsTrigger>
          <TabsTrigger value="published">Published ({publishedCourses.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingCourses.length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({rejectedCourses.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <CourseTable courses={courses} />
        </TabsContent>

        <TabsContent value="published" className="space-y-6">
          <CourseTable courses={publishedCourses} />
        </TabsContent>

        <TabsContent value="pending" className="space-y-6">
          <CourseTable courses={pendingCourses} />
        </TabsContent>

        <TabsContent value="rejected" className="space-y-6">
          <CourseTable courses={rejectedCourses} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
