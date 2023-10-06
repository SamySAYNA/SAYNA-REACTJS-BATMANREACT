
import React from 'react';
import '../styles/App.css';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <>
      <NavBar/>
      <h1> Mon composant parent</h1>
      <Footer/>
    </>
  );
}

export default App;