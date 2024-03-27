import React from 'react'
import StudentLeft from '../components/StudentComponents/StudentLeft';
import StudentRight from '../components/StudentComponents/StudentRight';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiAdminLine } from "react-icons/ri";


function TeacherDashboard() {
  const [dashboard, setDashboard] = useState("Dashboard");

  const navigate = useNavigate();
  // function onClickHandlerD() {
  //   navigate("/dashboard");
  // }

  function onClickHandlerPub() {
    navigate("/profile");
  }
  return (
    <div className="bg-lavender font-poppins text-black-blue flex">
      <div className="w-1/5 h-screen">
      <div className='flex flex-col gap-1'>
      {/* Admin Title bar */}
      <div className=" flex justify-center items-end h-32 bg-white ">
        <h1 className='flex font-normal text-3xl pb-3'>
          <RiAdminLine /> Teacher
        </h1>
      </div>



    {/* Menu bar */}
    <div className='bg-white w-full h-screen flex flex-col pt-8 pl-12 gap-4 '>
    <div className='hover:text-custom-color cursor-pointer' >Dashboad</div>
    <div className='hover:text-custom-color cursor-pointer' onClick={()=>{navigate("#")}}>Profile</div>
    <div className='hover:text-custom-color cursor-pointer' >Attendance</div>
    <div className='hover:text-custom-color cursor-pointer' onClick={()=>navigate("/teacher-dashboard/teacher-result")}  > Result</div>
    <div className='hover:text-custom-color cursor-pointer' >Syllabus </div>
    <div className='hover:text-custom-color cursor-pointer' >Fee</div>
  </div>

</div>
  
      </div>

      <div className="w-4/5 h-screen">
      <div className='flex justify-center' >
        <div className='bg-white w-screen flex items-center justify-start h-20 p-4 m-4 rounded-2xl'>
          <h1 className='text-4xl font-semibold'>Teacher</h1>
        </div>
    </div>
        <h5 className='font-poppins font-bold text-4xl flex justify-center mt-52'>Welcome to Teacher Dashboard</h5>
        
      </div>
    </div>
  );
}

export default TeacherDashboard