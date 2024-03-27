import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RiAdminLine } from "react-icons/ri";
import StudentRight from "../StudentComponents/StudentRight";

import axios from 'axios';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import { useDropzone } from 'react-dropzone';
import StudentCard from "../../Routes/SubjectCard"
import SubjectCard from "../../Routes/SubjectCard";

const override = css`
  display: block;
  margin: 0 auto;
`;


function TeacherResult() {

    const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.xlsx, .xls',
  });

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file: ', error);
      alert('Error uploading file');
    } finally {
      setLoading(false);
    }
  };

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
    <div className='hover:text-custom-color cursor-pointer' onClick={()=>{navigate(-1)}}>Dashboad</div>
    <div className='hover:text-custom-color cursor-pointer' >Profile</div>
    <div className='hover:text-custom-color cursor-pointer' >Attendance</div>
    <div className='hover:text-custom-color cursor-pointer' > Result</div>
    <div className='hover:text-custom-color cursor-pointer' >Syllabus </div>
    <div className='hover:text-custom-color cursor-pointer' >Fee</div>
  </div>

</div>
  
      </div>

      <div className="w-4/5 h-screen">
        <StudentRight value={dashboard}></StudentRight>

        <SubjectCard></SubjectCard>

    
    
        
        
      </div>
    </div>
    )
}

export default TeacherResult;