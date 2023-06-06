import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Accommodation from './pages/Accommodation/Accommodation'
import Error from './pages/Error/Error'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { AccommodationProvider } from './utils/AccomodationContext';


const container = document.getElementById('root');
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Router>
      <AccommodationProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accommodation/:id" element={<Accommodation/>} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer/>
      </AccommodationProvider>
    </Router>
  </React.StrictMode>,
)