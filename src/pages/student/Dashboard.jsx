import React, { useState } from "react";
import {
  GraduationCap,
  DollarSign,
  CreditCard,
  BookOpen,
  Calendar,
  Bell,
  User,
  Search,
  LogOut,
  ChevronRight,
  BarChart3,
  Users,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: GraduationCap, active: true },
    { name: "Payment Info", icon: CreditCard },
    { name: "Registration", icon: BookOpen },
    { name: "Courses", icon: BookOpen },
    { name: "Drop Semester", icon: Calendar },
    { name: "Result", icon: BarChart3 },
    { name: "Notice", icon: Bell },
    { name: "Schedule", icon: Clock },
  ];

  const courseInstructors = [
    { name: "Dr. Sarah Johnson", avatar: "👩‍🏫", subject: "Programming" },
    { name: "Prof. Michael Chen", avatar: "👨‍💼", subject: "Database" },
    { name: "Dr. Emily Davis", avatar: "👩‍🔬", subject: "Systems" },
  ];

  const enrolledCourses = [
    {
      title: "Object oriented programming",
      progress: 75,
      color: "bg-purple-500",
      icon: "💻",
    },
    {
      title: "Fundamentals of database systems",
      progress: 60,
      color: "bg-blue-500",
      icon: "🗄️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-purple-600 text-white p-6 shadow-xl">
          <div className="flex items-center mb-8">
            <div className="bg-white bg-opacity-20 p-3 rounded-xl mr-3">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-xl font-bold">SMS</h1>
              <p className="text-purple-200 text-sm">Student Dashboard</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.name
                    ? "bg-white bg-opacity-20 text-white shadow-lg"
                    : "text-purple-200 hover:bg-white hover:bg-opacity-10"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <button className="w-full flex items-center px-4 py-3 text-purple-200 hover:bg-white hover:bg-opacity-10 rounded-lg transition-all duration-200">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-white shadow-sm border-b p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="relative p-2 text-gray-600 hover:text-purple-600 transition-colors">
                  <Bell className="w-6 h-6" />
                  <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {" "}
                      Abubakar Musa{" "}
                    </p>
                    <p className="text-sm text-gray-600">3rd year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-purple-100 mb-2">September 4, 2023</p>
                <h2 className="text-3xl font-bold mb-2">
                  Welcome back, Abubakar!
                </h2>
                <p className="text-purple-100">
                  Always stay updated in your student portal
                </p>
              </div>
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <div className="w-32 h-32 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-50"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-8">
                {/* Finance Section */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">
                    Finance
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-purple-600" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-gray-800">
                        $10,000
                      </p>
                      <p className="text-sm text-gray-600">Total Payable</p>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-purple-600">
                        $5,000
                      </p>
                      <p className="text-sm text-gray-600">Total Paid</p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <p className="text-2xl font-bold text-gray-800">$300</p>
                      <p className="text-sm text-gray-600">Others</p>
                    </div>
                  </div>
                </div>

                {/* Enrolled Courses */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Enrolled Courses
                    </h3>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      See all
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {enrolledCourses.map((course, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl">{course.icon}</div>
                          <div className="text-right">
                            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                              <BarChart3 className="w-8 h-8 text-purple-500" />
                            </div>
                          </div>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-3">
                          {course.title}
                        </h4>
                        <div className="flex items-center justify-between">
                          <div className="flex-1 mr-4">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${course.color}`}
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors">
                            View
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                {/* Course Instructors */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Course Instructors
                    </h3>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      See all
                    </button>
                  </div>

                  <div className="flex space-x-3 mb-6">
                    {courseInstructors.map((instructor, index) => (
                      <div
                        key={index}
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-2xl shadow-lg"
                      >
                        {instructor.avatar}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Daily Notice */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">
                      Daily Notice
                    </h3>
                    <button className="text-purple-600 hover:text-purple-700 font-medium">
                      See all
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Prelim payment due
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        See more
                      </button>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Exam schedule
                      </h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc vulputate libero et velit interdum, ac aliquet odio
                        mattis.
                      </p>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        See more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
