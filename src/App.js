import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddStatement from './components/AddStatement';
import AddBank from './components/AddBank';
import AddAccount from './components/AddAccount';
function App() {
  return (
    <>
   <Navbar/>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/addstatement' Component={AddStatement} />
      <Route path='/addbank' Component={AddBank}/>
      <Route path='/addaccount' Component={AddAccount}/>

      </Routes>
     
    </>
  )
}

export default App;
