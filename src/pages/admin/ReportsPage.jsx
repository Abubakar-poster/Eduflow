import React, { useState } from "react";
import {
  FileText,
  Users,
  TrendingUp,
  Calendar,
  Download,
  Filter,
} from "lucide-react";
import SidebarLayout from "../../layouts/SidebarLayout";

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState("attendance");

  const attendanceData = [
    { month: "Jan", rate: 95 },
    { month: "Feb", rate: 92 },
    { month: "Mar", rate: 96 },
    { month: "Apr", rate: 88 },
    { month: "May", rate: 94 },
    { month: "Jun", rate: 97 },
  ];

  const performanceData = [
    { subject: "Math", score: 85 },
    { subject: "English", score: 92 },
    { subject: "Science", score: 88 },
    { subject: "History", score: 90 },
    { subject: "Art", score: 95 },
  ];

  const gradeDistribution = [
    { grade: "A", count: 45, percentage: 37.5 },
    { grade: "B", count: 38, percentage: 31.7 },
    { grade: "C", count: 25, percentage: 20.8 },
    { grade: "D", count: 12, percentage: 10.0 },
  ];

  const TabButton = ({ id, icon: Icon, label, active, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
        active
          ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg"
          : "bg-white text-gray-600 hover:bg-pink-50 hover:text-pink-600"
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );

  const StatCard = ({ title, value, icon: Icon, trend }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <p className="text-2xl font-bold text-gray-800">{value}</p>
          {trend && <p className="text-green-600 text-sm mt-1">↗ {trend}</p>}
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-3 rounded-lg">
          <Icon className="text-white" size={24} />
        </div>
      </div>
    </div>
  );

  const SimpleChart = ({ data, type }) => {
    const maxValue = Math.max(...data.map((d) => d.rate || d.score || d.count));

    return (
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-16 text-sm text-gray-600">
              {item.month || item.subject || item.grade}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${
                    ((item.rate || item.score || item.count) / maxValue) * 100
                  }%`,
                }}
              />
            </div>
            <div className="w-12 text-sm font-semibold text-gray-700">
              {item.rate || item.score || item.count}
              {type === "attendance" && "%"}
              {type === "grades" && ` (${item.percentage}%)`}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const getCurrentData = () => {
    switch (activeTab) {
      case "attendance":
        return attendanceData;
      case "performance":
        return performanceData;
      case "grades":
        return gradeDistribution;
      default:
        return attendanceData;
    }
  };

  const getChartTitle = () => {
    switch (activeTab) {
      case "attendance":
        return "Monthly Attendance Trends";
      case "performance":
        return "Subject Performance";
      case "grades":
        return "Grade Distribution";
      default:
        return "Monthly Attendance Trends";
    }
  };

  return (
    <SidebarLayout title="Reports">
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                School Reports Dashboard
              </h1>
              <p className="text-gray-600 mt-2">
                Comprehensive analytics and performance insights
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-pink-200 hover:bg-pink-50 transition-colors">
                <Filter size={18} />
                Filter
              </button>
              <button className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-shadow">
                <Download size={18} />
                Export
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Students"
              value="1,247"
              icon={Users}
              trend="+12%"
            />
            <StatCard
              title="Average Attendance"
              value="94.2%"
              icon={Calendar}
              trend="+2.1%"
            />
            <StatCard
              title="Performance Score"
              value="87.5"
              icon={TrendingUp}
              trend="+5.3%"
            />
            <StatCard title="Active Reports" value="28" icon={FileText} />
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4 mb-6 overflow-x-auto">
            <TabButton
              id="attendance"
              icon={Calendar}
              label="Attendance"
              active={activeTab === "attendance"}
              onClick={setActiveTab}
            />
            <TabButton
              id="performance"
              icon={TrendingUp}
              label="Performance"
              active={activeTab === "performance"}
              onClick={setActiveTab}
            />
            <TabButton
              id="grades"
              icon={FileText}
              label="Grade Distribution"
              active={activeTab === "grades"}
              onClick={setActiveTab}
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {getChartTitle()}
              </h3>
              <SimpleChart data={getCurrentData()} type={activeTab} />
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:shadow-md transition-shadow">
                    Generate Monthly Report
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors">
                    View Student Analytics
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors">
                    Export Performance Data
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Recent Reports
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 transition-colors">
                    <FileText className="text-pink-500" size={18} />
                    <span className="text-gray-700 text-sm">
                      Attendance Summary - June 2024
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 transition-colors">
                    <FileText className="text-pink-500" size={18} />
                    <span className="text-gray-700 text-sm">
                      Performance Analysis - Q2
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-pink-50 transition-colors">
                    <FileText className="text-pink-500" size={18} />
                    <span className="text-gray-700 text-sm">
                      Grade Distribution - Term 2
                    </span>
                  </div>
                </div>
              </div>

              {/* Summary Stats */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-pink-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Summary Statistics
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Classes</span>
                    <span className="font-semibold text-pink-600">42</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Active Teachers</span>
                    <span className="font-semibold text-purple-600">28</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Average Grade</span>
                    <span className="font-semibold text-pink-600">B+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Completion Rate</span>
                    <span className="font-semibold text-purple-600">96.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default ReportsPage;
