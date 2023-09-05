 import React, { useState } from 'react';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
//  import Swal from 'sweetalert2';

 function Home() {
   const [name, setUsername] = useState('');
   const [pass, setPassword] = useState('');
   const navigate = useNavigate();

   const GotoHome = async () => {
     try {
       const response = await axios.post('http://116.202.210.102:8081/api/login', {
         name,
         pass
       });
       console.log('Response data:', response.data);
      //  Swal.fire({
      //   icon: 'success',
      //   title: 'Good job!',
      //   text: 'Login successful!',
      // });
      alert("Login succesfull")
       navigate('/addstatement'); 
      }
      catch (error) {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Login failed',
        //   text: 'Invalid username or password.',
        // });
      //  console.error('Error:', error);
      console.log('Login failed. Invalid username or password.');
      alert("Invalid username or password")
     }
   };

   return (
     <div class="container">
       <div class="form-container" id="login-form">
         <h1>Login</h1>
         <form>
           <label id="username">Username</label>
      <input id="username" type="text" placeholder="Username" value={name} onChange={(e) => setUsername(e.target.value)}/>
           <label id="password">Password</label>
      <input  id="password"   type="password" placeholder="Password" value={pass} onChange={(e) => setPassword(e.target.value)} />
         </form>
         <button type="button" onClick={GotoHome}> Login </button>
       </div>
     </div>
   );
 }

 export default Home;


