import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { motion } from 'framer-motion'
import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

import './styles.css'
import { Navbar, Footer } from './containers'
import { Dashboard, History } from './pages'

defineElement(lottie.loadAnimation);
function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      {/* Small Device */}
      <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 1, ease: 'easeInOut' }}>
        <div className="app-device">
          <lord-icon
            src="https://cdn.lordicon.com/zygphpgt.json"
            trigger="loop"
            delay="100"
            colors="primary:#121331,secondary:#66dac1,tertiary:#ffc738,quaternary:#ebe6ef"
            style={{width:"250px", height:"250px"}}>
          </lord-icon>
          <span className="device-small">Please Use a Mobile Resolution</span>
        </div>
      </motion.div>
    </>
  );
}

export default App