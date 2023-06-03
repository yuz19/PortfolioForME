import React from 'react'
import { Link, useLocation } from 'react-router-dom';
function StartMenu() {
  return (
    <div className='startMenu'>
        <Link to="/Storymode"><button>STORY MODE</button></Link>
        <button>QUICK MODE</button>
    </div>
  )
}

export default StartMenu