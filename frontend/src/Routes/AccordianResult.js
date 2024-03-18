import React, { useState } from "react";
import departmentsData from "./departmentData";

const AccordianResult = () => {
  const [openDepartment, setOpenDepartment] = useState(null);

  const toggleDepartment = (departmentName) => {
    setOpenDepartment(
      openDepartment === departmentName ? null : departmentName
    );
  };

  return (
    <div className="w-11/12" id="accordion-open" data-accordion="open">
      <h2>Departments</h2>
      {departmentsData.map((department, index) => (
        <div key={index}>
          <div id="accordion-open" data-accordion="open">
            <h2 id="accordion-open-heading-1">
              <button
                onClick={() => toggleDepartment(department.departmentName)}
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-custom-color border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:bg-gray-900 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 gap-3"
                data-accordion-target="#accordion-open-body-1"
                aria-expanded="true"
                aria-controls="accordion-open-body-1"
              >
                <div className="flex items-center">
                  {department.departmentName} 
                </div>
                <div className="">0% Complete</div>
                
              </button>
            </h2>
            {openDepartment === department.departmentName && (
              <ul>
                <div className="p-5 border border-b-0  border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  {department.subjects.map((subject, subIndex) => (
                    <li
                      className="mb-2 flex justify-between text-gray-500 dark:text-gray-400"
                      key={subIndex}
                    >
                      {subject} 
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <span className="">View Data </span>
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                    </li>
                  ))}

                  
                </div>
              </ul>
            )}
          </div>
        </div>
      ))}

      {/* {departmentsData.map((department, index) => (
        <div key={index}>
          <button onClick={() => toggleDepartment(department.departmentName)}>
            {department.departmentName}
          </button>
          {openDepartment === department.departmentName && (
            <ul>
              {department.subjects.map((subject, subIndex) => (
                <li key={subIndex}>{subject}</li>
              ))}
            </ul> */}
      {/* )} */}
      {/* </div> */}
      {/* ))} */}
    </div>
  );
};

export default AccordianResult;
