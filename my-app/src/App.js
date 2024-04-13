import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/Registerpage"; 
import MainPage from "./components/Main"; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes> 
        <Route path='/' element={<LoginPage />} /> 
        <Route path='/register' element={<RegisterPage />} /> 
        <Route path='/main' element={<MainPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;