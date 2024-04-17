import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LoginPage from "./components/log_in_out/LoginPage";
import RegisterPage from "./components/log_in_out/Registerpage"; 
import MainPage from "./components/log_in_out/Main"; 
import './App.css';
// Importing page components
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import NavBar from './components/navbar/Navbar.js';
import Header from './components/header/Header.js';
import './components/navbar/Navbar.css'; // Import the CSS file from the 'NavBar' folder
import Footer from './components/footer/Footer.js';
import Register from './pages/Register.js';
import SignIn from './pages/SignIn.js';

function App() {
  return (
    <Router>
      <div className="app-background">
      <Header/>
     <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/SignIn' element={<SignIn/>} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

/*
App Function from log-in-out implementation:
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
*/

export default App;

