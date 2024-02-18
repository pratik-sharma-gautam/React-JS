import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import AllStates from './context/AllStates'
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <AllStates>
  <h1>My Empty APP</h1>
   <Footer/>
  </AllStates>
   </>
  )
}

export default App
