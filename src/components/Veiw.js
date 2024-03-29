// import React from 'react';
// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';

// function Veiw()
// {
//     const location=useLocation();
//     const students = location.state?.data;
//     // const [studentIds, setStudentIds] = useState([]);
//     const studentIds = students.map((student) => student.student_id);
//     const [studentData, setStudentData] = useState([]);

// //   useEffect(() => {
// //     // Function to fetch data for each student
// //     const fetchDataForStudents = async () => {
// //       try {
// //         const studentDataArray = [];
// //         for (const student of students) {
// //           const { student_id } = student;
// //           // Fetch student data
// //           const studentResponse = await axios.get(`/students/${student_id}`);
// //           const studentInfo = studentResponse.data;

// //           // Fetch marks data
// //           const marksResponse = await axios.get(`/marks/${student_id}`);
// //           const marksInfo = marksResponse.data;

// //           // Combine student and marks data
// //           const combinedData = { ...studentInfo, ...marksInfo };
// //           studentDataArray.push(combinedData);
// //         }
// //         // Set the combined data to state
// //         setStudentData(studentDataArray);
// //       } catch (error) {
// //         console.error('Error fetching student and marks data:', error);
// //       }
// //     };

// //     if (students) {
// //       fetchDataForStudents();
// //     }
// //   }, [students]);

// // useEffect(() => {
// //     // Function to fetch data for each student
// //     const fetchDataForStudents = async () => {
// //       try {
// //         const studentDataArray = [];
// //         for (const studentId of studentIds) {
// //           // Fetch student data
// //           const studentResponse = await axios.get(`/students/${studentId}`);
// //           const studentInfo = studentResponse.data;
// //           console.log('Student Info:', studentInfo);
  
// //           // Fetch marks data
// //           const marksResponse = await axios.get(`/marks/${studentId}`);
// //           const marksInfo = marksResponse.data;
// //           console.log('Marks Info:', marksInfo);
  
// //           // Combine student and marks data
// //           const combinedData = { ...studentInfo, ...marksInfo };
// //           studentDataArray.push(combinedData);
// //         }
// //         // Set the combined data to state
// //         setStudentData(studentDataArray);
// //       } catch (error) {
// //         console.error('Error fetching student and marks data:', error);
// //       }
// //     };
  
// //     // Call the function to fetch data for students
// //     fetchDataForStudents();
// //   }, [studentIds]); // Add studentIds as a dependency


// const axios = require('axios');

// // Function to fetch student data by ID
// const fetchStudentById = async (studentId) => {
//   try {
//     // Fetch student data
//     const studentResponse = await axios.get(`http://localhost:3001/students/${studentId}`);
//     const studentData = studentResponse.data;
    
//     // Fetch marks data
//     const marksResponse = await axios.get(`http://localhost:3001/marks/${studentId}`);
//     const marksData = marksResponse.data;

//     // Combine student and marks data
//     const combinedData = { ...studentData, ...marksData };
    
//     // Return the combined data
//     return combinedData;
//   } catch (error) {
//     console.error('Error fetching student data:', error);
//     throw error; // Throw the error to handle it outside this function
//   }
// };

// // Usage example
// const studentId = 1; // Replace with the actual student ID
// fetchStudentById(studentId)
//   .then((studentData) => {
//     console.log('Student Data:', studentData);
//     // Now you can populate this data in your view
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

  

//   return (
//     <div>
//       <h1>View Students and Marks</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Student ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Ideation Marks</th>
//             <th>Execution Marks</th>
//             <th>Viva/Pitch Marks</th>
//             {/* Add more headers for additional marks */}
//           </tr>
//         </thead>
//         <tbody>
//           {studentData.map((student, index) => (
//             <tr key={index}>
//               <td>{student.student_id}</td>
//               <td>{student.student_name}</td>
//               <td>{student.student_email}</td>
//               <td>{student.ideation_marks}</td>
//               <td>{student.execution_marks}</td>
//               <td>{student.viva_pitch_marks}</td>
//               {/* Add more cells for additional marks */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );

// }

// export default Veiw


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function ViewPage() {
// //   const { studentId } = useParams(); // Extract the student ID from the URL
//   const [studentData, setStudentData] = useState(null);
//  const  studentId=7;

//   useEffect(() => {
//     const fetchStudentData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/students/${studentId}`);
//         setStudentData(response.data);
//       } catch (error) {
//         console.error('Error fetching student data:', error);
//       }
//     };

//     fetchStudentData();
//   }, [studentId]);

//   return (
//     <div>
//       {studentData ? (
//         <div>
//           <h2>Student Details</h2>
//           <p>Student ID: {studentData.student_id}</p>
//           <p>Name: {studentData.student_name}</p>
//           <p>Email: {studentData.student_email}</p>
//           {/* Add more student details here */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default ViewPage;




// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// function ViewPage() {
// //   const { studentId } = useParams(); // Extract the student ID from the URL
//   const [studentData, setStudentData] = useState(null);
//   const [marksData, setMarksData] = useState(null);
//   const studentId=7;

//   useEffect(() => {
//     const fetchStudentData = async () => {
//       try {
//         // Fetch student data
//         const studentResponse = await axios.get(`http://localhost:3001/students/${studentId}`);
//         setStudentData(studentResponse.data);
//       } catch (error) {
//         console.error('Error fetching student data:', error);
//       }
//     };

//     const fetchMarksData = async () => {
//       try {
//         // Fetch marks data
//         const marksResponse = await axios.get(`http://localhost:3001/marks/${studentId}`);
//         setMarksData(marksResponse.data);
//       } catch (error) {
//         console.error('Error fetching marks data:', error);
//       }
//     };

//     // Call both fetch functions
//     fetchStudentData();
//     fetchMarksData();
//   }, [studentId]);

//   return (
//     <div>
//       {studentData && marksData ? (
//         <div>
//           <h2>Student Details</h2>
//           <table className="table">
//             <tbody>
//               <tr>
//                 <th>Student ID</th>
//                 <td>{studentData.student_id}</td>
//               </tr>
//               <tr>
//                 <th>Name</th>
//                 <td>{studentData.student_name}</td>
//               </tr>
//               <tr>
//                 <th>Email</th>
//                 <td>{studentData.student_email}</td>
//               </tr>
//             </tbody>
//           </table>

//           {/* Display marks data */}
//           <h2>Marks</h2>
//           <table className="table">
//             <tbody>
//               <tr>
//                 <th>Ideation Marks</th>
//                 <td>{marksData.ideation_marks}</td>
//               </tr>
//               <tr>
//                 <th>Execution Marks</th>
//                 <td>{marksData.execution_marks}</td>
//               </tr>
//               <tr>
//                 <th>Viva/Pitch Marks</th>
//                 <td>{marksData.viva_marks}</td>
//               </tr>
//               {/* Add more marks data here */}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default ViewPage;


import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ViewPage() {
    const location=useLocation();
    const students = location.state?.data;
    // const [studentIds, setStudentIds] = useState([]);
    const studentIds = students.map((student) => student.student_id);
    // const [studentData, setStudentData] = useState([]);

  const [studentData, setStudentData] = useState({});
  const [marksData, setMarksData] = useState({});
  const [unmarkedStudents, setUnmarkedStudents] = useState([]);
//   const studentIds = [1, 2, 3]; // Example array of student IDs

  useEffect(() => {
    const fetchData = async () => {
      try {
        for (const studentId of studentIds) {
          // Fetch student data
          const studentResponse = await axios.get(`http://localhost:3001/students/${studentId}`);
          const studentInfo = studentResponse.data;

          // Fetch marks data
          const marksResponse = await axios.get(`http://localhost:3001/marks/${studentId}`);
          const marksInfo = marksResponse.data;

          // Update state with student and marks data
          setStudentData(prevState => ({ ...prevState, [studentId]: studentInfo }));
          setMarksData(prevState => ({ ...prevState, [studentId]: marksInfo }));

          if (Object.keys(marksInfo).length === 0) {
            setUnmarkedStudents(prevState => [...prevState, studentInfo]);
          }

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [studentIds]);

  return (
    <div>
        {/* <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">Home Page</a>
        </div>
      </nav> */}

<nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">View Page</a>
          <div className="navbar-nav ml-auto">
            <button className="btn btn-outline-warning" onClick={() => console.log(unmarkedStudents)}>
              Unmarked Students ({unmarkedStudents.length})
            </button>
          </div>
        </div>
      </nav>
      
      {Object.keys(studentData).map(studentId => (
        <div key={studentId}>
          <h2>Student Details - {studentId}</h2>
          <table className="table">
            <tbody>
              <tr>
                <th>Student ID</th>
                <td>{studentData[studentId].student_id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{studentData[studentId].student_name}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{studentData[studentId].student_email}</td>
              </tr>
            </tbody>
          </table>

          {/* Display marks data */}
          <h2>Marks</h2>
          <table className="table">
            <tbody>
              <tr>
                <th>Ideation Marks</th>
                <td>{marksData[studentId].ideation_marks}</td>
              </tr>
              <tr>
                <th>Execution Marks</th>
                <td>{marksData[studentId].execution_marks}</td>
              </tr>
              <tr>
                <th>Viva/Pitch Marks</th>
                <td>{marksData[studentId].viva_marks}</td>
              </tr>
              <tr>
                <th>Total Marks</th>
                <td>{marksData[studentId].total_marks}</td>
              </tr>
              {/* Add more marks data here */}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default ViewPage;

