import React from 'react'
import StudentProfileForm from "./StudentProfileForm"
import StudentLeft from "./StudentLeft"
import StudentRight from "./StudentRight"

function StudentProfile() {
  return (
    <div className='bg-lavender font-poppins text-black-blue flex'>
        <div className='w-1/5 h-screen'>
          <StudentLeft/>
        </div>
      
        <div className='w-4/5 h-screen'>
          <StudentRight value={"Edit your Student Profile "}></StudentRight>
          <StudentProfileForm/>
        </div>
    </div>
  )
}

export default StudentProfile