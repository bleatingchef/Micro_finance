import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Loans from './pages/Loans'
import Refer from './pages/Refer'
import Repayment from './pages/Repayment'
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


const App = () => {
  return (
      <Router>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/loans' element={<Loans/>}/>
        <Route path='/refer' element={<Refer/>}/>
        <Route path='/repay' element={<Repayment/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App