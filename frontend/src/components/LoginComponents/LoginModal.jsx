import React from 'react'
import './LoginModal.css';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';

function LoginModal({ setIsLoggedIn, isLoggedIn }) {
    const [selectedRole, setSelectedRole] = useState("");

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        role: ""
    })

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const submitHandler = async (event) => {
        try {
            event.preventDefault();
        
            setIsLoggedIn(true);
            formData.role = selectedRole;

            const url = "http://localhost:3000/login";
            const response = await axios.post(url, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })

            if(response.status === 200) {
                toast.success(`${response.data.message}`);
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
        } catch (error) {
            toast.warning(`${error.response.data.message}`);
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
        // console.log("Role on frontend is ---->", selectedRole);
    }
    return (
        <div className='flex items-center justify-center w-screen h-screen font-poppins background'>

            <div className='flex flex-col items-start justify-center gap-8 modal-box'>
                <div className='flex w-full gap-4'>
                    <h1 className='text-4xl font-medo'>Login As</h1>
                    <select className='bg-inherit' name="role" id="role" value={selectedRole} onChange={handlerChange}>
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="teacher">Teacher</option>
                        <option value="student">Student</option>
                    </select>
                </div>

                <form onSubmit={submitHandler} className='flex flex-col w-full gap-4' >

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
                                className='bg-transparent input-n-button input-field'
                            ></input>
                        </label>
                    </div>


                    <div>
                        <label className='relative'>
                            <p >Password <sup className='text-pink-500'
                            >*</sup>
                            </p>

                            <input required
                                type={showPassword ? ("text") : ("password")}
                                value={formData.password}
                                onChange={changeHandler}
                                placeholder='********'
                                name="password"
                                className='relative input-n-button'
                            ></input>

                            <span onClick={() => setShowPassword((prev) => !prev)}
                                className='absolute right-3 top-[38px] cursor-pointer '>
                                {!showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"></AiOutlineEyeInvisible>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"></AiOutlineEye>)}
                            </span>

                            <Link to="#">
                                <p className='ml-auto text-xs text-blue-100 max-w-max '>Forget Password</p>
                            </Link>
                        </label>
                    </div>


                    <button className='text-white input-n-button bg-custom-color' onClick={() => {isLoggedIn = true}}>Login</button>


                    <div>
                        <button className='input-n-button'>
                            <FcGoogle />
                            Authorize with google</button>
                    </div>

                </form>

            </div>


        </div>
    )
}

export default LoginModal
