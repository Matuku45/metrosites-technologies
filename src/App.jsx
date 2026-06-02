import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Leadership from './Pages/Leadership'
import Services from './Pages/Services'
import Story from './Pages/OurStories'
import WhyUs from './Pages/WhyUs'

function App() {
  return (
    <BrowserRouter>
      {/* Header stays at the top of every page */}
      <Header />
      
      {/* Fixed: Changed lowercase <routes> to uppercase <Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/services" element={<Services />} />
        <Route path="/story" element={<Story />} />
        <Route path="/why-us" element={<WhyUs />} />
      </Routes>
      
      {/* Footer stays at the bottom of every page */}
      <Footer />
    </BrowserRouter>
  )
}

export default App