import { useState } from 'react'
import Contact from './components/Contact'
import About from './components/About'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)
const routerA=createBrowserRouter([
 {
  path: '/',
  element: <Home/>
 },
  {
    path:'/About',
    element: <About/>
  },
  {
    path:'/Contact',
    element: <Contact/>
  }
])
  return (
<>

<RouterProvider router={routerA}/>
</>

  )
}

export default App
