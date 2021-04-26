import React from 'react';
import { BrowseRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Footer from './components/Footer/Footer'
import SignIn from './components/Signin/Signin';
import SignUp from './components/Signup/Signup';

function App() {
  return (
    <>
      <Navbar/>
      <SignIn/>
      <SignUp/>
      <Footer />
    </>
  );
}

export default App;
