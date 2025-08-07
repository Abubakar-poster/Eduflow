import React, { useState } from "react";
import SidebarLayout from "../../layouts/SidebarLayout";
import {
  Users,
  UserCheck,
  Shield,
  DollarSign,
  CreditCard,
  BarChart3,
} from "lucide-react";
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  Area,
} from "recharts";

export default function Dashboard() {
  const [selectedCampus, setSelectedCampus] = useState("Dakata Campus");

  const statsCards = [
    {
      icon: Users,
      title: "STUDENTS",
      value: "48",
      bgColor: "bg-gradient-to-r from-blue-400 to-blue-600",
      iconBg: "bg-blue-500",
    },
    {
      icon: UserCheck,
      title: "TEACHERS",
      value: "7",
      bgColor: "bg-gradient-to-r from-gray-600 to-gray-800",
      iconBg: "bg-gray-700",
    },
    {
      icon: Shield,
      title: "ADMINISTRATORS",
      value: "4",
      bgColor: "bg-gradient-to-r from-green-400 to-green-600",
      iconBg: "bg-green-500",
    },
    {
      icon: DollarSign,
      title: "THIS MONTH TOTAL FEE",
      value: "₦1820",
      bgColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      iconBg: "bg-yellow-500",
    },
    {
      icon: CreditCard,
      title: "THIS MONTH PAID FEE",
      value: "₦1130",
      bgColor: "bg-gradient-to-r from-pink-500 to-purple-600",
      iconBg: "bg-pink-500",
    },
    {
      icon: CreditCard,
      title: "THIS MONTH UNPAID FEE",
      value: "₦690",
      bgColor: "bg-gradient-to-r from-orange-400 to-orange-600",
      iconBg: "bg-orange-500",
    },
  ];

  const genderStudentsData = [
    { name: "Male Students", value: 63.3, color: "#ec4899" },
    { name: "Female Students", value: 36.7, color: "#f472b6" },
  ];

  const genderTeachersData = [
    { name: "Male Teachers", value: 65.7, color: "#a855f7" },
    { name: "Female Teachers", value: 34.3, color: "#c084fc" },
  ];

  const usersCountData = [
    { name: "Students", value: 48, color: "#8b5cf6" },
    { name: "Teachers", value: 7, color: "#ec4899" },
    { name: "Admins", value: 4, color: "#f472b6" },
  ];

  const sessionStudentsData = [
    { month: "Jan", students: 15 },
    { month: "Feb", students: 18 },
    { month: "Mar", students: 22 },
    { month: "Apr", students: 20 },
    { month: "May", students: 25 },
    { month: "Jun", students: 28 },
    { month: "Jul", students: 30 },
    { month: "Aug", students: 25 },
    { month: "Sep", students: 22 },
    { month: "Oct", students: 18 },
    { month: "Nov", students: 15 },
    { month: "Dec", students: 12 },
  ];

  const CustomPieChart = ({ data, title }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <div className="flex items-center justify-between">
        <div className="w-32 h-32">
          <ResponsiveContainer width="100%" height="100%">
            <RechartsPieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={60}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} />
                ))}
              </Pie>
            </RechartsPieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-col space-y-2">
          {data.map((entry, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-sm text-gray-600">{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <SidebarLayout title={`Dashboard – ${selectedCampus}`}>
      <div className="flex justify-end mb-4">
        <select
          value={selectedCampus}
          onChange={(e) => setSelectedCampus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option>Dakata Campus</option>
          <option>Zango Campus</option>
          <option>Rangaza Campus</option>
        </select>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
        {statsCards.map((card, i) => (
          <div
            key={i}
            className={`${card.bgColor} p-4 rounded-xl text-white shadow`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className={`p-2 rounded-lg ${card.iconBg}`}>
                <card.icon className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">{card.value}</span>
            </div>
            <p className="text-sm">{card.title}</p>
          </div>
        ))}
      </div>

      {/* Pie Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <CustomPieChart
          data={genderStudentsData}
          title="Gender Wise Students"
        />
        <CustomPieChart
          data={genderTeachersData}
          title="Gender Wise Teachers"
        />
      </div>

      {/* Users Count Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Users Count
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={usersCountData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value">
              {usersCountData.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Area Chart for Monthly Students */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Session Wise Students
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={sessionStudentsData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Area
              type="monotone"
              dataKey="students"
              stroke="#8b5cf6"
              fill="#8b5cf6"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </SidebarLayout>
  );
}
