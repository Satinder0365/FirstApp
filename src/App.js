
import { useState } from 'react';
import './App.css';
//import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import React, {useState} from 'react';

// import {
//   BrowserRouter ,
// Routes,
//   Route,
  
// }from 'react-router-dom';

function App() {
 const [mode, setMode] = useState('light'); //whether dark mode enabled or not

const[alert, setAlert] =useState(null);

const showAlert= (message, type)=>{
setAlert({
  msg: message, 
  type: type
})
setTimeout(()=>{
setAlert(null);
},2000);
}


const toggleMode=()=>{
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode has been enabled","success")
    document.title = " FirstApp - Dark Mode"
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor='white';
    showAlert("Ligth Mode has been enabled","success")
    document.title = "FirstApp - Light Mode"
    }
}

 return (
<>
{/* <BrowserRouter> */}
<Navbar title="FirstApp" aboutText="About" mode={mode}  toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className='container my-3'>
 {/* <Routes>
          <Route exact path="/about" element={<About/>} /> */}
          
   
             <TextForm  showAlert={showAlert} heading =" Enter the text to analyze below" mode={mode}/>  
          
        
        {/* </Routes> */}
          
         
        </div>
        



{/* </BrowserRouter> */}
</>
 );
};

export default App;

