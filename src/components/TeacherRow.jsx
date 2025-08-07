import React from "react";
import { Eye, Edit, Trash2 } from "lucide-react";

const TeacherRow = ({ teacher }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {teacher.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {teacher.subject}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {teacher.students}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {teacher.salary}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
        <button className="text-indigo-600 hover:text-indigo-900">
          <Eye className="w-4 h-4 inline-block" />
        </button>
        <button className="text-green-600 hover:text-green-900">
          <Edit className="w-4 h-4 inline-block" />
        </button>
        <button className="text-red-600 hover:text-red-900">
          <Trash2 className="w-4 h-4 inline-block" />
        </button>
      </td>
    </tr>
  );
};

export default TeacherRow;
