import React from 'react'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
 
 export default function App() {
   return (
  
   <div>
      {/*components */}
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
   
   </div>
   )
 }
 