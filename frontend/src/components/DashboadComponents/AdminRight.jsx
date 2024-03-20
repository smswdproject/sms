import React from 'react'

function RightAdmin(props) {
  // console.log("Value in Right admin")
  // console.log(props.value);
  // const value=props.value;
  return (
    <div className='flex justify-center' >
        {/* NavBar */}
        <div className='bg-white w-screen flex items-center justify-start h-20 p-4 m-4 rounded-2xl'>
          <h1 className='text-4xl font-semibold'>{props.value}</h1>
        </div>
    </div>
  )
}

export default RightAdmin