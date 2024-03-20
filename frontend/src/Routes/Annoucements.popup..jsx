import React, { useState } from "react";
import LeftScreenDashboard from "../components/LeftScreenDashboard.jsx/LeftScreenDashboard";
// import RightAdmin from '../components/DashboadAdmin/RightAdmin'
import "./announcements-style.css";
// import { FaPlus } from "react-icons/fa6";
import { IoMdCreate } from "react-icons/io";
import { FaSave } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import axios from "axios";
import { MdAnnouncement } from "react-icons/md";

function Annoucements() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const [textContent, setTextContent] = useState("");

  const [title, setTitle] = useState("");

  const [annoucements, setAnnoucements] = useState("Annoucements");
  // console.log(annoucements);

  function changeHandler(event) {
    setTextContent((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  //Handler Submit
  function handleChange(e) {
    setTextContent(e.target.value);
  }
  function handler2(e) {
    setTitle(e.target.value);
  }
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("title", title);
      formData.append("content", textContent);

      const url = "http://localhost:3000/api/v1/announcements/createAnn";
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUploading(false);

      if (response.status == 200) {
        setImageUrl(response.data.imageUrl);
        alert("Announcement created successfully!");
      } else {
        alert("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-lavender font-poppins text-black-blue flex">
      <div className="w-1/5 h-screen">
        <LeftScreenDashboard></LeftScreenDashboard>
      </div>

      <div className="w-4/5 h-screen overflow-x-hidden overflow-y-hidden">
        <div className="flex justify-center">
          {/* NavBar */}
          <div className="bg-white w-screen flex items-center justify-between h-20 p-4 m-4 rounded-2xl">
            <h1 className=" flex text-4xl font-semibold ">
              Annoucement <MdAnnouncement className="ml-4" />
            </h1>

            <button
              className="pr-4 btn-style "
              onClick={() => {
                setShowModal(true);
              }}
            >
              <IoMdCreate />
              Create new
            </button>
          </div>
        </div>

        {/* Cards in the annoucement section */}
        <div className="flex h-screen m-4 rounded-2xl gap-4">
          <div className="card-style">
            <h1>Annoucement 1</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quos
              doloremque ducimus esse deserunt, odio inventore? Voluptatem et
              itaque odio laboriosam quas illo ipsa. Quasi culpa adipisci ipsum
              dignissimos facilis odio veniam illo quae deserunt quam. Voluptate
              labore quo debitis amet ex officiis ipsa itaque, saepe eum ratione
              veniam consequatur.
            </p>
          </div>

          <div className="card-style">
            <h1 className="flex">New Annoucement</h1>

            <p>{textContent}</p>
          </div>
        </div>

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className=" modal-box">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <div className="flex flex-row">
                      <h3 className="text-2xl font-semibold flex">
                        New Annoucement!!
                        <GrAnnounce className="ml-4" />
                      </h3>
                    </div>

                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>

                  {/* title field */}
                  <div class="mb-6">
                    <label for="large-input" class="font-bold">
                      Title
                    </label>
                    <input
                      type="text"
                      id="large-input"
                      class="block w-full p-4 text-gray-900 border
     border-gray-300 rounded-lg bg-gray-50 text-base
     focus:ring-blue-500 focus:border-blue-500 
      dark:placeholder-gray-400  dark:focus:ring-blue-500
      dark:focus:border-blue-500"
                      placeholder="Enter your title Here"
                      onChange={handler2}
                    ></input>
                  </div>

                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <form>
                      <textarea
                        className="my-4 text-blueGray-500 text-lg leading-relaxed text-area border-2 
                    "
                        rows={4}
                        cols={65}
                        type="text"
                        placeholder="Enter your content..."
                        onChange={handleChange}
                        name="textarea"
                        variant="soft"
                        color="neutral"
                        value={textContent.newAnnoucement}
                      ></textarea>
                    </form>
                  </div>
                  {/*footer*/}

                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                    <button
                      className="text-custom-color background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 active:scale-95"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>

                    <button
                      className="bg-custom-color btn-style text-white active:scale-95 font-bold uppercase text-sm px-6 py-3 rounded-2xl shadow hover:shadow-lg 
                      outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      // type="submit"

                      onClick={(e) => {
                        //setShowModal(false);
                        handleUpload();

                        // handleSubmit(e)
                      }}
                    >
                      <FaSave />
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Annoucements;
