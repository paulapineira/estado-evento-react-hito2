
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      {/*<Home />*/}
      {/*<RegisterPage/>*/}
      <LoginPage/>
      <Footer />
    </>
  );
};

export default App;
