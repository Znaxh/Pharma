import React from 'react'
import { Link } from 'react-router-dom'
import { FaHandHoldingMedical } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className='flex bg-black text-white px-4 py-4'>
                <Link to="/" className='text-3xl'><FaHandHoldingMedical /></Link>
                
        </div>
    )
}

export default Navbar