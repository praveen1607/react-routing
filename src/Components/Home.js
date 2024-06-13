import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {

    const navigate = useNavigate();

    const navigatetosuccesspage =()=>{
        navigate("/success")
    }

  return (
    <div>
      <h4>Home</h4>

      <button  onClick={navigatetosuccesspage}>Submit</button>
    </div>
  )
}

export default Home
