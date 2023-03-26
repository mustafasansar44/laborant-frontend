import { Route, Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Navbar from './components/layout/Navbar'
import "./tailwind.css"
import AllLaborant from './pages/AllLaborant.js';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AllRapor from './pages/AllRapor';
import RaporDetail from './pages/RaporDetail';
import Login from './pages/Login';
import CreateLaborant from './pages/CreateLaborant';
import CreateRapor from './pages/CreateRapor';
import axios from 'axios';
import Register from './pages/Register';




function App() {

  const dispatch = useDispatch()


  useEffect(() => {

  }, [])

  return (

    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<AllLaborant />} />
        <Route path="/rapor" element={<AllRapor />} />
        <Route path="/rapor/detail/:id" element={<RaporDetail />} />
        <Route path="/auth/login" element={<Login />} /> 
        <Route path="/auth/register" element={<Register />} />
        <Route path="/create/laborant" element={<CreateLaborant />} />
        <Route path="/create/rapor" element={<CreateRapor />} />
      
      </Routes>
      

    </div>



  );
}

export default App;
