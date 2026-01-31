import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>Home</h1>
        {/* <a href="/profile">PROFILE</a> */}
        <Link to="/profile">PROFILE</Link>
        {/* <a href="/dashboard">DASHBOARD</a> */}
        <Link to='/dashboard'>DASHBOARD</Link>
    </div>
  )
}

export default Home