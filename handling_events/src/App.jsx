import { useState, React } from 'react'
function App() {
  const [bg, setBg]=useState("black")
  const [text,setText]=useState("red")
  const bgToRed=()=>{
    setBg("red")
    setText("Black")
  }
  const bgToBlack=()=>{
    setBg("black")
    setText("Red")

    console.log("Button has been clicked again")
  }
  return (
    <div style={{backgroundColor:bg, height:"100vh", width: "100vw"}}>
      <button onClick={bgToRed} onDoubleClick={bgToBlack}>Click Me</button>
      <p>Click to Change the bg to {text}</p>
    </div>
  )
}

export default App
