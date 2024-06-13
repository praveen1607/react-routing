import React from 'react'
import { useNavigate } from 'react-router-dom'


function Success() {

    const navigate = useNavigate();

    return (
    <div>
      <h4>Submitted Successfully</h4>
      <button onClick={(() => navigate("/"))}>Back to Home</button>
    </div>
  )
}

export default Success
