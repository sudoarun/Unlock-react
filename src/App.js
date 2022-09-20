import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Error from './Components/ErrorPage';
import UserData from './Components/UserData';
import {Route, Routes } from 'react-router-dom';
import Update from './Components/Update';
import EditUser from './Components/EditUser';
import View from './Components/View';
// import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<UserData />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/edit/:id' element={<EditUser />} />
        <Route path='/view' element={<View />} />
        <Route path='*' element={<Error />} />
      </Routes>
      </>
    
  );
}

export default App;
