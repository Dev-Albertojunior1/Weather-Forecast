// src/App.js
import React from 'react';
import { Container } from '@mui/material'; 
import HomePage from './pages/HomePage'; 
import UserMap from './components/Reusable/UserMap'; 
import Navbar from './components/Reusable/Navbar';
import Footer from './components/Reusable/Footer';

function App() {
  return (
    <Container>
      <Navbar/>
      <HomePage /> 
      <Footer/>
    </Container>
  );
}

export default App;
