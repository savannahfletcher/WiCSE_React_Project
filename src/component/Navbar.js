import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className = "navbar">
        <div className = "links">
            <Link to="/WiCSE_React_Project/">Home</Link>
            <Link to="/WiCSE_React_Project/projects">Projects</Link>
            <Link to="/WiCSE_React_Project/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar