import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Character.ai</Link>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-character">Create Character</Link>
        </li>
        <li>
          <Link to="/chat">Chat</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
