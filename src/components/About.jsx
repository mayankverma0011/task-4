
import React, { useState } from 'react';
import axios from 'axios';

function About() {
  const [selectedFile, setSelectedFile] = useState(null);   // for input 
  const [selectedOption, setSelectedOption] = useState('option1');   // for drop down

//for input
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

//for dropdown
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // for btn to upload a file
  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      console.log('FormData:', formData);

      try {
        let url;
        if (selectedOption === 'option1') {
          url = "https://task-0ram.onrender.com/importHDFC";
        } else if (selectedOption === 'option2') {
          url = "https://task-0ram.onrender.com/importICICI";
        }

        const response = await axios.post(url, formData);

        console.log('Response:', response);

        if (response.status === 200) {
          console.log('File uploaded successfully. URL:', url);
          alert("file is uploaded")
        } else {
          console.error('File upload failed.');
        }
      } catch (error) {
        console.error('An error occurred during file upload:', error);
      }
    } else {
      console.error('No file selected.');
      alert("no file selected")
    }
  };

  return (
    <div id='about'>
      <input type='file' onChange={handleFileChange} />
    
      <select value={selectedOption} onChange={handleOptionChange} id='dropdown'>
        <option value='option1'>hdfc</option>
        <option value='option2'>icici</option>
      </select>

      <button type='button' onClick={handleFileUpload}>Submit</button>
    </div>
  );
}

export default About;
