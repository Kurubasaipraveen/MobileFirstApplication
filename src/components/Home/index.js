import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => (
  <div className="home-container">
    <h2>Welcome to the Star Wars App</h2>
    <div className="buttons">
      <Link to="/signin">
        <button className="buttonss">Sign In</button>
      </Link>
      <Link to="/signup">
        <button className="buttonsmore">Sign Up</button>
      </Link>
    </div>
  </div>
)

export default Home
