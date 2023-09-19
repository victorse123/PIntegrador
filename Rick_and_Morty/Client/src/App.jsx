/* eslint-disable react/jsx-no-undef */
//commons imports
import  { useState, useEffect } from 'react';
import axios from 'axios';

//components
import Home from './components/Home/Home';
//import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import About from "./components/About/About.jsx";
import Form from "./components/Form/Form.jsx";

//Router-Dom
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Detail from "./components/Detail/Detail.jsx";

import PATHROUTES from "./helpers/PathRoutes.helper.js";

//styles
import './App.css';
import Favorites from './components/Favorites/Favorites';

function App() {
   const [characters, setCharacters]=useState([]);
   const {pathname} = useLocation();
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = '';
   const PASSWORD = '';




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
  }, [access, navigate]);


   function onSearch(id) {
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
            pathname !=='/' && <NavBar onSearch={onSearch}/>
         }
         
         <Routes>

         <Route path={PATHROUTES.LOGIN} element={<Form login={login} />}/>
         <Route path={PATHROUTES.HOME} element={<Home characters={characters} onClose={onClose} />}/>
         {/* <Route path={PATHROUTES.HOME} element={<Cards characters={characters} onClose={onClose} />}/> */}
         <Route path={PATHROUTES.ABOUT} element={<About/>}/>
         <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
         <Route path={PATHROUTES.FAVORITES} element={<Favorites />}/>

        </Routes>
        
      </div>
   );
}

 export default App;
