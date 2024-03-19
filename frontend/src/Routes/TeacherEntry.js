// import React, { useState } from 'react';
// import axios from 'axios';

// function TeacherEntry() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     subject: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/teachers', formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-poppins">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Teacher Registration</h2>
//         </div>
//         <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <label htmlFor="name" className="sr-only">Name</label>
//               <input id="name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" onChange={handleChange} />
//             </div>
//             <div>
//               <label htmlFor="email" className="sr-only">Email</label>
//               <input id="email" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" onChange={handleChange} />
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" onChange={handleChange} />
//             </div>
//             <div>
//               <label htmlFor="subject" className="sr-only">Subject</label>
//               <input id="subject" name="subject" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Subject" onChange={handleChange} />
//             </div>
//           </div>

//           <div>
//             <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//               <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                 {/* <!-- Heroicon name: solid/lock-closed --> */}
//                 <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                   <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                   <path fillRule="evenodd" d="M4 8a8 8 0 1116 0v4a4 4 0 01-4 4H8a4 4 0 01-4-4V8zm2 0a1 1 0 011-1h6a1 1 0 011 1v4a1 1 0 01-1 1H7a1 1 0 01-1-1V8z" clipRule="evenodd" />
//                 </svg>
//               </span>
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
// )}
//     export default TeacherEntry;

import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./TeacherEntry.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function TeacherEntry({ setIsLoggedIn, isLoggedIn }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const  submitHandler= async (event) => {
    event.preventDefault();

    console.log(formData);
    formData.role = selectedRole;
    
    const url = "http://localhost:3000/createuser/create";
    
    const response = await axios.post(url, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
    toast.success('Successfully Created!');
    console.log("Response after axios.post request in the teacher registration is ----->",response);
    console.log("Message in the response is ",response.data.message)

    if (
      formData.email === "admin@email.com" &&
      formData.password === "Admin@123"
    ) {
      navigate("#");
    }
  }

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handlerChange(e) {
    e.preventDefault();
    setSelectedRole(e.target.value);
    console.log("Role on frontend is ---->", selectedRole);
  }
  return (
    <div className="h-screen top-0 right-0 flex justify-center items-center font-poppins">
      <div className="w-[480px] h-[480px]  flex flex-col justify-center items-start gap-8">
        <div className="flex w-screen gap-4">
          <h1 className=" text-4xl font-extralight  ">Teacher Registration</h1>
        </div>

        <form onSubmit={submitHandler} className="w-full flex flex-col gap-4">
          <div className="">
            <label>
              <p className="">
                Name <sup className="text-pink-500">*</sup>
              </p>

              <input
                required
                type="text"
                value={formData.name}
                onChange={changeHandler}
                placeholder="Enter your name here.."
                name="name"
                className="input-n-button"
              ></input>
            </label>
          </div>

          <div className="">
            <label>
              <p className="">
                Email address <sup className="text-pink-500">*</sup>
              </p>

              <input
                required
                type="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder="name@email.com"
                name="email"
                className="input-n-button"
              ></input>
            </label>
          </div>

          {/* Password */}

          <div>
            <label className="w-full relative">
              <p>
                Password <sup className="text-pink-500">*</sup>
              </p>

              <input
                required
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={changeHandler}
                placeholder="********"
                name="password"
                className="input-n-button relative"
              ></input>

              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-[38px] cursor-pointer "
              >
                {!showPassword ? (
                  <AiOutlineEyeInvisible
                    fontSize={24}
                    fill="#AFB2BF"
                  ></AiOutlineEyeInvisible>
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>
                )}
              </span>

              {/* <Link to="#">
                              <p className='text-xs text-blue-100 max-w-max ml-auto '>Forget Password</p>
                        </Link> */}
            </label>
          </div>

          <div className="flex">
            <div className="flex items-center mx-4">
              <input
                id="default-radio-1"
                type="radio"
                defaultValue=""
                onClick={() => setSelectedRole("student")}
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-1"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Student
              </label>
            </div>
            <div className="flex items-center justify-center">
              <input
                defaultChecked=""
                id="default-radio-2"
                type="radio"
                onClick={() => setSelectedRole("teacher")}
                defaultValue=""
                name="default-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Teacher
              </label>
            </div>
          </div>

          <button className="input-n-button text-white bg-custom-color">
            Register
          </button>

          {/* <div>
                <button  className='input-n-button'>
                <FcGoogle />
                Authorize with google</button>
              </div> */}
        </form>
      </div>
    </div>
  );
}

export default TeacherEntry;
