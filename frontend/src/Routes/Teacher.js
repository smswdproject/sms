import React, { useState } from "react";
import LeftScreenDashboard from "../components/LeftScreenDashboard/LeftScreenDashboard";
import RightAdmin from "../components/AdminComponents/AdminRight";

import SubjectCard from './SubjectCard';

function Teacher() {
  const [teacher, setTeacher] = useState("Teacher");
  
  return (
    <div>
      <div className="bg-lavender font-poppins text-black-blue flex">
        <div className="w-1/5 h-screen">
          <LeftScreenDashboard></LeftScreenDashboard>
        </div>

        <div className="w-4/5 h-screen ">
          <RightAdmin value={teacher}></RightAdmin>
          
            <SubjectCard/>
        
        </div>
      </div>
      
    </div>
  );
}

export default Teacher;
