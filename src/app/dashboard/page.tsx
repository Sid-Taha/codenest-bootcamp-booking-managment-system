import {
  BarChart3,
  Bell,
  Calendar,
  CreditCard,
  DollarSign,
  Settings,
  Users,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="flex-1 overflow-hidden">
      <header className="flex h-16 items-center justify-between border-2 ml-3 mr-2 rounded-[12px] bg-white px-4">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <Image src={"/dashboard_icon.png"} height={36} width={36} alt="Dashboard Icon" />
      </header>

      <main className="p-4 h-full overflow-hidden">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Up coming bookings</h2>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
            <p className="mt-2 text-2xl font-bold">12</p>
            <p className="text-sm text-gray-500">+2 from yesterday</p>
          </div>

          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Pending Payments</h2>
              <CreditCard className="h-5 w-5 text-gray-400" />
            </div>
            <p className="mt-2 text-2xl font-bold">$ 2,350</p>
            <p className="text-sm text-gray-500">3 payments awaiting</p>
          </div>

          <div className="rounded-lg border bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-medium">Total Revenue</h2>
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <p className="mt-2 text-2xl font-bold">$ 12,234</p>
            <p className="text-sm text-gray-500">+8% from last month</p>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="space-y-4 h-full">
          <Tabs defaultValue="notifications">
            <TabsList className="grid grid-cols-2 w-[400px] bg-gray-200">
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="bookings">{"Today's Bookings"}</TabsTrigger>
            </TabsList>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Recent Activity</CardTitle>
              </CardHeader>

              <CardContent>
               
                {/* Notifications */}
                <TabsContent value="notifications" className="h-full m-0">
                  <div className="px-6 pb-2">
                    <p className="text-sm text-muted-foreground">
                      You have 4 unread notifications
                    </p>
                  </div>
                  <ScrollArea className="h-[800px] px-6">
                    <div className="space-y-2">
                      <Card className="h-[80px] flex justify-center border-l-6 border-l-red-500 ">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                                <Calendar className="h-4 w-4 text-red-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Booking Cancellation
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  John Smith has canceled their booking for
                                  tomorrow at 2:00 PM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  10 minutes ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-green-500">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                                <Calendar className="h-4 w-4 text-green-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  New Booking
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Sarah Johnson has made a new booking on Friday
                                  10:00 AM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  1 hour ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-yellow-500">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                                <CreditCard className="h-4 w-4 text-yellow-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Payment Received
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  {
                                    "You've received a payment of $150 from Michael Brown"
                                  }
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  3 hours ago
                                </p>
                              </div>
                            </div>
                            <Badge className="text-xs">New</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-blue-500">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                                <Users className="h-4 w-4 text-blue-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  New Customer
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Emma Wilson has created a new account
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  5 hours ago
                                </p>
                              </div>
                            </div>
                            <Badge className="text-xs">New</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-purple-500">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                                <Bell className="h-4 w-4 text-purple-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  System Update
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  System maintenance completed successfully
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  1 day ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-red-500 ">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                                <Calendar className="h-4 w-4 text-red-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Booking Cancellation
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  John Smith has canceled their booking for
                                  tomorrow at 2:00 PM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  10 minutes ago
                                </p>
                              </div>
                            </div>
                            <Badge className="text-xs my-auto">New</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-yellow-500">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100">
                                <CreditCard className="h-4 w-4 text-yellow-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Payment Received
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  {
                                    "You've received a payment of $150 from Michael Brown"
                                  }
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  3 hours ago
                                </p>
                              </div>
                            </div>
                            <Badge className="text-xs">New</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-blue-500">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                                <Users className="h-4 w-4 text-blue-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  New Customer
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Emma Wilson has created a new account
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  5 hours ago
                                </p>
                              </div>
                            </div>
                            <Badge className="text-xs">New</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-purple-500">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                                <Bell className="h-4 w-4 text-purple-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  System Update
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  System maintenance completed successfully
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  1 day ago
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-red-500 ">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                                <Calendar className="h-4 w-4 text-red-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Booking Cancellation
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  John Smith has canceled their booking for
                                  tomorrow at 2:00 PM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  10 minutes ago
                                </p>
                              </div>
                            </div>
                            <Badge className="text-xs my-auto">New</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-red-500 ">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                                <Calendar className="h-4 w-4 text-red-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Booking Cancellation
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  John Smith has canceled their booking for
                                  tomorrow at 2:00 PM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  10 minutes ago
                                </p>
                              </div>
                            </div>
                            <Badge className="text-xs my-auto">New</Badge>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="h-[80px] flex justify-center border-l-6 border-l-red-500 ">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                                <Calendar className="h-4 w-4 text-red-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Booking Cancellation
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  John Smith has canceled their booking for
                                  tomorrow at 2:00 PM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  10 minutes ago
                                </p>
                              </div>
                            </div>
                            <Badge className="text-xs my-auto">New</Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6 border-l-red-500 ">
                        <CardContent className="px-4">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-3">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100">
                                <Calendar className="h-4 w-4 text-red-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Booking Cancellation
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  John Smith has canceled their booking for
                                  tomorrow at 2:00 PM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  10 minutes ago
                                </p>
                              </div>
                            </div>
                            <Badge className="text-xs my-auto">New</Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </ScrollArea>
                </TabsContent>

                {/* Today's Bookings */}
                <TabsContent value="bookings" className="h-full m-0">
                  <div className="px-6 pb-2">
                    <p className="text-sm text-muted-foreground">
                      {"You have 5 bookings scheduled for today"}
                    </p>
                  </div>
                  <ScrollArea className="h-[350px] px-6">
                    <div className="space-y-2 pb-4">
                      <Card className="h-[80px] flex justify-center border-l-6 border-l-green-500">
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                                <Clock className="h-4 w-4 text-green-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Sarah Johnson
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Hair Cut & Styling - 9:00 AM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Duration: 1.5 hours
                                </p>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              Confirmed
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6  border-l-blue-500">
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                                <Clock className="h-4 w-4 text-blue-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Michael Brown
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Beard Trim - 11:00 AM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Duration: 30 minutes
                                </p>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              Confirmed
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6  border-l-orange-500">
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                                <Clock className="h-4 w-4 text-orange-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Emma Wilson
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Full Service - 2:00 PM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Duration: 2 hours
                                </p>
                              </div>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              Pending
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6  border-l-purple-500">
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                                <Clock className="h-4 w-4 text-purple-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  David Lee
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Hair Wash & Cut - 4:30 PM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Duration: 1 hour
                                </p>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              Confirmed
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>

                      <Card className="h-[80px] flex justify-center border-l-6  border-l-teal-500">
                        <CardContent className="p-3">
                          <div className="flex items-start justify-between">
                            <div className="flex gap-2">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100">
                                <Clock className="h-4 w-4 text-teal-500" />
                              </div>
                              <div className="space-y-0.5">
                                <h3 className="font-medium text-sm">
                                  Lisa Anderson
                                </h3>
                                <p className="text-xs text-muted-foreground">
                                  Color Treatment - 6:00 PM
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Duration: 2.5 hours
                                </p>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              Confirmed
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </ScrollArea>
                </TabsContent>

              </CardContent>
            </Card>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
