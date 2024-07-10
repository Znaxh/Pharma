import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App