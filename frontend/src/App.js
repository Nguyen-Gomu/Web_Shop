import React from 'react'
import { Suspense } from 'react'
import {BrowserRouter,Redirect,Route,Switch} from 'react-router-dom'
import './index.css'
import Header from './components/Header/Header'
import MainPage from './components/MainPage/MainPage'
import Navbar from './components/Navbar/Navbar'

// const Products =React.lazy(()=> import('url'))

function App(){
  return(
    <div className="container">
      <Suspense fallback={<div>Loading.....</div>}>
        <BrowserRouter>
          {/* <Header/> */}
          <Navbar/>
          
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App