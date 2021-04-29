import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Footer from './components/Footer/Footer'
import SignIn from './components/Signin/Signin';
import SignUp from './components/Signup/Signup';
import Checkout from './components/Checkout/Checkout';
import PrimarySearchAppBar from './components/Test/testHover';

function App() {
  return (
    <>
      {/* <Navbar/>
      <SignIn/>
      <SignUp/>
      <Checkout/> */}
     
      {/* <Footer /> */}
      <Router>
        <PrimarySearchAppBar />
          <Switch>
            <Route path='/' component={SignIn} />
            <Route path='/Checkout' component={Checkout} />
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
