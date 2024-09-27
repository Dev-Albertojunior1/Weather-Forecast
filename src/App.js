// src/App.js
import React from 'react';
import { Container } from '@mui/material'; // Certifique-se de importar Container do MUI
import HomePage from './pages/HomePage'; // Importando a página inicial
import UserMap from './components/Reusable/UserMap'; 
import Navbar from './components/Reusable/Navbar';// Importando o componente UserMap

function App() {
  return (
    <Container>
      <Navbar/>
      <HomePage /> {/* Renderiza a página inicial */}
      <UserMap />  {/* Renderiza o mapa do usuário */}
    </Container>
  );
}

export default App;
