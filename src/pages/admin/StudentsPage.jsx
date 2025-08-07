import React, { useState } from "react";
import {
  Search,
  Filter,
  UserPlus,
  Users,
  Star,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import SidebarLayout from "../../layouts/SidebarLayout";

export default function StudentsPage() {
  const [selectedCampus, setSelectedCampus] = useState("Dakata Campus");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const studentsData = [
    {
      id: 1,
      fullName: "Aisha Bello",
      admissionNumber: "SS1001",
      class: "SS 3",
      status: "Active",
      age: 17,
      gender: "Female",
      performance: "Excellent",
      attendance: 95,
      phone: "08012345678",
      email: "aisha@example.com",
      address: "Kano, Nigeria",
      fees: {
        paid: 45000,
        total: 50000,
        balance: 5000,
      },
      avatar: "AB",
      bgColor: "bg-pink-500",
    },
    {
      id: 2,
      fullName: "John Musa",
      admissionNumber: "SS1002",
      class: "SS 2",
      status: "Suspended",
      age: 16,
      gender: "Male",
      performance: "Good",
      attendance: 80,
      phone: "08087654321",
      email: "john@example.com",
      address: "Kaduna, Nigeria",
      fees: {
        paid: 20000,
        total: 50000,
        balance: 30000,
      },
      avatar: "JM",
      bgColor: "bg-blue-500",
    },
  ];

  const filteredStudents = studentsData.filter((student) => {
    const matchesSearch =
      student.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.admissionNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass =
      selectedClass === "All Classes" || student.class === selectedClass;
    const matchesStatus =
      selectedStatus === "All Status" || student.status === selectedStatus;
    return matchesSearch && matchesClass && matchesStatus;
  });

  const getPerformanceIcon = (performance) => {
    switch (performance) {
      case "Excellent":
        return <Star className="w-4 h-4 text-yellow-500" />;
      case "Very Good":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "Good":
        return <AlertCircle className="w-4 h-4 text-blue-500" />;
      case "Average":
        return <Clock className="w-4 h-4 text-orange-500" />;
      default:
        return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const getStatusBadge = (status) => {
    const base = "px-2 py-1 rounded-full text-xs font-medium";
    return status === "Active"
      ? `${base} bg-green-100 text-green-800`
      : status === "Suspended"
      ? `${base} bg-red-100 text-red-800`
      : status === "Graduated"
      ? `${base} bg-blue-100 text-blue-800`
      : `${base} bg-gray-100 text-gray-800`;
  };

  const StudentCard = ({ student }) => (
    <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-6">
      <div className="flex items-center mb-4">
        <div
          className={`w-16 h-16 ${student.bgColor} rounded-full flex items-center justify-center`}
        >
          <span className="text-white font-bold text-xl">{student.avatar}</span>
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-bold">{student.fullName}</h3>
          <p className="text-sm text-gray-600">{student.admissionNumber}</p>
          <div className="mt-1 flex items-center space-x-2">
            <span className="text-sm text-blue-600">{student.class}</span>
            <span className={getStatusBadge(student.status)}>
              {student.status}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-800">
        <div>
          <span className="block font-medium">Age</span>
          {student.age} years
        </div>
        <div>
          <span className="block font-medium">Gender</span>
          {student.gender}
        </div>
        <div className="col-span-2 flex items-center">
          {getPerformanceIcon(student.performance)}
          <span className="ml-1">{student.performance}</span>
        </div>
        <div>
          <span className="block font-medium">Attendance</span>
          {student.attendance}%
        </div>
      </div>

      <div className="space-y-1 mb-4 text-gray-600">
        <div className="flex items-center space-x-2">
          <Phone />
          <span>{student.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail />
          <span>{student.email}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin />
          <span>{student.address}</span>
        </div>
      </div>

      <div className="border-t pt-2 mb-4 text-gray-800">
        <div className="flex justify-between">
          <span>Fees Paid</span>
          <span>
            ₦{student.fees.paid.toLocaleString()} / ₦
            {student.fees.total.toLocaleString()}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-1 overflow-hidden">
          <div
            className={`h-2 ${
              student.fees.balance === 0 ? "bg-green-500" : "bg-blue-500"
            }`}
            style={{
              width: `${(student.fees.paid / student.fees.total) * 100}%`,
            }}
          />
        </div>
        {student.fees.balance > 0 && (
          <p className="text-xs text-red-600 mt-1">
            Balance: ₦{student.fees.balance.toLocaleString()}
          </p>
        )}
      </div>

      <div className="pt-2 flex justify-between">
        <button className="text-blue-600 hover:text-blue-800 flex items-center space-x-1 text-sm">
          <Eye />
          <span>View</span>
        </button>
        <div className="flex space-x-2">
          <button className="p-2 hover:bg-blue-50 rounded">
            <Edit />
          </button>
          <button className="p-2 hover:bg-red-50 rounded">
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <SidebarLayout title={`Students – ${selectedCampus}`}>
      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="relative w-full sm:w-1/2">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            className="w-full pl-10 pr-4 py-2 border rounded focus:ring-pink-500"
            placeholder="Search by name or admission number…"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="px-4 py-2 border rounded focus:ring-pink-500"
        >
          <option>All Classes</option>
          <option>SS 1</option>
          <option>SS 2</option>
          <option>SS 3</option>
        </select>
        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-2 border rounded focus:ring-pink-500"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Suspended</option>
          <option>Graduated</option>
        </select>
        <button className="px-4 py-2 border rounded hover:bg-gray-50 flex items-center space-x-2">
          <Filter />
          <span>More Filters</span>
        </button>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded flex items-center space-x-2">
          <UserPlus />
          <span>Add Student</span>
        </button>
      </div>

      {/* Student Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {/* No Results */}
      {filteredStudents.length === 0 && (
        <div className="text-center py-16 text-gray-600">
          <Users className="mx-auto mb-4 w-16 h-16" />
          <h3 className="text-lg font-semibold">No students found</h3>
          <p>Try adjusting your search or filters.</p>
        </div>
      )}
    </SidebarLayout>
  );
}
