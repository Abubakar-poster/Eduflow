// src/pages/admin/TeachersPage.jsx

import React, { useState, useEffect } from "react";
import {
  Users,
  MessageCircle,
  Edit,
  XCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Calendar,
  Clock,
  TrendingUp,
} from "lucide-react";
import SidebarLayout from "../../components/SidebarLayout";
import TeacherRow from "../../components/TeacherRow";

const TeachersPage = () => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Mrs. Janet Doe",
      email: "janet.doe@school.com",
      phone: "+2348012345678",
      address: "15 Independence Ave, Abuja",
      emergencyContact: "+2348098765432",
      subject: "Mathematics",
      department: "Science",
      qualification: "M.Sc. Mathematics",
      experience: 8,
      salary: "₦280,000",
      joinDate: "2017-03-15",
      schedule: "Mon-Fri, 8am-2pm",
      status: "active",
      performance: "Outstanding",
      rating: 4.9,
      classes: 6,
      students: 180,
      lastLogin: "2025-07-04T09:30:00",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Mr. James Smith",
      email: "james.smith@school.com",
      phone: "+2348023456789",
      address: "22 Unity Rd, Lagos",
      emergencyContact: "+2348087654321",
      subject: "English",
      department: "Languages",
      qualification: "B.A. English",
      experience: 6,
      salary: "₦250,000",
      joinDate: "2019-09-01",
      schedule: "Mon-Fri, 9am-3pm",
      status: "on leave",
      performance: "Excellent",
      rating: 4.5,
      classes: 4,
      students: 150,
      lastLogin: "2025-07-02T14:45:00",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ]);

  const sortedAndFilteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRowClick = (teacher) => {
    setSelectedTeacher(teacher);
    setShowDetailsModal(true);
  };

  return (
    <SidebarLayout title="Teachers">
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Teachers</h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Add Teacher
          </button>
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Search teachers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {sortedAndFilteredTeachers.length > 0 ? (
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Students
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Salary
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedAndFilteredTeachers.map((teacher) => (
                  <TeacherRow
                    key={teacher.id}
                    teacher={teacher}
                    onClick={() => handleRowClick(teacher)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Users className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              No Teachers Found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Details Modal */}
        {showDetailsModal && selectedTeacher && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            {/* The modal UI you gave me continues from here */}
            {/* You can paste the existing modal code from your version below */}
          </div>
        )}

        {/* Add Teacher Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            {/* You can paste the existing Add Teacher Modal code here */}
          </div>
        )}
      </div>
    </SidebarLayout>
  );
};

export default TeachersPage;
