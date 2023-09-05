
import React, { useState, useEffect  } from 'react';
import axios from 'axios';
function AddAccount() {

   
    const [inputNumber, setInputNumber] = useState('');



  const [selectedBank, setSelectedBank] = useState('');
//   const [selectedAccNum, setSelectedAccNum] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (bank,e) => {
    console.log(bank,e.target.value,"event+++++++++");
    setSelectedBank(e.target.value);
    const selectedBankData = bank.filter((val)=>{
         if(val.bankName==e.target.value){
          return val
        }
    })
    setSelectedBank(selectedBankData)
    // getBankId()
    // setSelectedOption(event.target.value);
    // setSelectedAccount('');
  };


  
  const handleFileUpload=()=>{
    if (selectedBank && inputNumber) {
        const payload = {
            bankName: selectedBank[0]._id,
            accountno: inputNumber,
        };
    
        // Make the API call with the payload
        axios.post('http://116.202.210.102:8081/api/postaccount', payload)
          .then((response) => {
            console.log('API response:', response.data);
            // Handle the response as needed
          })
          .catch((error) => {
            console.error('Error calling the API:', error);
            // Handle errors
          });
      } else {
        // Handle validation errors (e.g., show an error message)
        console.error('Please select a bank and enter a number');
      }
  }

    useEffect(() => {
        // Fetch bank names from the API when the component mounts
        axios.get('http://116.202.210.102:8081/api/getbank') // Replace with your API URL
          .then((response) => {
            setSelectedOption(response.data);
          })
          .catch((error) => {
            console.error('Error fetching bank names:', error);
          });
      }, []);
    
    
 
  return (
    <div id='about'>
              <select   onChange={(e)=>handleOptionChange(selectedOption.data,e)} id='dropdown'>
          <option value=''>Select Bank</option>
          {selectedOption.data?.length>0 && selectedOption.data?.map((item,id) => {
            return(
            <option key={id} value={item.bankName}>
              {item.bankName}
              {item.id}
            </option>

          )
            }
          )} 
        </select>
      {/* <select value={selectedBank} onChange={(e)=>setSelectedBank(e.target.value)} id='dropdown'>
        <option value=''>Select Bank</option>
        <option value='HDFC'>HDFC</option>
        <option value='ICICI'>ICICI</option>
      </select>
       */}
      <br></br>
      {/* <select value={selectedAccNum} onChange={(e)=>setSelectedAccNum(e.target.value)} id='dropdown'>
        <option value=''>Select Acc Number</option>
        <option value='HDFC'>12344</option>
        <option value='ICICI'>1234556</option>
      </select> */}
    <input type='number' placeholder='Enter your number' value={inputNumber} onChange={(e) => setInputNumber(e.target.value)}/>



      <br></br>
       
      <button type='button' onClick={handleFileUpload}>Submit</button>
    </div>
  );
}

export default AddAccount;
