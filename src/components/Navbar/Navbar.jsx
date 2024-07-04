import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=''>
      <Link to="/">
      </Link>

      <ul>
        <Link>Search</Link>
      </ul>
    </div>
  )
}

export default Navbar