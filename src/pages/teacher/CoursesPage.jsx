import { useState } from "react";
import {
  Home,
  BookOpen,
  FileText,
  Calendar,
  Users,
  DollarSign,
  BarChart3,
  GraduationCap,
  Trophy,
  Search,
  Bell,
  MessageSquare,
  User,
  Eye,
  Layers,
} from "lucide-react";

function CoursesPage() {
  const menuItems = [
    { name: "Dashboard", icon: Home, active: false },
    { name: "Courses", icon: BookOpen, active: true },
    { name: "Exams", icon: FileText, active: false },
    { name: "Homework", icon: Calendar, active: false },
    { name: "Students", icon: Users, active: false },
    { name: "Attendance", icon: BarChart3, active: false },
    { name: "Grading", icon: Trophy, active: false },
  ];

  const courses = [
    {
      title: "UX Design Fundamentals",
      category: "Design",
      students: 58,
      color: "bg-yellow-100 text-yellow-800",
    },
    {
      title: "Applied Science Basics",
      category: "Science",
      students: 72,
      color: "bg-pink-100 text-pink-800",
    },
    {
      title: "Intro to AI",
      category: "Technology",
      students: 63,
      color: "bg-teal-100 text-teal-800",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gradient-to-b from-purple-100 to-pink-100 shadow-lg">
          <div className="p-6 border-b border-purple-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-800">
                  Abubakar Abdulkarim
                </h3>
                <p className="text-sm text-purple-600">
                  Applied Science Teacher
                </p>
              </div>
            </div>
          </div>
          {/* Navigation Menu */}
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  item.active
                    ? "bg-gradient-to-r from-purple-300 to-pink-300 text-purple-800 shadow-md"
                    : "text-purple-700 hover:bg-purple-200 hover:bg-opacity-50"
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <div className="bg-white shadow-sm p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:text-purple-600">
                  <Bell className="w-6 h-6" />
                </button>
                <button className="p-2 text-gray-600 hover:text-purple-600">
                  <MessageSquare className="w-6 h-6" />
                </button>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-6">
              My Courses
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl shadow-sm p-5 hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg text-purple-700">
                      {course.title}
                    </h3>
                    <Layers className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="text-sm mb-2">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${course.color}`}
                    >
                      {course.category}
                    </span>
                  </div>
                  <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{course.students} students</span>
                    </div>
                    <div className="flex items-center space-x-1 text-purple-600 hover:underline cursor-pointer">
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesPage;
