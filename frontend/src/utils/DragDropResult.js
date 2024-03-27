import React from "react";
import axios from "axios";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { ClipLoader } from "react-spinners";
import { FaUpload } from "react-icons/fa";
// import override

const DragDropResult = (props) => {
  const selectedSemester = props.value;
  console.log(`Selected semester in drop and drag component is ${selectedSemester}`);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".xlsx, .xls",
  });

  const handleUpload = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("File uploaded successfully");
    } catch (error) {
      console.error("Error uploading file: ", error);
      alert("Error uploading file");
    } finally {
      setLoading(false);
    }
  };
  // style={{cursor: 'pointer', padding: '20px', border: '2px dashed #aaa', borderRadius: '5px',  margin-left:"420px",textAlign: 'center',width:'420px' }
  return (
    <div>
      {showResult ? (
        <div className="flex mt-5">
          <div className="mt-4">
            <h1 className="text-2xl w-[420px] ml-36 mt-14 font-bold mb-4">
              Upload Result
            </h1>
            {/* File Upload (Result upload in the teacher section*/}
            <div
              className=" cursor-pointer p-6  border-spacing-4 border-r-4 outline-dashed  text-center w-[420px] ml-4"
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <p className="font-poppins">
                {" "}
                Drag 'n' drop an Excel file here, or click to select one
              </p>
            </div>
            {file && (
              <div>
                <div className=" flex ml-28 mt-4 mx-auto">
                  <p>Selected File: {file.name}</p>
                </div>
                <div className="flex  ml-36">
                  <button
                    className="w-[120px] text-white bg-black-blue  focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
             text-center bg-text-black-blue mt-7  "
                    onClick={handleUpload}
                  >
                    Upload
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Show Result */}
          <div className="ml-36 mt-4">
            <h1 className="text-2xl  ml-10  mt-16 font-bold">Show Result</h1>
            <button
              className="w-[180px] text-white bg-black-blue  focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
             text-center bg-text-black-blue mt-5 ml-10 "
              onClick={() => setShowResult(false)}
            >
              Show Result
            </button>
          </div>
        </div>
      ) : (
       <div>Result is Showing of semester {selectedSemester}</div>
      )}
    </div>
  );
};
export default DragDropResult;
