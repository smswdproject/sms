import React from 'react'

function StudentRight(props) {
  return (
    <div className='flex justify-center' >
        <div className='bg-white w-screen flex items-center justify-start h-20 p-4 m-4 rounded-2xl'>
          <h1 className='text-4xl font-semibold'>{props.value}</h1>
        </div>
    </div>
  )
}

export default StudentRight