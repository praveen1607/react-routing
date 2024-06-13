import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function NavBar() {


    const navlinkstyles = (styles) =>{
        console.log(styles)
        const {isActive} = styles

        return {
            fontWeight : isActive ? 'bold' : 'normal'
        }
    }
  return (
    <nav>
        <NavLink style={navlinkstyles} to="/">Home</NavLink>
        <NavLink style={navlinkstyles} to="/about">About</NavLink>
        <NavLink style={navlinkstyles} to="/projects">Projects</NavLink>
        <NavLink style={navlinkstyles} to="/users">Users</NavLink>
    </nav>
   
  )
}

export default NavBar
