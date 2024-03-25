import React from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./CreateUser.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreateUser({ setIsLoggedIn, isLoggedIn }) {
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
          <h1 className=" text-4xl font-extralight  ">Create User</h1>
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

export default CreateUser;
