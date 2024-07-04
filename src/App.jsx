import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
       <Navbar />
       <Home />
    </>
  )
}

export default App
