import React, {useState, createContext} from 'react';
import './App.css';
import AddUser from "./components/AddUser";
import Navbar from "./components/Navbar";
import AllUsers from "./components/AllUsers";
import CodeForInterview from "./components/CodeForInterview";
import EditUser from "./components/EditUser";

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterUser from './components/RegisterUser';
import LoginUser from './components/LoginUser';

export const store=createContext();

function App() {
  const [token,setToken]= useState(null);

  return (
    <store.Provider value={[token, setToken]}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<CodeForInterview/>} />
          <Route path='/all' element={<AllUsers/>} />
          <Route path='/add' element={<AddUser/>} />
          <Route path="/edit/:id" element={<EditUser/>} />
          <Route path='/register' element={<RegisterUser/>} />
          <Route path='/login' element={<LoginUser/>} />
        </Routes>
      </BrowserRouter>
    </store.Provider>
  );
}

export default App;
