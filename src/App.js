import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <>
   
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/abc' Component={About} />
      
      </Routes>
     
    </>
  )
}

export default App;
