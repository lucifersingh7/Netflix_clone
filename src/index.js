import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Help from './Help';


const page=(
  <>
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/help' element={<Help/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  </BrowserRouter>
  
  </>
)

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(page);