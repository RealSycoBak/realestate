import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import Header from "./components/Header.jsx"
import SubContent from "./components/SubContent.jsx"
import Footer from "./components/Footer.jsx"



function App() {
  return (
    <>
      <Navbar />
      <Header />
      <SubContent number={1} />
      <Footer />
    </>
  )
}

export default App
