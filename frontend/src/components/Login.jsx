import React from 'react'

import LoginModal from './LoginComponents/LoginModal'

function Login({ setIsLoggedIn, isLoggedIn }) {
  return (
    <div className='flex flex-col h-screen w-screen'>
      <div className='h-1/3 flex flex-col justify-center items-center'>
        <div className='font-sans text-8xl font-semibold'>Indo-Swiss Training Centre</div>
        <div className='text-7xl font-normal'>CSIR-CSIO</div>
        <div className='text-4xl font-normal'>Chandigarh</div>
      </div>
      <LoginModal isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></LoginModal>
    </div>
  )
}

export default Login
