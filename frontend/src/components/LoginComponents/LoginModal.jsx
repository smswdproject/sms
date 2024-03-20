import React from 'react'
import './LoginModal.css';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";

<<<<<<< HEAD
function LoginModal({setIsLoggedIn,isLoggedIn}) {
   
    const [selectedRole,setSelectedRole]=useState("");
=======
function LoginModal({ setIsLoggedIn, isLoggedIn }) {
    const [selectedRole, setSelectedRole] = useState("");
>>>>>>> b5baccbcbdb2d7901727383799329087cbd5466d

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: ""
    })

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();
        // signIn ho gya
        setIsLoggedIn(true);
        formData.role = selectedRole;
        //console.log(formData);


        // toast.success("Logged In");
        // if(formData.email==="admin@email.com" && formData.password==="Admin@123"){
        //     navigate("/dashboard");
        // }
        const url = "http://localhost:3000/login";
        const response = await axios.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
        console.log("Response is----->", response);

        if (response.status === 200) {
            if (formData.role === "admin") {
                navigate("/admin-dashboard");
            }
            else if (formData.role === "student") {
                navigate("/student-dashboard");
            }
            else if (formData.role === "teacher") {
                navigate("/teacher-dashboard");
            }
        }
    }


    function changeHandler(event) {

        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }


    function handlerChange(e) {
        e.preventDefault();
        setSelectedRole(e.target.value);
        console.log("Role on frontend is ---->", selectedRole)
    }
<<<<<<< HEAD
  return (
    <div className='flex items-center justify-center h-screen font-poppins'>
        <div className='w-[480px] h-[480px]  flex flex-col justify-center items-start gap-8'>
            
            <div className='flex w-screen gap-4'>
                <h1 className='text-4xl font-extralight'>Login As</h1>
                <select name="role" id="role" value={selectedRole} onChange={handlerChange}>
                    <option value="">Select Role</option>
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="student">Student</option>
                </select>
            </div>
        
            <form  onSubmit={submitHandler} className='flex flex-col w-full gap-4' >
            <div className=''>
                <label>
                        <p className=''>Email address <sup className='text-pink-500'
                        >*</sup>
                        </p>
=======
    return (
        <div className='h-screen w-screen flex justify-center items-center font-poppins background'>
>>>>>>> b5baccbcbdb2d7901727383799329087cbd5466d

            <div className='flex flex-col justify-center items-start gap-8 modal-box'>
                <div className='flex w-full gap-4'>
                    <h1 className=' text-4xl font-medo  '>Login As</h1>
                    <select className='bg-inherit' name="role" id="role" value={selectedRole} onChange={handlerChange}>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                </div>

                <form onSubmit={submitHandler} className='w-full flex flex-col gap-4' >

<<<<<<< HEAD
            <div>
                <label className='relative w-full'>
=======
                    <div>
                        <label>
                            <p className=''>Email address <sup className='text-pink-500'
                            >*</sup>
                            </p>

                            <input required
                                type="email"
                                value={formData.email}
                                onChange={changeHandler}
                                placeholder='name@email.com'
                                name="email"
                                className='input-n-button bg-transparent input-field'
                            ></input>
                        </label>
                    </div>


                    <div>
                        <label className='relative'>
>>>>>>> b5baccbcbdb2d7901727383799329087cbd5466d
                            <p >Password <sup className='text-pink-500'
                            >*</sup>
                            </p>

<<<<<<< HEAD
                        <input required 
                            type={showPassword?("text"):("password")}
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder='********'
                            name="password"
                            className='relative input-n-button'
=======
                            <input required
                                type={showPassword ? ("text") : ("password")}
                                value={formData.password}
                                onChange={changeHandler}
                                placeholder='********'
                                name="password"
                                className='input-n-button relative'
>>>>>>> b5baccbcbdb2d7901727383799329087cbd5466d
                            ></input>

                            <span onClick={() => setShowPassword((prev) => !prev)}
                                className='absolute right-3 top-[38px] cursor-pointer '>
                                {!showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>)}
                            </span>

<<<<<<< HEAD
                        <Link to="#">
                              <p className='ml-auto text-xs text-blue-100 max-w-max '>Forget Password</p>
                        </Link>
                    </label>
=======
                            <Link to="#">
                                <p className='text-xs text-blue-100 max-w-max ml-auto '>Forget Password</p>
                            </Link>
                        </label>
                    </div>


                    <button className='input-n-button text-white bg-custom-color' onClick={() => {isLoggedIn = true}}>Login</button>


                    <div>
                        <button className='input-n-button'>
                            <FcGoogle />
                            Authorize with google</button>
                    </div>

                </form>

>>>>>>> b5baccbcbdb2d7901727383799329087cbd5466d
            </div>


<<<<<<< HEAD
              {/* <div>
                 <input type='checkbox'
                 name='checkBox'
                 id='checkbox'
                 />
                 <label htmlFor='checkbox'>Remember me</label>
              </div> */}


                <button  className='text-white input-n-button bg-custom-color' onClick={()=>{
                    isLoggedIn=true
                }}
               >Login</button>


              <div>
                <button  className='input-n-button'>
                <FcGoogle />
                Authorize with google</button>
              </div>
                
               
            </form>
=======
>>>>>>> b5baccbcbdb2d7901727383799329087cbd5466d
        </div>
    )
}

export default LoginModal
