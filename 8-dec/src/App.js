import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import { AppContainer } from './style_component/StyledComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useState} from 'react'
import Login from './components/Login';

function App() {
  const [mobile, setMobile] = useState();
  return (
    <AppContainer>
       <ToastContainer autoClose={1000} />
      <Routes>
        <Route  index element={<Login setMobile={setMobile} mobile={mobile}/>} />
        <Route  path='/login' element={<Login setMobile={setMobile} mobile={mobile}/>} />
        <Route  path='/register' element={<Register mobile={mobile}/>} />
      </Routes>
    </AppContainer>
  );
}

export default App;