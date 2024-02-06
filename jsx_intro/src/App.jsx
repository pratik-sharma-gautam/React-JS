import { useState } from "react";

function App() {
let [age, setAge] = useState(0)
function incrementAge(){
  setAge(age+1);
}
  return (
    <>
      <p>My Name is Pratik Sharma and I am {age} years old.</p>
      <button onClick={incrementAge}>Increment age</button>
    </>
  )
}

export default App
