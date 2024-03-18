import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftScreenDashboard from "../components/LeftScreenDashboard.jsx/LeftScreenDashboard";
import RightAdmin from "../components/DashboadAdmin/RightAdmin";
import AttendanceTable from "../components/attendence/AttendanceTable";
import studentsData from "./data";

function Attendance() {
  const [attendance, setAttendance] = useState("Attendance");

  return (
    <div className="bg-lavender font-poppins text-black-blue flex">
      <div className="w-1/5 h-screen">
        <LeftScreenDashboard></LeftScreenDashboard>
      </div>

      <div className="w-4/5 h-screen">
        <RightAdmin value={attendance}></RightAdmin>
        <AttendanceTable students={studentsData} />
      </div>
    </div>
  );
}

export default Attendance;
