import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className=''>
                <Link to="/">Logo</Link>
            <ul className='flex justify-between align-center'>
                <Link to="/" > Home </Link>
            </ul>
        </div>
    )
}

export default Navbar