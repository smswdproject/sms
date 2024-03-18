import React, { useState } from "react";

const AttendanceTable = ({ students }) => {
  const [editableStudents, setEditableStudents] = useState(students);
  const [totalAttendance, setTotalAttendance] = useState(100); // Default total attendance
  const [sortOrder, setSortOrder] = useState({ field: null, order: "asc" });

  
  const handleAttendanceChange = (index, value) => {
    const updatedStudents = [...editableStudents];
    updatedStudents[index].attendance = value;
    setEditableStudents(updatedStudents);
    // console.log({editableStudents})
  };

  const handleTotalAttendanceChange = (e) => {
    const total = parseInt(e.target.value);
    setTotalAttendance(total);
  };

  const sortByName = () => {
    const sortedStudents = [...editableStudents].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return sortOrder.order === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setEditableStudents(sortedStudents);
    setSortOrder({
      field: "name",
      order: sortOrder.order === "asc" ? "desc" : "asc",
    });
  };

  const sortByRollNo = () => {
    const sortedStudents = [...editableStudents].sort((a, b) => {
      return sortOrder.order === "asc"
        ? a.rollNo - b.rollNo
        : b.rollNo - a.rollNo;
    });
    setEditableStudents(sortedStudents);
    setSortOrder({
      field: "rollNo",
      order: sortOrder.order === "asc" ? "desc" : "asc",
    });
  };

  const sortByAttendance = () => {
    const sortedStudents = [...editableStudents].sort((a, b) => {
      return sortOrder.order === "asc"
        ? a.attendance - b.attendance
        : b.attendance - a.attendance;
    });
    setEditableStudents(sortedStudents);
    setSortOrder({
      field: "attendance",
      order: sortOrder.order === "asc" ? "desc" : "asc",
    });
  };

  return (
    <div>
      <h2>Enter Total number of Days </h2>
      <input
        type="number"
        value={totalAttendance}
        onChange={handleTotalAttendanceChange}
        placeholder="Total Attendance"
      />
      <table style={{ border: "1px solid black", borderCollapse: "collapse" }}>
        <thead className="  text-violet-500">
          <tr>
            <th
              onClick={sortByName}
              style={{
                cursor: "pointer",
                border: "1px solid black",
                padding: "5px",
              }}
            >
              Name{" "}
              {sortOrder.field === "name" &&
                (sortOrder.order === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={sortByRollNo}
              style={{
                cursor: "pointer",
                border: "1px solid black",
                padding: "5px",
              }}
            >
              Roll No{" "}
              {sortOrder.field === "rollNo" &&
                (sortOrder.order === "asc" ? "↑" : "↓")}
            </th>
            <th
              onClick={sortByAttendance}
              style={{
                cursor: "pointer",
                border: "1px solid black",
                padding: "5px",
              }}
            >
              Attendance{" "}
              {sortOrder.field === "attendance" &&
                (sortOrder.order === "asc" ? "↑" : "↓")}
            </th>
          </tr>
        </thead>
        <tbody>
          {editableStudents.map((student, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {student.name}
              </td>
              <td style={{ border: "1px solid black", padding: "5px" }}>
                {student.rollNo}
              </td>

              <td style={{ border: "1px solid black", padding: "5px" }}>

                <input
                  type="number"
                  value={student.attendance}
                  onChange={(e) =>
                    handleAttendanceChange(index, e.target.value)
                  }
                />

                /{totalAttendance}{" "}
                {
                  // Displaying the total attendance in the header
                  totalAttendance !== 0 // Prevent division by zero
                    ? `${(
                        (parseInt(student.attendance) / totalAttendance) *
                        100
                      ).toFixed(2)}%`
                    : "" // Calculate and display percentage
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>


      <div className="    ml-11 mt-6 items-end">
        <button
          type="button"
          class="focus:outline-none text-white bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-500 dark:focus:ring-purple-500"
        > 
          Submit
        </button>
      </div>
    </div>
  );
};

export default AttendanceTable;
