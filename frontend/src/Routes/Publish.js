import React, { useState } from 'react'
import LeftScreenDashboard from '../components/LeftScreenDashboard.jsx/LeftScreenDashboard';
import RightAdmin from '../components/DashboadComponents/AdminRight';
function Publish() {
  const [publish,setPublish]=useState("Publish");

  return (
    <div className='bg-lavender font-poppins text-black-blue flex'>
        <div className='w-1/5 h-screen'>
          <LeftScreenDashboard></LeftScreenDashboard>
        </div>
      
        <div className='w-4/5 h-screen'>
          <RightAdmin value={publish}></RightAdmin>
        </div>
   </div>
  )
}

export default Publish