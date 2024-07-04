import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
       <Navbar />
       <Main />

    </>
  )
}

export default App
