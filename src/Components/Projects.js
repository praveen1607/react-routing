import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Projects() {
  return (
    <div>
      <h4>Projects</h4>
      <Link  to='/projects/featured'>Featured Projects</Link>
      <Link to={'/projects/new'}>New Projects</Link>

      <br />
      <Outlet />
    </div>
  )
}

export default Projects
