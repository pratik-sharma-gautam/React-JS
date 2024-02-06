import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log("You have just entered in my site")
  
    return () => {
      console.log("This is written inside of useffect")
    }
  })
  
  return (
    <>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      
      </div>
     
    </>
  )
}

export default App
