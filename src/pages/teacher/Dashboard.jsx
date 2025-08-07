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
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";

function Dashboard() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const subjects = [
    {
      name: "UX DESIGN",
      color: "bg-yellow-200 border-yellow-300 text-yellow-800",
    },
    {
      name: "APPLIED SCIENCE",
      color: "bg-pink-200 border-pink-300 text-pink-800",
    },
    {
      name: "ARTIFICIAL INTELLIGENCE",
      color: "bg-teal-200 border-teal-300 text-teal-800",
    },
  ];

  const weeklySchedule = [
    {
      day: "Mon",
      date: "14",
      subject: "Applied Science",
      time: "09:30 - 11:30",
      color: "bg-pink-300",
    },
    {
      day: "Tue",
      date: "15",
      subject: "Technology",
      time: "11:30 - 12:30",
      color: "bg-purple-300",
    },
    {
      day: "Wed",
      date: "16",
      subject: "UX Design",
      time: "12:00 - 13:40",
      color: "bg-yellow-300",
    },
    {
      day: "Thu",
      date: "17",
      subject: "Artificial Intelligence",
      time: "14:00 - 15:40",
      color: "bg-cyan-300",
    },
    {
      day: "Fri",
      date: "18",
      subject: "Business Management",
      time: "15:00 - 16:00",
      color: "bg-orange-300",
    },
    { day: "Sat", date: "19" },
    { day: "Sun", date: "20" },
  ];

  const upcomingEvents = [
    {
      title: "Applied Science Homework",
      date: "2nd of February - Tuesday",
      time: "11:30 - 12:30",
      color: "bg-pink-500",
    },
    {
      title: "Technology Exam",
      date: "3rd of February - Wednesday",
      time: "11:30 - 12:30",
      color: "bg-orange-500",
    },
    {
      title: "Artificial Intelligence Workshop",
      date: "5th of February - Tuesday",
      time: "11:30 - 12:30",
      color: "bg-yellow-500",
    },
    {
      title: "UX Design Conference",
      date: "6th of February - Monday",
      time: "11:30 - 12:30",
      color: "bg-green-500",
    },
  ];

  const menuItems = [
    { name: "Dashboard", icon: Home, active: true },
    { name: "Courses", icon: BookOpen, active: false },
    { name: "Exams", icon: FileText, active: false },
    { name: "Homework", icon: Calendar, active: false },
    { name: "Students", icon: Users, active: false },
    { name: "Paid Courses", icon: DollarSign, active: false },
    { name: "Attendance", icon: BarChart3, active: false },
    { name: "Duties", icon: Calendar, active: false },
    { name: "Grading", icon: Trophy, active: false },
    { name: "Alumni", icon: GraduationCap, active: false },
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const formatMonth = (date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-gradient-to-b from-purple-100 to-pink-100 shadow-lg">
            {/* Profile Section */}
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

            <div className="p-6">
              {/* Subject Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {subjects.map((subject, index) => (
                  <div
                    key={index}
                    className={`${subject.color} rounded-xl p-4 border-2`}
                  >
                    <h3 className="font-semibold text-sm mb-3">
                      {subject.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center text-xs">
                        <Eye className="w-4 h-4 mr-2" />
                        View Classes
                      </div>
                      <div className="flex items-center text-xs">
                        <Eye className="w-4 h-4 mr-2" />
                        View Students
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Weekly Schedule */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">
                    WEEKLY COURSE SCHEDULE
                  </h3>

                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {weeklySchedule.map((day, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xs text-gray-500 mb-1">
                          {day.date}
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          {day.day}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Time slots */}
                  <div className="space-y-2">
                    {Array.from({ length: 10 }, (_, i) => {
                      const hour = 9 + i;
                      const timeSlot = `${hour.toString().padStart(2, "0")}:00`;

                      return (
                        <div key={i} className="flex items-center">
                          <div className="w-12 text-xs text-gray-500 mr-4">
                            {timeSlot}
                          </div>
                          <div className="flex-1 grid grid-cols-7 gap-2">
                            {weeklySchedule.map((day, dayIndex) => {
                              const hasClass =
                                day.subject &&
                                day.time &&
                                parseInt(day.time.split(":")[0]) <= hour &&
                                parseInt(
                                  day.time.split(" - ")[1].split(":")[0]
                                ) > hour;

                              return (
                                <div key={dayIndex} className="h-8">
                                  {hasClass && (
                                    <div
                                      className={`${day.color} rounded px-2 py-1 text-xs text-white font-medium h-full flex items-center justify-center`}
                                    >
                                      {day.subject.split(" ")[0]}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Calendar */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() => navigateMonth(-1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <h3 className="text-lg font-semibold">
                        {formatMonth(currentDate)}
                      </h3>
                      <button
                        onClick={() => navigateMonth(1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                        (day) => (
                          <div
                            key={day}
                            className="text-xs text-gray-500 text-center py-2"
                          >
                            {day}
                          </div>
                        )
                      )}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {getDaysInMonth(currentDate).map((day, index) => (
                        <div
                          key={index}
                          className="aspect-square flex items-center justify-center text-sm"
                        >
                          {day && (
                            <button
                              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                day === 1
                                  ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
                                  : "hover:bg-gray-100"
                              }`}
                            >
                              {day}
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Events */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Upcoming Events
                    </h3>
                    <div className="text-xs text-gray-500 mb-4">
                      1st Feb Monday - 7th Feb Sunday
                    </div>

                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div
                            className={`w-1 h-12 ${event.color} rounded-full flex-shrink-0`}
                          ></div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span className="text-sm font-medium">
                                {event.title}
                              </span>
                            </div>
                            <div className="text-xs text-gray-500">
                              {event.date}
                            </div>
                            <div className="text-xs text-gray-500">
                              {event.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
