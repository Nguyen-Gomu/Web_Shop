import React from 'react'
import { Suspense } from 'react'
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import './index.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Banner/slider'
import Checkout from './components/Checkout/Checkout'

// const Products =React.lazy(()=> import('url'))

function App(){
  return(
    <div>
      <Suspense fallback={<div>Loading.....</div>}>
        <BrowserRouter>
        <Header/>
          <Switch>
            {/* <Slider/> */}
            <Checkout/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App