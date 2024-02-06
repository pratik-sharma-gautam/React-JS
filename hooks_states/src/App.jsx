import { useState } from "react";
function App() {
// let value=5;
let [value, setValue]=useState(10);

// function incValue(){

// }
const incValue=()=>{
  value=value+1
  setValue(value)
}

const decValue=()=>{
  value=value-1
  setValue(value)
}
  return (
  <>
  <p>Value is: {value}</p>

  <button onClick={incValue}>Increment value</button>
  <button onClick={decValue}>Decrement value</button>

  </>
  )
}

export default App
