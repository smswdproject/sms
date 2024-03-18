import React from 'react'
import { useState } from 'react';
import AccordianResult from './AccordianResult';

const ResultCard = () => {
    const [ShowResult, setShowResult] = useState(false);

    const handleFormSubmit = () => {
      setShowResult(true);
    };
    return (
      <div className="flex justify-center ">
        {!ShowResult ? (
        <div className="w-full space-y-6 max-w-sm p-4 bg-white border
         border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800
          dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Select Subject
            </h5>
            </form>
  
            <form className="max-w-sm mx-auto">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Subject{" "}
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>Sub 1 C++</option>
                <option>Sub 2 MECH</option>
                <option>Sub 3 Eng</option>
                <option>Sub 4 Math</option>
              </select>
            </form>
  
            <form className="max-w-sm mx-auto">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select className
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option>CSE </option>
                <option>ECE</option>
                <option>MECH</option>
                <option>EE </option>
              </select>
            </form>
  
  
            <button onClick={handleFormSubmit}
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
            {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
              </div> */}
       
           </div>) : (<AccordianResult/>)}
      </div>
    );
  };

export default ResultCard