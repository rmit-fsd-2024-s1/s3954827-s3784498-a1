import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/Registerpage"; // Assuming RegisterPage is in the components directory
import './App.css';

function App() {
  return (
    <Router>
      <Routes> {/* Wrap Routes around Route components */}
        <Route path='/' element={<LoginPage />} /> {/* Use element prop to specify the component */}
        <Route path='/register' element={<RegisterPage />} /> {/* Use element prop to specify the component */}
      </Routes>
    </Router>
  );
}

export default App;