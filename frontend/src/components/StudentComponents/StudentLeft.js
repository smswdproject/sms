import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RiAdminLine } from "react-icons/ri";

function StudentLeft() {
  const navigate = useNavigate();
  function onClickHandlerD() {
    navigate("/dashboard");
  }

  function onClickHandlerPub() {
    navigate("/profile");
  }

  function onClickHandlerAtt() {
    navigate("/attendance");
  }

  function onClickHandlerRes() {
    navigate("/result");
  }

  function onClickHandlerSyll() {
    navigate("/syllabus")
  }

  function onClickHandlerFee() {
    navigate("/fee")
  }

 


  return (

    <div className='flex flex-col gap-1'>
      {/* Admin Title bar */}
      <div className=" flex justify-center items-end h-32 bg-white ">
        <h1 className='flex font-normal text-3xl pb-3'>
          <RiAdminLine /> Student
        </h1>
      </div>


      {/* Menu bar */}
      <div className='bg-white w-full h-screen flex flex-col pt-8 pl-12 gap-4 '>
        <div className='hover:text-custom-color cursor-pointer' onClick={onClickHandlerD}>Dashboad</div>
        <div className='hover:text-custom-color cursor-pointer' onClick={()=>{navigate("/student-dashboard/student-profile")}}>Profile</div>
        <div className='hover:text-custom-color cursor-pointer' onClick={onClickHandlerAtt}>Attendance</div>
        <div className='hover:text-custom-color cursor-pointer' onClick={onClickHandlerRes}>Result</div>
        <div className='hover:text-custom-color cursor-pointer' onClick={onClickHandlerSyll}>Syllabus </div>
        <div className='hover:text-custom-color cursor-pointer' onClick={onClickHandlerFee}>Fee</div>
      </div>

    </div>
  )
}

export default StudentLeft
