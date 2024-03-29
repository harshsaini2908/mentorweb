// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// function EditMarksModal({ studentId, onClose }) {
//   const [marks, setMarks] = useState({});

//   const fetchStudentMarks = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/students/${studentId}/marks`);
//       setMarks(response.data);
//     } catch (error) {
//       console.error('Error fetching student marks:', error);
//     }
//   };

//   const handleMarkChange = (parameter, value) => {
//     setMarks(prevMarks => ({
//       ...prevMarks,
//       [parameter]: value
//     }));
//   };

//   const saveMarks = async () => {
//     try {
//       await axios.put(`http://localhost:3001/students/${studentId}/marks`, marks);
//       onClose();
//     } catch (error) {
//       console.error('Error saving student marks:', error);
//     }
//   };

//   return (
//     <Modal show={true} onHide={onClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Marks</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <table>
//           <tbody>
//             <tr>
//               <td>Ideation</td>
//               <td><input type="number" value={marks.ideation || ''} onChange={(e) => handleMarkChange('ideation', e.target.value)} /></td>
//             </tr>
//             {/* Add more rows for other parameters */}
//           </tbody>
//         </table>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onClose}>Cancel</Button>
//         <Button variant="primary" onClick={saveMarks}>OK</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditMarksModal;



// edit_marks.js
// EditMarksModal.js

// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function EditMarksModal({ show, onHide, students }) {

//     console.log(students);
    
//   const [marks, setMarks] = useState({});

//   const handleMarkChange = (studentId, value) => {
//     setMarks(prevMarks => ({
//       ...prevMarks,
//       [studentId]: value
//     }));
//   };

//   const handleSaveMarks = async () => {
//     try {
//       // Send a request to save marks for each student
//       for (const studentId in marks) {
//         const mark = marks[studentId];
//         // Send a request to your backend API to save the mark
//         // Example:
//         // await axios.post(`/api/students/${studentId}/marks`, { mark });
//       }
//       // Close the modal after saving marks
//       onHide();
//     } catch (error) {
//       console.error('Error saving marks:', error);
//     }
//   };

//   return (
//     <Modal show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Marks</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form>
//           {students.map(student => (
//             <div key={student.id}>
//               <label htmlFor={`mark-${student.id}`}>{student.name}</label>
//               <input
//                 id={`mark-${student.id}`}
//                 type="number"
//                 value={marks[student.id] || ''}
//                 onChange={e => handleMarkChange(student.id, e.target.value)}
//               />
//             </div>
//           ))}
//         </form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleSaveMarks}>
//           Save
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditMarksModal;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function EditMarksModal({ show, onHide, studentId }) {
//   const [marks, setMarks] = useState([]);
//   const [totalMarks, setTotalMarks] = useState(0);
//   console.log(studentId);

//   useEffect(() => {
//     const fetchMarks = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/marks/${studentId}`);
//         setMarks(response.data);
//         // Calculate total marks
//         const total = response.data.reduce((total, mark) => total + mark.mark, 0);
//         setTotalMarks(total);
//       } catch (error) {
//         console.error('Error fetching marks:', error);
//       }
//     };

//     if (show && studentId) {
//       fetchMarks();
//     }
//   }, [show, studentId]);

//   return (
//     <Modal show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Marks</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {marks.length > 0 ? (
//           <div>
//             <h4>Mentor 1 can assign marks to student as:</h4>
//             {marks.map((mark, index) => (
//               <p key={index}>
//                 {mark.subject}  {mark.mark}/10
//               </p>
//             ))}
//             <p>Total Marks: {totalMarks}</p>
//           </div>
//         ) : (
//           <p>No marks available for this student.</p>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//         <Button variant="primary">Save Marks</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditMarksModal;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function EditMarksModal({ show, onHide, studentId }) {
//   const [marks, setMarks] = useState([]);
//   const [totalMarks, setTotalMarks] = useState(0);
//   const [marksData, setMarksData] = useState({});

//   useEffect(() => {
//     const fetchMarks = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/marks/${studentId}`);
//         setMarks(response.data);
//         // Calculate total marks
//         const total = response.data.reduce((total, mark) => total + mark.mark, 0);
//         setTotalMarks(total);
//       } catch (error) {
//         console.error('Error fetching marks:', error);
//       }
//     };

//     if (show && studentId) {
//       fetchMarks();
//     }
//   }, [show, studentId]);

//   const handleChange = (subject, value) => {
//     setMarksData({
//       ...marksData,
//       [subject]: value,
//     });
//   };

//   const handleSaveMarks = async () => {
//     try {
//       await axios.put(`http://localhost:3001/marks/${studentId}`, marksData);
//       // Close the modal after saving marks
//       onHide();
//     } catch (error) {
//       console.error('Error saving marks:', error);
//     }
//   };

//   return (
//     <Modal show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Marks</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {marks.length > 0 ? (
//           <div>
//             <h4>Mentor 1 can assign marks to student as:</h4>
//             {marks.map((mark, index) => (
//               <div key={index}>
//                 <p>
//                   {mark.subject} -> {mark.mark}/10
//                 </p>
//                 <input
//                   type="number"
//                   value={marksData[mark.subject] || ''}
//                   onChange={(e) => handleChange(mark.subject, parseInt(e.target.value))}
//                 />
//               </div>
//             ))}
//             <p>Total Marks: {totalMarks}</p>
//           </div>
//         ) : (
//           <p>No marks available for this student.</p>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleSaveMarks}>
//           Save Marks
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditMarksModal;

// EditMarksModal.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function EditMarksModal({ show, onHide, studentId }) {
//   const [marks, setMarks] = useState([]);
//   const [marksData, setMarksData] = useState({});

//   useEffect(() => {
//     const fetchMarks = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/marks/${studentId}`);
//         setMarks(response.data);
//         // Initialize marks data with current marks
//         const initialMarksData = {};
//         response.data.forEach((mark) => {
//           initialMarksData[mark.subject] = mark.mark;
//         });
//         setMarksData(initialMarksData);
//       } catch (error) {
//         console.error('Error fetching marks:', error);
//       }
//     };

//     if (show && studentId) {
//       fetchMarks();
//     }
//   }, [show, studentId]);

//   const handleChange = (subject, value) => {
//     setMarksData({
//       ...marksData,
//       [subject]: value,
//     });
//   };

//   const handleSaveMarks = async () => {
//     try {
//       await axios.put(`http://localhost:3001/marks/${studentId}`, marksData);
//       onHide(); // Close the modal after saving marks
//     } catch (error) {
//       console.error('Error saving marks:', error);
//     }
//   };

//   return (
//     <Modal show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Marks</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {marks.map((mark, index) => (
//           <div key={index}>
//             <label>{mark.subject}</label>
//             <input
//               type="number"
//               value={marksData[mark.subject] || ''}
//               onChange={(e) => handleChange(mark.subject, e.target.value)}
//             />
//           </div>
//         ))}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleSaveMarks}>
//           Save Marks
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditMarksModal;


// EditMarksModal.js

// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function EditMarksModal({ show, onHide }) {
//   const [marks, setMarks] = useState({
//     ideation: '',
//     execution: '',
//     vivaPitch: '',
//   });

//   const handleChange = (subject, value) => {
//     setMarks({
//       ...marks,
//       [subject]: value,
//     });
//   };

//   const handleSaveMarks = () => {
//     // Here you can save the marks to the database
//     console.log('Marks:', marks);
//     onHide(); // Close the modal after saving marks
//   };

//   return (
//     <Modal show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Marks</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div>
//           <label>Ideation</label>
//           <input
//             type="number"
//             value={marks.ideation}
//             onChange={(e) => handleChange('ideation', e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Execution</label>
//           <input
//             type="number"
//             value={marks.execution}
//             onChange={(e) => handleChange('execution', e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Viva/Pitch</label>
//           <input
//             type="number"
//             value={marks.vivaPitch}
//             onChange={(e) => handleChange('vivaPitch', e.target.value)}
//           />
//         </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleSaveMarks}>
//           Save Marks
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditMarksModal;


// EditMarksModal.js

// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';

// function EditMarksModal({ show, onHide }) {
//   const [marks, setMarks] = useState({
//     ideation: '',
//     execution: '',
//     vivaPitch: '',
//   });

//   const handleChange = (subject, value) => {
//     setMarks({
//       ...marks,
//       [subject]: value,
//     });
//   };

//   const handleSaveMarks = () => {
//     // Here you can save the marks to the database
//     console.log('Marks:', marks);
//     onHide(); // Close the modal after saving marks
//   };

//   return (
//     <Modal show={show} onHide={onHide}>
//       <Modal.Header closeButton>
//         <Modal.Title>Edit Marks</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <div>
//           <label>Ideation</label>
//           <input
//             type="range"
//             min="0"
//             max="10"
//             value={marks.ideation}
//             onChange={(e) => handleChange('ideation', e.target.value)}
//           />
//           <span>{marks.ideation}</span>
//         </div>
//         <div>
//           <label>Execution</label>
//           <input
//             type="range"
//             min="0"
//             max="10"
//             value={marks.execution}
//             onChange={(e) => handleChange('execution', e.target.value)}
//           />
//           <span>{marks.execution}</span>
//         </div>
//         <div>
//           <label>Viva/Pitch</label>
//           <input
//             type="range"
//             min="0"
//             max="10"
//             value={marks.vivaPitch}
//             onChange={(e) => handleChange('vivaPitch', e.target.value)}
//           />
//           <span>{marks.vivaPitch}</span>
//         </div>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={onHide}>
//           Close
//         </Button>
//         <Button variant="primary" onClick={handleSaveMarks}>
//           Save Marks
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default EditMarksModal;



// EditMarksModal.js

import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EditMarksModal({ show, onHide, studentId }) {
  const [marks, setMarks] = useState({
    ideation: '',
    execution: '',
    vivaPitch: '',
  });

  const handleChange = (subject, value) => {
    setMarks({
      ...marks,
      [subject]: value,
    });
  };

  const handleSaveMarks = async (studentId) => {
    try {
      // Send a PUT request to update the marks in the database
      
    //   const { ideation_marks, execution_marks , viva_marks } = (marks);
    const ideation_marks=marks.ideation;
    const execution_marks=marks.execution;
    const viva_marks=marks.vivaPitch;
      
      await axios.put(`http://localhost:3001/students/${studentId}/marks`, {ideation_marks: ideation_marks,
      execution_marks: execution_marks,
      viva_marks: viva_marks,});
      onHide(); // Close the modal after saving marks
    } catch (error) {
      console.error('Error saving marks:', error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Marks</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <label>Ideation</label>
          <input
            type="range"
            min="0"
            max="10"
            value={marks.ideation}
            onChange={(e) => handleChange('ideation', e.target.value)}
          />
          <span>{marks.ideation}</span>
        </div>
        <div>
          <label>Execution</label>
          <input
            type="range"
            min="0"
            max="10"
            value={marks.execution}
            onChange={(e) => handleChange('execution', e.target.value)}
          />
          <span>{marks.execution}</span>
        </div>
        <div>
          <label>Viva/Pitch</label>
          <input
            type="range"
            min="0"
            max="10"
            value={marks.vivaPitch}
            onChange={(e) => handleChange('vivaPitch', e.target.value)}
          />
          <span>{marks.vivaPitch}</span>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={()=> handleSaveMarks(studentId)}>
          Save Marks
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditMarksModal;
