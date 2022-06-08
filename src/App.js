import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Calc from './components/calculator/Calc'
import "./App.css";


function App() {
  return (
    <>
      <Navbar />      
      <Calc />      
      <Footer />
    </>
  );
}

export default App;