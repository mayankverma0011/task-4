import React, { useState } from 'react';
import axios from 'axios';
function About() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
       
        const response = await axios('https://bank-task-upload-csv.onrender.com/uploadicici', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log('File uploaded successfully. URL:', data.url);
        } else {
          console.error('File upload failed.');
        }
      } catch (error) {
        console.error('An error occurred during file upload:', error);
      }
    } else {
      console.error('No file selected.');
    }
  };

  return (
    <div id='about' >
      <input type='file' onChange={handleFileChange} /><br></br>
      <button type='button' onClick={handleFileUpload}>Submit</button>
    </div>
  );
}

export default About;




// import React, { useState } from 'react';
// import axios from 'axios';

// function About() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   // const [selectedOption, setSelectedOption] = useState('option1'); 
//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   // const handleOptionChange = (event) => {
//   //   setSelectedOption(event.target.value);
//   // };

//   const handleFileUpload = async () => {
//     if (selectedFile) {
//       const formData = new FormData();
//       formData.append('file', selectedFile);

//       try {
//         const response = await axios.post('https://bank-task-upload-csv.onrender.com/uploadicici', formData);

//         if (response.status === 200) {
//           const data = response.data;
//           console.log('File uploaded successfully. URL:', data.url);
//         } else {
//           console.error('File upload failed.');
//         }
//       } catch (error) {
//         console.error('An error occurred during file upload:', error);
//       }
//     } else {
//       console.error('No file selected.');
//     }
//   };

//   return (
//     <div id='about'>
//       <input type='file' onChange={handleFileChange} /><br />
//       {/* <select value={selectedOption} onChange={handleOptionChange}>
//         <option value='option1'>hdfc</option>
//         <option value='option2'>icici</option>
//       </select><br /> */}
//       <button type='button' onClick={handleFileUpload}>Submit</button>
//     </div>
//   );
// }

// export default About;
