
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

function AddStatement() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('');
  const [fileDisabled, setFileDisabled] = useState(true);
  const [selectedBank, setSelectedBank] = useState("");
  const [allAccountNumber, setAllAccountNumber]= useState("")
// const location=useParams()
// console.log(location,"=====================");

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

  useEffect(() => {
    // Fetch bank names from the API when the component mounts
    if(selectedBank.length>0){
      axios.get(`http://116.202.210.102:8081/api/getaccount/${selectedBank[0]?._id}`) // Replace with your API URL
        .then((response) => {
          setAllAccountNumber(response.data)
        })
        .catch((error) => {
          console.error('Error fetching :', error);
        });
    }
  }, [selectedBank]);


  // const accountNumbers = {
  //   // HDFC: ['12345', '67890'],
  //   // ICICI: ['11111', '22222'],
  //   // axios.post(`http://116.202.210.102:8081/api/getaccount/:${selectedBank[0]._id}`) // Replace with your API URL
  //   //     .then((response) => {
  //   //       setSelectedOption(response.data);
  //   //       // console.log(response.data)
  //   //     })
  //   //     .catch((error) => {
  //   //       console.error('Error fetching :', error);
  //   //     })

  // };


  useEffect(() => {
    // Enable the file input if both bank and account number are selected
    setFileDisabled(!(selectedOption && selectedAccount));
  }, [selectedOption, selectedAccount]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleOptionChange = (bank,e) => {
    console.log(bank,e.target.value,"event+++++++++");
    const selectedBankData = bank.filter((val)=>{
         if(val.bankName==e.target.value){
          return val
        }
    })
    setSelectedBank(selectedBankData)
  };

 

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const handleFileUpload = async () => {
    if (selectedFile && selectedAccount) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('BankName', selectedOption);
      formData.append('AccountNumber', selectedAccount);

      try {
        let url = "http://116.202.210.102:8081/api/upload";
        const response = await axios.post(url, formData);

        if (response.status === 200) {
          console.log('File uploaded successfully. URL:', url);
          alert("File is uploaded")
        } else {
          console.error('File upload failed.');
        }
      } catch (error) {
        console.error('An error occurred during file upload:', error);
      }
    } else {
      console.error('No file selected or account number not selected.');
      alert("No file selected or account number not selected.")
    }
  };

  console.log(selectedAccount,"selectedBank+++++++++++++")

  return (
    <div id='about'>
       {/* <select onChange={handleOptionChange} id='dropdown'>
        <option value=''>Select Bank</option>
        <option value='HDFC'>HDFC</option>
        <option value='ICICI'>ICICI</option>
      </select>  */}
      


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
    
      <br />


      <select value={selectedAccount} onChange={handleAccountChange} id='accountDropdown'>
        <option value=''>Select Account Number</option>
        {allAccountNumber && allAccountNumber?.data.map((account) => (
          <option key={account} value={account}>
            {account.accountno}
          </option>
        ))}
      </select>
      <br />
      <input type='file' onChange={handleFileChange} disabled={fileDisabled} />
      <br />
      <button type='button' onClick={handleFileUpload}>Submit</button>
    </div>
  );
}

export default AddStatement;



 