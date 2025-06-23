"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, MoreHorizontal, Mail, Ban, CheckCircle } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const users = [
  {
    id: 1,
    name: "Rahul Verma",
    email: "rahul@example.com",
    role: "student",
    joinDate: "2024-01-15",
    status: "active",
    courses: 5,
    totalSpent: 15000,
    location: "Mumbai",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya@example.com",
    role: "instructor",
    joinDate: "2023-12-10",
    status: "active",
    courses: 12,
    totalEarned: 245000,
    location: "Bangalore",
  },
  {
    id: 3,
    name: "Amit Patel",
    email: "amit@example.com",
    role: "student",
    joinDate: "2024-01-20",
    status: "inactive",
    courses: 2,
    totalSpent: 5000,
    location: "Delhi",
  },
  {
    id: 4,
    name: "Dr. Rajesh Kumar",
    email: "rajesh@example.com",
    role: "instructor",
    joinDate: "2023-11-05",
    status: "active",
    courses: 8,
    totalEarned: 180000,
    location: "Pune",
  },
]

const students = users.filter((user) => user.role === "student")
const instructors = users.filter((user) => user.role === "instructor")

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")

  const UserTable = ({ users, type }: { users: any[]; type: string }) => (
    <div className="space-y-4">
      {users.map((user) => (
        <Card key={user.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary">
                    {user.name
                      .split(" ")
                      .map((n: string) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                    <Badge variant="outline">{user.role}</Badge>
                    <span className="text-xs text-muted-foreground">{user.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm font-medium">
                    {type === "student" ? `${user.courses} courses` : `${user.courses} courses created`}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {type === "student"
                      ? `₹${user.totalSpent.toLocaleString()} spent`
                      : `₹${user.totalEarned.toLocaleString()} earned`}
                  </p>
                  <p className="text-xs text-muted-foreground">Joined {new Date(user.joinDate).toLocaleDateString()}</p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Mail className="mr-2 h-4 w-4" />
                      Send Message
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      View Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Ban className="mr-2 h-4 w-4" />
                      Suspend User
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
        <h1 className="text-3xl font-bold mb-2">User Management</h1>
        <p className="text-muted-foreground">Manage students and instructors on the platform</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search users by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* User Tabs */}
      <Tabs defaultValue="all" className="w-full">
        <TabsList>
          <TabsTrigger value="all">All Users ({users.length})</TabsTrigger>
          <TabsTrigger value="students">Students ({students.length})</TabsTrigger>
          <TabsTrigger value="instructors">Instructors ({instructors.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <UserTable users={users} type="all" />
        </TabsContent>

        <TabsContent value="students" className="space-y-6">
          <UserTable users={students} type="student" />
        </TabsContent>

        <TabsContent value="instructors" className="space-y-6">
          <UserTable users={instructors} type="instructor" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
