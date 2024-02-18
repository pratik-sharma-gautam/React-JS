import React from 'react'
import About from './About'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <NavLink className={(e)=>{
                        return e.isActive?"red":"yellow"
                    }} to="/"> <li>Home</li></NavLink>
                    <NavLink className={(e)=>{
                        return e.isActive?"red":"yellow"
                    }} to="/About">  <li>About</li></NavLink>
                    <NavLink className={(e)=>{
                        return e.isActive?"red":"yellow"
                    }} to="/Contact">  <li>Contact</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
