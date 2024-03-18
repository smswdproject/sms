import React from 'react'

import RightScreen from './RightScreen'

function Login({setIsLoggedIn,isLoggedIn}) {
  return (
    <div>
        <div className='bg-custom-color h-screen w-2/4'>
        {/* <img src={img2}/> */}
        </div>
    <RightScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></RightScreen>
    </div>
  )
}

export default Login
