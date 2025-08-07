import React, { useState } from "react";
import { Users, Plus, Save, X, Edit } from "lucide-react";
import SidebarLayout from "../../layouts/SidebarLayout";
import TeacherRow from "../../components/TeacherRow";

const TeachersPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: "Mrs. Janet Doe",
      email: "janet.doe@school.com",
      phone: "+2348012345678",
      address: "15 Independence Ave, Abuja",
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
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Mr. James Smith",
      email: "james.smith@school.com",
      phone: "+2348023456789",
      address: "22 Unity Rd, Lagos",
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
      image: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ]);

  const [newTeacher, setNewTeacher] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    subject: "",
    department: "",
    qualification: "",
    experience: "",
    salary: "",
    joinDate: "",
    schedule: "",
    status: "active",
    performance: "Good",
    rating: 4.0,
    classes: 0,
    students: 0,
    image: "",
  });

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTeacher = () => {
    const newEntry = {
      ...newTeacher,
      id: teachers.length + 1,
      image:
        newTeacher.image ||
        `https://randomuser.me/api/portraits/lego/${Math.floor(
          Math.random() * 10
        )}.jpg`,
    };
    setTeachers([...teachers, newEntry]);
    setNewTeacher({
      name: "",
      email: "",
      phone: "",
      address: "",
      subject: "",
      department: "",
      qualification: "",
      experience: "",
      salary: "",
      joinDate: "",
      schedule: "",
      status: "active",
      performance: "Good",
      rating: 4.0,
      classes: 0,
      students: 0,
      image: "",
    });
    setShowAddModal(false);
  };

  return (
    <SidebarLayout title="Teachers">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search teachers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/3 focus:ring-purple-500"
        />
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          <Plus className="w-4 h-4" />
          Add Teacher
        </button>
      </div>

      {filteredTeachers.length > 0 ? (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Department
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredTeachers.map((teacher) => (
                <TeacherRow key={teacher.id} teacher={teacher} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-600 py-12">
          <Users className="w-16 h-16 mx-auto mb-4" />
          <h2 className="text-xl font-semibold">No teachers found</h2>
          <p>Try adjusting your search or filters.</p>
        </div>
      )}

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-2xl p-6 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-xl font-semibold">Add New Teacher</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <X />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={newTeacher.name}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, name: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                value={newTeacher.email}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, email: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={newTeacher.phone}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, phone: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Subject"
                value={newTeacher.subject}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, subject: e.target.value })
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Department"
                value={newTeacher.department}
                onChange={(e) =>
                  setNewTeacher({ ...newTeacher, department: e.target.value })
                }
                className="border p-2 rounded"
              />
            </div>

            <div className="flex justify-end pt-4 border-t">
              <button
                onClick={handleAddTeacher}
                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
              >
                <Save className="w-4 h-4" />
                Save Teacher
              </button>
            </div>
          </div>
        </div>
      )}
    </SidebarLayout>
  );
};

export default TeachersPage;
