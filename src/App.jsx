import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      {/* Header stays at the top of every page */}
      <Header />
      
      {/* Fixed: Changed lowercase <routes> to uppercase <Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />      
      </Routes>
      
      {/* Footer stays at the bottom of every page */}
      <Footer />
    </BrowserRouter>
  )
}

export default App