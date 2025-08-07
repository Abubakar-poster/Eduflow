import React, { useState } from "react";
import {
  Search,
  Filter,
  Users,
  Clock,
  MapPin,
  BookOpen,
  Calendar,
  ChevronRight,
  GraduationCap,
  Award,
  TrendingUp,
} from "lucide-react";
import SidebarLayout from "../../layouts/SidebarLayout"; // ✅ Adjust if needed

const AcademicsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState("all");

  const academics = [
    {
      id: 1,
      title: "Advanced Mathematics Curriculum",
      program: "STEM Program",
      semester: "Fall 2024",
      duration: "16 weeks",
      credits: 4,
      instructor: "Dr. Sarah Johnson",
      students: 156,
      description:
        "Advanced calculus and linear algebra for engineering students",
      status: "active",
      color: "bg-purple-600",
    },
    {
      id: 2,
      title: "English Literature & Composition",
      program: "Liberal Arts",
      semester: "Spring 2024",
      duration: "12 weeks",
      credits: 3,
      instructor: "Prof. Michael Williams",
      students: 210,
      description: "Contemporary literature analysis and academic writing",
      status: "completed",
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Physics Laboratory",
      program: "Science Program",
      semester: "Fall 2024",
      duration: "16 weeks",
      credits: 2,
      instructor: "Dr. Lisa Chen",
      students: 89,
      description: "Hands-on physics experiments and data analysis",
      status: "active",
      color: "bg-purple-400",
    },
    {
      id: 4,
      title: "World History Survey",
      program: "Social Studies",
      semester: "Spring 2024",
      duration: "14 weeks",
      credits: 3,
      instructor: "Ms. Jennifer Davis",
      students: 178,
      description: "Comprehensive overview of world civilizations",
      status: "planning",
      color: "bg-purple-300",
    },
    {
      id: 5,
      title: "Biology & Life Sciences",
      program: "Science Program",
      semester: "Fall 2024",
      duration: "16 weeks",
      credits: 4,
      instructor: "Dr. Carlos Martinez",
      students: 134,
      description: "Molecular biology and genetics fundamentals",
      status: "active",
      color: "bg-purple-500",
    },
    {
      id: 6,
      title: "Spanish Language Arts",
      program: "Language Program",
      semester: "Spring 2024",
      duration: "12 weeks",
      credits: 3,
      instructor: "Sr. Antonio Rodriguez",
      students: 95,
      description: "Intermediate Spanish conversation and writing",
      status: "completed",
      color: "bg-purple-300",
    },
  ];

  const filteredAcademics = academics.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.program.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSemester =
      selectedSemester === "all" || item.semester === selectedSemester;
    const matchesProgram =
      selectedProgram === "all" || item.program === selectedProgram;

    return matchesSearch && matchesSemester && matchesProgram;
  });

  const semesters = ["all", "Fall 2024", "Spring 2024", "Summer 2024"];
  const programs = [
    "all",
    "STEM Program",
    "Liberal Arts",
    "Science Program",
    "Social Studies",
    "Language Program",
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "planning":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <SidebarLayout title="Academics">
      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Academic Programs
          </h1>
          <p className="text-gray-600">
            Academic session details and curriculum management
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Total Programs</p>
                <p className="text-2xl font-bold">{academics.length}</p>
              </div>
              <GraduationCap className="w-8 h-8 text-purple-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Enrolled Students</p>
                <p className="text-2xl font-bold">
                  {academics.reduce((sum, item) => sum + item.students, 0)}
                </p>
              </div>
              <Users className="w-8 h-8 text-purple-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-400 to-purple-500 p-6 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Total Credits</p>
                <p className="text-2xl font-bold">
                  {academics.reduce((sum, item) => sum + item.credits, 0)}
                </p>
              </div>
              <Award className="w-8 h-8 text-purple-200" />
            </div>
          </div>
          <div className="bg-gradient-to-r from-purple-300 to-purple-400 p-6 rounded-lg text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100 text-sm">Active Programs</p>
                <p className="text-2xl font-bold">
                  {academics.filter((item) => item.status === "active").length}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-200" />
            </div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search programs, instructors, or courses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-4">
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
              >
                {semesters.map((semester) => (
                  <option key={semester} value={semester}>
                    {semester === "all" ? "All Semesters" : semester}
                  </option>
                ))}
              </select>
              <select
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
              >
                {programs.map((program) => (
                  <option key={program} value={program}>
                    {program === "all" ? "All Programs" : program}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Academic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredAcademics.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className={`${item.color} h-2 rounded-t-lg`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.program}</p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-4">{item.description}</p>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {item.instructor}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {item.students} students enrolled
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.semester} • {item.duration}
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-2" />
                    {item.credits} credits
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
                  <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-700">
                    View Curriculum
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Add Button */}
        <div className="fixed bottom-6 right-6">
          <button className="bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition">
            <BookOpen className="w-6 h-6" />
          </button>
        </div>

        {/* Empty State */}
        {filteredAcademics.length === 0 && (
          <div className="text-center py-12">
            <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No academic programs found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </SidebarLayout>
  );
};

export default AcademicsPage;
