import React, { useState } from 'react'
import LeftScreenDashboard from '../components/LeftScreenDashboard/LeftScreenDashboard';
import RightAdmin from '../components/AdminComponents/AdminRight';

function Fee() {
  const [fee,Setfee]=useState("Fee");
  return (
    <div className='bg-lavender font-poppins text-black-blue flex'>
      <div className='w-1/5 h-screen'>
        <LeftScreenDashboard></LeftScreenDashboard>
      </div>
    
      <div className='w-4/5 h-screen'>
        <RightAdmin value={fee}></RightAdmin>
      </div>
  </div>
  )
}

export default Fee
