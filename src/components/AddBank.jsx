
// import React, { useState } from 'react';
// // import axios from 'axios';

// function AddBank() {
//   const [selectedBank, setSelectedBank] = useState('');
//   const [selectedIFSC, setSelectedIFSC] = useState('');
//   const [selectedAddress, setSelectedAddress] = useState('');


// //   const handleOptionChange = (event) => {
// //     setSelectedBank(event.target.value);
// //   };

//    const handleUpload=()=>{
//     alert(selectedAddress,selectedBank,selectedIFSC)
//     const formData = new FormData();
//     formData.append('BankName', selectedBank);
//     formData.append('BankIFSC', selectedIFSC);
//     formData.append('AccountAddress', selectedAddress);
//     console.log('AccountName',selectedBank );
//    }
 
//   return (
//     <div id='about'>
        
//       {/* <select value={selectedBank} onChange={handleOptionChange} id='dropdown'>
//         <option value=''>Select Bank</option>
//         <option value='HDFC'>HDFC</option>
//         <option value='ICICI'>ICICI</option>
//       </select> */}
//       <input type='text' value={selectedBank} placeholder='Enter bank Name..' onChange={(e) =>setSelectedBank(e.target.value)}/>
//       <br></br>
//        <input type='text' value={selectedIFSC} placeholder='Enter IFSC Code..' onChange={(e)=>setSelectedIFSC(e.target.value)}/>
//       <br />
       
//       <input type='text' value={selectedAddress} placeholder='Enter Bank Address..' onChange={(e)=>setSelectedAddress(e.target.value)}/>
//       <br />
//       <button type='button' onClick={handleUpload}>Submit</button>
//     </div>
//   );
// }

// export default AddBank;

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function AddBank() {
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedIFSC, setSelectedIFSC] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');

  const handleUpload = () => {
    // Create a payload object
    const payload = {
      bankName: selectedBank,
      IFSCCode: selectedIFSC,
      bankAddress: selectedAddress,
    };

    // Make an API POST request
    axios
      .post('http://116.202.210.102:8081/api/postbank', payload)
      .then((response) => {
        // Handle a successful response here
        console.log('API Response:', response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error('API Error:', error);
      });
  };

  return (
    <div id='about'>
      <input type='text' value={selectedBank} placeholder='Enter bank Name..' onChange={(e) => setSelectedBank(e.target.value)} />
      <br />
      <input type='text'  value={selectedIFSC}  placeholder='Enter IFSC Code..'  onChange={(e) => setSelectedIFSC(e.target.value)}/>
      <br/>
      <input type='text'  value={selectedAddress}  placeholder='Enter Bank Address..'  onChange={(e) => setSelectedAddress(e.target.value)}/>
      <br />
      <button type='button' onClick={handleUpload}> Submit</button>
    </div>
  );
}

export default AddBank;
