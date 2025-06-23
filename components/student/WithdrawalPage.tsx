"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"

const withdrawalHistory = [
  {
    id: 1,
    amount: 50000,
    date: "2024-01-15",
    status: "completed",
    method: "UPI",
    transactionId: "TXN123456789",
  },
  {
    id: 2,
    amount: 75000,
    date: "2024-01-01",
    status: "completed",
    method: "Bank Transfer",
    transactionId: "TXN987654321",
  },
  {
    id: 3,
    amount: 30000,
    date: "2024-01-20",
    status: "pending",
    method: "PayPal",
    transactionId: "TXN456789123",
  },
  {
    id: 4,
    amount: 20000,
    date: "2024-01-25",
    status: "processing",
    method: "Bank Transfer",
    transactionId: "TXN789123456",
  },
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "pending":
      return <Clock className="h-4 w-4 text-yellow-500" />
    case "processing":
      return <AlertCircle className="h-4 w-4 text-blue-500" />
    default:
      return <Clock className="h-4 w-4 text-muted-foreground" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "default"
    case "pending":
      return "secondary"
    case "processing":
      return "outline"
    default:
      return "secondary"
  }
}

export default function WithdrawalPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Withdrawals</h1>
        <p className="text-muted-foreground">Manage your earnings and withdrawal requests.</p>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">₹2,13,000</div>
            <p className="text-xs text-muted-foreground">Ready for withdrawal</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">₹32,000</div>
            <p className="text-xs text-muted-foreground">Being processed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Withdrawn</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹1,25,000</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Withdrawal Request */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Request Withdrawal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Amount</label>
                <Input placeholder="Enter amount" type="number" />
                <p className="text-xs text-muted-foreground mt-1">Minimum withdrawal: ₹5,000</p>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Payment Method</label>
                <select className="w-full p-2 border rounded-md">
                  <option>PayPal</option>
                  <option>Bank Transfer</option>
                  <option>Stripe</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Account Details</label>
                <Input placeholder="PayPal email or account info" />
              </div>

              <Button className="w-full">Request Withdrawal</Button>

              <div className="text-xs text-muted-foreground space-y-1">
                <p>• Processing time: 1-3 business days</p>
                <p>• No fees for withdrawals above ₹10,000</p>
                <p>• ₹50 fee for withdrawals below ₹10,000</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Withdrawal History */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Withdrawal History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {withdrawalHistory.map((withdrawal) => (
                  <div key={withdrawal.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      {getStatusIcon(withdrawal.status)}
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">₹{withdrawal.amount}</span>
                          <Badge variant={getStatusColor(withdrawal.status) as any}>{withdrawal.status}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(withdrawal.date).toLocaleDateString()}
                          </div>
                          <span>{withdrawal.method}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono text-muted-foreground">{withdrawal.transactionId}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
