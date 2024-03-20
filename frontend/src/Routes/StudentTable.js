import React, { useState } from 'react';
import StudentModal from '../components/TeacherComponents/StudentModal';

const StudentTable = ({ students }) => {
  const [editableStudents, setEditableStudents] = useState(students);
  const [sortDirection, setSortDirection] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalStudent, setModalStudent] = useState(null);

  const handleNameClick = (student) => {
    setShowModal(true);
    setModalStudent(student);
  };

  const handleInputChange = (event, index, field) => {
    const updatedStudents = [...editableStudents];
    updatedStudents[index][field] = event.target.value;
    setEditableStudents(updatedStudents);
    // console.log({updatedStudents})
  };
  const handleNextButtonClick = () => {
    // Find the index of the current student
    const currentIndex = students.findIndex((student) => student === modalStudent);
    // Calculate the index of the next student
    const nextIndex = (currentIndex + 1) % students.length;
    // Set the next student as modal student
    setModalStudent(students[nextIndex]);
  };

  const handlePrevButtonClick = () => {
    // Find the index of the current student
    const currentIndex = students.findIndex((student) => student === modalStudent);
    // Calculate the index of the next student
    const nextIndex = (currentIndex - 1) % students.length;
    // Set the next student as modal student
    setModalStudent(students[nextIndex]);
  };

  const sortByColumn = (column) => {
    let sortedStudents = [...editableStudents];
    if (sortColumn === column) {
      sortedStudents.reverse();
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      sortedStudents.sort((a, b) => {
        if (a[column] < b[column]) return sortDirection === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      setSortColumn(column);
      setSortDirection('asc');
    }
    setEditableStudents(sortedStudents);
  };

  return (
    <div>
      
      
      <table className="overflow-x-hidden" style={{ border: '1px solid black', borderCollapse: 'collapse',}}>
        <thead className="text-sm text-left rtl:text-right text-violet-500   ">
          <tr>
            <th style={{ border: '1px solid black', padding: '5px' }} onClick={() => sortByColumn('name')}>
              Name {sortColumn === 'name' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'name' && sortDirection === 'desc' && '↓'}
            </th>
            <th style={{ border: '1px solid black', padding: '5px' }} onClick={() => sortByColumn('rollNo')}>
              Roll No {sortColumn === 'rollNo' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'rollNo' && sortDirection === 'desc' && '↓'}
            </th>
            <th style={{ border: '1px solid black', padding: '5px' }} onClick={() => sortByColumn('midSemMarks')}>
              Mid Sem Marks {sortColumn === 'midSemMarks' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'midSemMarks' && sortDirection === 'desc' && '↓'}
            </th>
            <th style={{ border: '1px solid black', padding: '5px' }} onClick={() => sortByColumn('endSemMarks')}>
              End Sem Marks {sortColumn === 'endSemMarks' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'endSemMarks' && sortDirection === 'desc' && '↓'}
            </th>
            <th style={{ border: '1px solid black', padding: '5px' }} onClick={() => sortByColumn('internals')}>
              Internals {sortColumn === 'internals' && sortDirection === 'asc' && '↑'}
              {sortColumn === 'internals' && sortDirection === 'desc' && '↓'}
            </th>
            <th style={{ border: '1px solid black', padding: '5px' }}>Total</th>
            <th style={{ border: '1px solid black', padding: '5px' }}>Attendance</th>
          </tr>
        </thead>
        <tbody>

          {editableStudents.map((student, index) => (
            
            <tr className="" key={index}>
              <td onClick={()=>handleNameClick(student)} className="  cursor-pointer underline underline-offset-1 text-blue-500"style={{ border: '1px solid black', padding: '5px' }}>
              {student.name}
              
              </td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
              {student.rollNo}

              </td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="text"
                  value={student.midSemMarks}
                  onChange={(event) => handleInputChange(event, index, 'midSemMarks')}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="text"
                  value={student.endSemMarks}
                  onChange={(event) => handleInputChange(event, index, 'endSemMarks')}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                <input
                  type="text"
                  value={student.internals}
                  onChange={(event) => handleInputChange(event, index, 'internals')}
                />
              </td>
              <td style={{ border: '1px solid black', padding: '5px' }}>
                {parseInt(student.midSemMarks) + parseInt(student.endSemMarks) + parseInt(student.internals)}
              </td>
              <td className={`${parseInt(student.attendance) > 75 ? 'bg-green-500' : 'bg-red-500'}`} style={{ border: '1px solid black', padding: '5px' }}>
              {student.attendance} %
                
              </td>
            </tr>
            
          )  )} 
          
          
           { showModal &&  (<StudentModal  handleInputChange={handleInputChange}showModal={showModal} setShowModal={setShowModal} student={modalStudent} onNext={handleNextButtonClick} onPrev ={handlePrevButtonClick} /> )}
          
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
