import React from 'react'

import RightScreen from './RightScreen'

function Login({ setIsLoggedIn, isLoggedIn }) {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='h-2/5 flex flex-col justify-center items-center'>
        <div className='font-sans text-8xl font-semibold'>Indo-Swiss Training Centre</div>
        <div className='text-7xl font-normal'>CSIR-CSIO</div>
        <div className='text-4xl font-normal'>Chandigarh</div>
      </div>
      <RightScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></RightScreen>
    </div>
  )
}

export default Login
