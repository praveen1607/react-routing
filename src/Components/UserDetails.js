import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import userData from './UsersData'

function UserDetails() {

    const params = useParams();
    console.log(params)
    const {userid} = useParams();
    const userDetails = userData.find((user)=> user.id == userid)
    console.log(userDetails)

    const navigate = useNavigate();
  return (
    <div>
      <h3>User Details</h3>
       <h4>{userDetails.name}</h4>
       <h4>{userDetails.email}</h4>
       <h4>{userDetails.phone}</h4>
       <button onClick={()=> navigate('/users')}>Goto Users</button>
    </div>
  )
}

export default UserDetails
