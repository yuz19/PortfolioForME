import React from 'react'
import { Link } from 'react-router-dom';

function StartMenu() {
  return (
    <div className='startMenu'>

        <Link to="/Storymode"><button>STORY MODE</button></Link>
        <Link to="/Projects"><button>QUICK MODE</button></Link>
    </div>
  )
}

export default StartMenu