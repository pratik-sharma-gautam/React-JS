import { useState } from 'react'
import Navbar from './components/Navbar'
import Box from './components/Box'

function App() {

  return (
   <>
   <Navbar/>
    <Box content="box1"/>
    <Box content="box2"/>
   </>
  )
}

export default App
