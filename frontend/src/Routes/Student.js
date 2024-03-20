import React, { useState } from 'react'
import LeftScreenDashboard from '../components/LeftScreenDashboard.jsx/LeftScreenDashboard';
import RightAdmin from '../components/DashboadComponents/AdminRight';
import StudentProfileForm from '../components/student/StudentProfileForm';

function Student() {
  const [student,setStudent]=useState("Student");
  return (
    <div className='bg-lavender font-poppins text-black-blue flex'>
        <div className='w-1/5 h-screen'>
          <LeftScreenDashboard></LeftScreenDashboard>
        </div>
      
        <div className='w-4/5 h-screen'>
          <RightAdmin value={student}></RightAdmin>
          <StudentProfileForm/>
        </div>
    </div>
  )
}

export default Student