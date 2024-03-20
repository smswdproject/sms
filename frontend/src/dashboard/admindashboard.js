import React, { useState } from "react";
import LeftAdmin from "../components/AdminComponents/AdminLeft";
import RightAdmin from "../components/AdminComponents/AdminRight";

function AdminDashboard() {
  const [dashboard, setDashboard] = useState("Dashboard");
  return (
    <div className="bg-lavender font-poppins text-black-blue flex">
      <div className="w-1/5 h-screen">
        <LeftAdmin></LeftAdmin>
      </div>

      <div className="w-4/5 h-screen">
        <RightAdmin value={dashboard}></RightAdmin>
        <div className="flex flex-col justify-between content-around ">
        <a
          href="#"
          className="block max-w-sm p-6 my-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Fees
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {" "}
            <ul className="hover:active ">
              {" "}
              <li> <button>Check fees</button></li>
              <li> <button>update database</button></li>
              <li> <button>print reciept </button></li>
              <li> <button>send</button></li>
            </ul>
          </p>
        </a>
        <a
          href="#"
          className="block max-w-sm p-6 my-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Fees
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {" "}
            <ul className="hover:active ">
              {" "}
              <li> <button>Check fees</button></li>
              <li> <button>update database</button></li>
              <li> <button>print reciept </button></li>
              <li> <button>send</button></li>
            </ul>
          </p>
        </a>
      
        </div>
        
      </div>
    </div>
  );
}

export default AdminDashboard