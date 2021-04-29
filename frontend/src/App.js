import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Footer from './components/Footer/Footer'
import SignIn from './components/Signin/Signin';
import SignUp from './components/Signup/Signup';
import Checkout from './components/Checkout/Checkout';
import TemporaryDrawer from './components/Drawer/Drawer';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <TemporaryDrawer/>
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
