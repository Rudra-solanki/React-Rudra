import React from 'react'
import { 
    Routes,
    Route,
 } from "react-router-dom";
 import AddData from './AddData';
 import LandingPage from './LandingPage';
 import Register from './Register';
import FormForData from './FormForData';
import PageNotFound from './PageNotFound';
import { ToastContainer, toast } from "react-toastify";

function MainRouteFile() {
  return (
    <div>
    <ToastContainer />  
    <Routes> 
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register/>}>
            <Route path=':userId' element={<FormForData />} />
        </Route>
        {/* <Route path="/add" element={<AddData/>} /> */}
     </Routes>
    </div>
  )
}

export default MainRouteFile
