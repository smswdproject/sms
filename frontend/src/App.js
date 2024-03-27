
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import AdminDashboard from './dashboard/AdminDashboard';
import StudentDashboard from './dashboard/StudentDashboard';
import TeacherDashboard from './dashboard/TeacherDashboard';
import Login from './components/Login';
import Annoucements from './Routes/Annoucements.popup.';
import Attendance from './Routes/Attendance';
import Result from './Routes/Result';
import Syllabus from './Routes/Syllabus';
import Teacher from './Routes/Teacher';
import Fee from './Routes/Fee';
import Student from './Routes/Student';
import Publish from './Routes/Publish';
import PrivateRoute from './components/PrivateRoute';
import CreateUser from "./Routes/CreateUser"
import StudentProfile from './components/StudentComponents/StudentProfile';
import TeacherResult from "./components/TeacherComponents/TeacherResult"

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className='w-screen h-screen relative overflow-hidden '>

     <Routes>

            <Route path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Login>}></Route>


            <Route path="/admin-dashboard" element={ 
              <PrivateRoute isLoggedIn={isLoggedIn}>
                  <AdminDashboard></AdminDashboard>
              </PrivateRoute>}>
            </Route>

            <Route path="/attendance" element={<Attendance></Attendance>}></Route>
            <Route path="/result" element={<Result></Result>}></Route>
            <Route path="/annoucements" element={<Annoucements></Annoucements>}></Route>
            <Route path="/syllabus" element={<Syllabus></Syllabus>}></Route>
            <Route path="/teacher" element={<Teacher></Teacher>}></Route>
            <Route path="/fee" element={<Fee></Fee>}></Route>
            <Route path="/student" element={<Student></Student>}></Route>
            <Route path="/publish" element={<Publish></Publish>}></Route>



            <Route path="/student-dashboard" element={ 
              <PrivateRoute isLoggedIn={isLoggedIn}>
                  <StudentDashboard></StudentDashboard>
              </PrivateRoute>}>
            </Route>

            <Route path="/teacher-dashboard" element={ 
              <PrivateRoute isLoggedIn={isLoggedIn}>
                  <TeacherDashboard></TeacherDashboard>
              </PrivateRoute>}>
            </Route>

            
            

            <Route path="/createuser" element={<CreateUser></CreateUser>}></Route>

            {/* To set the student profile in the student-dashboard section */}
            <Route path="/student-dashboard/student-profile" element={<StudentProfile></StudentProfile>}></Route>
            <Route path="/teacher-dashboard/teacher-result" element={<TeacherResult></TeacherResult>}></Route>
     </Routes>
    
    </div>
  
      
   
  );
}

export default App;
