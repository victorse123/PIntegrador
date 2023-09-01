//commons imports
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//styles
import './App.css';
//components
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from "./components/About/About.jsx";
import Form from "./components/Form/Form.jsx";
//Router-Dom
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";

import PATHROUTES from "./helpers/PathRoutes.helper.js";


function App() {
   const [characters, setCharacters]=useState([]);
   const {pathname} = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "victorseva123@gmail.com";
   const PASSWORD = "123Abc";

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         alert ("contraseña incorrecta")
      }
   }
  
   useEffect(() => {
    !access && navigate('/');
  }, [access]);


   const  onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No se a asignado el id!');
         }
      });
   }
   
const onClose = (id) => {
   setCharacters(
     characters.filter((char) => {
       return char.id !== Number(id)
     })
   )
  }

   return (
      <div className='App'>
         {
            pathname !=="/" && <NavBar onSearch={onSearch}/>
         }
         
         <Routes>
            
         <Route path={PATHROUTES.LOGIN} element={<Form login={login} />} />
         <Route path={PATHROUTES.HOME} element={<Home characters={characters} onClose={onClose} />}/>
         <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />} /> 
         <Route path={PATHROUTES.ABOUT} element={<About/>} />
         <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        </Routes>
        
      </div>
   );
}

 export default App;
