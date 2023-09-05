import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://116.202.210.102:8001/api/getall'; // Replace with your API URL

    // Fetch data from the API
    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    // return <div style={{color:"#fff"}}>Loading...</div>;
  }

  return (
    <div>

<table class="table" >
  <thead class="table-dark"  style={{Color:"#fff", position:"relative", background:"blue" , top:"30%"}}>
     <th>id</th>
     <th>AccountNumber</th>
      <th>BankName</th>
  </thead>
  <tbody>
 {data.map((item, index) => ( 
             <tr key={index}>
              <td>{item}</td>
              <td>{item}</td>
              <td>{item}</td>
            </tr> 
          ))} 
  </tbody>
</table>
     
    </div>
  );
}

export default Table;
