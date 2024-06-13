import React from 'react'
import usersData from './UsersData'
import { Link } from 'react-router-dom'

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <div className='card-container'>
      {
        usersData.map((user) => {
            const {id,name} = user;
            return (
                <div className='card'>
                    <Link key={id} to={`/users/${id}`}>
                    <h3>{name}</h3>
                    </Link>
                </div>
            )
        })
      }
      </div>
    </div>
  )
}

export default Users
