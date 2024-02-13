import "./App.css"
import { useEffect, useState, useRef } from "react"
function App() {
  const [count, setCount] = useState(0)
  const countRef=useRef(0)
  useEffect(()=>{
    setCount(count+1)
    console.log(countRef.current+1)
  })
  return (
    <>
    <p>{countRef.current}</p>
    <p>{count}</p>
    </>
  )
}

export default App
