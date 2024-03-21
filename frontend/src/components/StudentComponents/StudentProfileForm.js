import React from "react";
import { useState } from "react";
// import DatePicker from 'react-date-picker';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";

import "react-country-state-city/dist/react-country-state-city.css";

const StudentProfileForm = () => {
  const [image, setImage] = useState(null);
  const [countryid, setCountryid] = useState(101);
  const [stateid, setstateid] = useState(0);

  const [startDate, setStartDate] = useState("04/23/2005");
  //const [roll,setRoll]=useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "onkar@gmail.com",
    roll1: "",
    roll2: "",
    rollNo: "",
    contactNo: "",
    gender: "",
    DOB: "",
    fatherName: "",
    motherName: "",
    address: "",
    state: "",
    city: "",
    pinCode: "",
    image: ""
  });

  function handleChange(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function handleFileChange(e) {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      formData.rollNo = formData.roll1 + formData.roll2;
      formData.DOB = startDate;
      formData.append("image", image)

      // Here you can perform any actions you want with the form data
      console.log("Form Data is----> ", formData);

      const url = "http://localhost:3000/api/v1/student/update";

      const response = await axios.put(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response of student profile axios req------>".response);
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="h-screen overflow-scroll font-poppins gap-y-2">
        <div className="flex-col justify-center mt-56 item-center">
          <div className="max-w-[420px] mx-auto">
            <h1 className="mb-3 text-lg font-bold">
              Create Profile for Student
            </h1>

            {/* Name of student */}

            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name <sup className="text-pink-500">*</sup>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                name="name"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-start mb-5"></div>

            {/* Date Of birth */}
            <label
              htmlFor="DOB"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date Of Birth <sup className="text-pink-500">*</sup>
            </label>
            <DatePicker
              className=" bg-gray-50 border border-gray-300 text-gray-900 
            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
              dark:focus:ring-blue-500 dark:focus:border-blue-500"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />

            <div className="flex items-start mb-5"></div>

            {/* FatherName  */}
            <div>
              <label
                htmlFor="fatherName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Father Name <sup className="text-pink-500">*</sup>
              </label>
              <input
                type="text"
                id="fatherName"
                value={formData.fatherName}
                name="fatherName"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-start mb-5"></div>

            {/* Mother's name */}
            <div className="">
              <label
                htmlFor="motherName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mother Name <sup className="text-pink-500">*</sup>
              </label>
              <input
                type="text"
                id="motherName"
                value={formData.motherName}
                name="motherName"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-start mb-5"></div>

            {/* contact number */}
            <div>
              <label
                htmlFor="contactNo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contact Number <sup className="text-pink-500">*</sup>
              </label>
              <input
                type="number"
                id="contactNo"
                placeholder="+91"
                maxLength={10}
                value={formData.contactNo}
                name="contactNo"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div className="flex items-start mb-5"></div>

            {/* Gender */}
            <div className="max-w-[420px] mx-auto mb-5">
              <label
                htmlFor="gender"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Gender <sup className="text-pink-500">*</sup>
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                name="gender"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="">Choose</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Address */}
            <div className="mb-5">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Address <sup className="text-pink-500">*</sup>
              </label>
              <textarea
                type="text"
                id="address"
                value={formData.address}
                name="address"
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            {/* Select state and city */}
            <div>
              <h6>
                State <sup className="text-pink-500">*</sup>
              </h6>
              <StateSelect
                countryid={countryid}
                onChange={(e) => {
                  setstateid(e.id);
                  console.log("State Select --->", e.name);
                  formData.state = e.name;
                }}
                placeHolder="Select State"
              />
              <div className="flex items-start mb-5"></div>
              <h6>
                City <sup className="text-pink-500">*</sup>
              </h6>
              <CitySelect
                countryid={countryid}
                stateid={stateid}
                onChange={(e) => {
                  console.log("City Inside Country is----> ", e.name);
                  formData.city = e.name;
                }}
                placeHolder="Select City"
              />
            </div>
            <div className="flex items-start mb-5"></div>

            {/* Pincode */}
            <div>
              <label
                htmlFor="pinCode"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Pincode <sup className="text-pink-500">*</sup>
              </label>
              <input
                type="number"
                id="pinCode"
                value={formData.pinCode}
                name="pinCode"
                onChange={handleChange}
                maxLength={10}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            {/* Enter rollNonumber */}
            <div className="flex justify-center w-full mt-4 mb-5 gap-x-8">
              <div>
                <label
                  htmlFor="roll1"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Roll Number <sup className="text-pink-500">*</sup>
                </label>
                <select
                  id="roll1"
                  value={formData.roll1}
                  onChange={handleChange}
                  name="roll1"
                  //   value={formData.gender}
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected="">Choose</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </select>
              </div>

              {/* roll2 */}
              <div className="">
                <label
                  htmlFor="roll2"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter values from 001 to 180{" "}
                  <sup className="text-pink-500">*</sup>
                </label>
                <input
                  type="text"
                  id="roll2"
                  value={formData.roll2}
                  name="roll2"
                  min={1}
                  max={180}
                  maxLength={3}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 w-[300px]
               text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block  p-2.5 dark:bg-gray-700
                 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500
                 dark:focus:border-blue-500 mt-5"
                  required=""
                />
              </div>
            </div>

            {/* To upload the image of the student */}
            <div className="max-w-[420px] mx-auto">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="user_avatar"
              >
                Upload file <sup className="text-pink-500">*</sup>
              </label>
              <input
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                aria-describedby="user_avatar_help"
                value={formData.image}
                // onChange={handleChange}
                id="image"
                type="file"
                name="image"
                // accept="image/*"
                onChange={handleFileChange}
              />
              <div
                className="mt-4 text-sm text-gray-500 dark:text-gray-300"
                id="user_avatar_help"
              >
                A profile picture is useful to confirm your are logged into your
                account
              </div>

              <button
                type="submit"
                className="mt-4 text-white bg-blue-700
             hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center
               dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StudentProfileForm;
