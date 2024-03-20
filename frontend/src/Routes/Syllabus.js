import React, { useState } from 'react'
import LeftScreenDashboard from '../components/LeftScreenDashboard.jsx/LeftScreenDashboard';
import RightAdmin from '../components/AdminComponents/AdminRight';
import StudentModal from '../components/TeacherComponents/StudentModal';

function Syllabus() {
  const [syllabus,setSyllabus]=useState("Syllabus");

  return (
    <div className='bg-lavender font-poppins text-black-blue flex'>
        <div className='w-1/5 h-screen'>
          <LeftScreenDashboard></LeftScreenDashboard>
        </div>
      
        <div className='w-4/5 h-screen'>
          <RightAdmin value={syllabus}></RightAdmin>
          <StudentModal/>
        </div>
   </div>
  )
}

export default Syllabus
