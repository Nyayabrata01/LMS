"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Users, TrendingUp, Copy, ExternalLink, Calendar } from "lucide-react"

const referralData = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    joinDate: "2024-01-15",
    coursePurchased: "Complete React Development",
    commission: 2500,
    status: "active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    joinDate: "2024-01-20",
    coursePurchased: "Python for Data Science",
    commission: 3200,
    status: "active",
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol@example.com",
    joinDate: "2024-01-25",
    coursePurchased: "Full Stack JavaScript",
    commission: 3700,
    status: "pending",
  },
]

const monthlyEarnings = [
  { month: "Jan", earnings: 45000 },
  { month: "Feb", earnings: 68000 },
  { month: "Mar", earnings: 52000 },
  { month: "Apr", earnings: 75000 },
  { month: "May", earnings: 89000 },
  { month: "Jun", earnings: 120000 },
]

export default function AffiliateDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Affiliate Dashboard</h1>
        <p className="text-muted-foreground">Track your referrals and earnings from the affiliate program.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹2,45,000</div>
            <p className="text-xs text-muted-foreground">+₹32,000 from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹32,000</div>
            <p className="text-xs text-muted-foreground">+15% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Referrals</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">3 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5%</div>
            <p className="text-xs text-muted-foreground">+2.1% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Earnings Chart */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyEarnings.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{data.month}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-32 bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-500"
                          style={{ width: `${(data.earnings / 120000) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">₹{data.earnings}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Referral Link */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Referral Link</CardTitle>
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
              <p className="text-xs text-muted-foreground">Earn 25% commission on every successful referral</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" size="sm">
                Generate Custom Link
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                Download Marketing Kit
              </Button>
              <Button variant="outline" className="w-full" size="sm">
                View Commission Structure
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Referrals Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Referrals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {referralData.map((referral) => (
              <div key={referral.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h4 className="font-medium">{referral.name}</h4>
                      <p className="text-sm text-muted-foreground">{referral.email}</p>
                    </div>
                    <div className="hidden md:block">
                      <p className="text-sm font-medium">{referral.coursePurchased}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(referral.joinDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge variant={referral.status === "active" ? "default" : "secondary"}>{referral.status}</Badge>
                  <div className="text-right">
                    <p className="font-medium">₹{referral.commission}</p>
                    <p className="text-sm text-muted-foreground">Commission</p>
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
