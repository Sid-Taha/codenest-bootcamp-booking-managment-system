import { Bell, Calendar, CreditCard, DollarSign, Users, Settings, BookOpen, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="font-semibold text-lg">Booking System</span>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <div className="space-y-2">
            <Button variant="secondary" className="w-full justify-start gap-3 bg-gray-100">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Calendar className="h-4 w-4" />
              Booking
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Users className="h-4 w-4" />
              Customer
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Settings className="h-4 w-4" />
              Setting
            </Button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Up coming bookings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from yesterday</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$ 2,350</div>
                <p className="text-xs text-muted-foreground">3 payments awaiting</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$ 12,234</div>
                <p className="text-xs text-muted-foreground">+8% from last month</p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs Section */}
          <Card>
            <CardHeader>
              <Tabs defaultValue="notifications" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="bookings">Up coming bookings</TabsTrigger>
                  <TabsTrigger value="calendar">calendar</TabsTrigger>
                </TabsList>

                <TabsContent value="notifications" className="mt-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Recent Notifications</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">You have 4 unread notifications</p>

                    <div className="space-y-4">
                      {/* Booking Cancellation */}
                      <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <Avatar className="h-10 w-10 bg-red-100">
                          <AvatarFallback className="bg-red-100 text-red-600">C</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Booking Cancellation</h4>
                            <Badge variant="secondary">New</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            john smith has cancelled their booking for tommorrow at 2:00 PM
                          </p>
                          <p className="text-xs text-muted-foreground">10 minutes ago</p>
                        </div>
                      </div>

                      {/* New Booking */}
                      <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <Avatar className="h-10 w-10 bg-green-100">
                          <AvatarFallback className="bg-green-100 text-green-600">B</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">New Booking</h4>
                            <Badge variant="secondary">New</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            Sarah Johnson has made anew booking on friday 10:00 AM
                          </p>
                          <p className="text-xs text-muted-foreground">1 hour ago</p>
                        </div>
                      </div>

                      {/* Payment Received */}
                      <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <Avatar className="h-10 w-10 bg-orange-100">
                          <AvatarFallback className="bg-orange-100 text-orange-600">P</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">Payment Received</h4>
                            <Badge variant="secondary">New</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            You've received a payment of $ 150 from Micheal Brown
                          </p>
                          <p className="text-xs text-muted-foreground">3 hours ago</p>
                        </div>
                      </div>

                      {/* New Customers */}
                      <div className="flex items-start gap-4 p-4 border rounded-lg">
                        <Avatar className="h-10 w-10 bg-blue-100">
                          <AvatarFallback className="bg-blue-100 text-blue-600">U</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium">New Costumers</h4>
                            <Badge variant="secondary">New</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">Emma Wilson has created a new account</p>
                          <p className="text-xs text-muted-foreground">5 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="bookings">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Upcoming bookings will be displayed here</p>
                  </div>
                </TabsContent>

                <TabsContent value="calendar">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Calendar view will be displayed here</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </main>
      </div>
    </div>
  )
}
