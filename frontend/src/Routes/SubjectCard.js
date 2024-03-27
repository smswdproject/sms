import React, { useEffect } from "react";
import { useState } from "react";
import DataSec from "./DataSec";
import TeacherResult from "../components/TeacherComponents/TeacherResult";
import DragDropResult from "../utils/DragDropResult";

const SubjectCard = () => {
  const [showTable, setShowTable] = useState(false);
  const [selectedSemester, setSelectedSemester] = useState("");

  // Handler function to update selected semester
  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };
  useEffect(() => {
    console.log("Selected semester is ------->", selectedSemester);
  }, [selectedSemester]);

  const handleFormSubmit = () => {
    setShowTable(true);
  };
  return (
    <div className="">
      {!showTable ? (
        <div className="flex justify-center mt-36">
          <div className="w-full space-y-6 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-200 dark:border-gray-300">
            <h5 className="text-xl font-medium text-black-blue">
              Select Semester
            </h5>

            <form className="max-w-sm mx-auto">
              <label
                htmlFor="semesters"
                className="block mb-2 text-sm font-medium  text-black-blue"
              >
                Semester{" "}
              </label>
              <select
                id="semesters"
                value={selectedSemester}
                onChange={handleSemesterChange}
                name="semesters"
                className="bg-gray-50 border border-gray-300 
                 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400
                 text-black-blue dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option> 1</option>
                <option> 2</option>
                <option> 3</option>
                <option> 4</option>
                <option> 5</option>
                <option> 6</option>
                <option> 7</option>
                <option> 8</option>
              </select>
            </form>

            <button
              onClick={handleFormSubmit}
              type="submit"
              className="w-full text-white bg-black-blue  focus:ring-4 
            focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5
             text-center bg-text-black-blue "
            >
              Submit
            </button>
          </div>{" "}
        </div>
      ) : (
        <DragDropResult value={selectedSemester}></DragDropResult>
      )}
    </div>
  );
};

export default SubjectCard;
