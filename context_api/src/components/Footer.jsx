import React from 'react'
import { useContext } from 'react'
import myCount from '../context/myCount'
const Footer = () => {
    const b=useContext(myCount)
  return (
    <div>
      This is my Footer
    {" "+ b.name}
    {b.age}
    </div>
  )
}

export default Footer
