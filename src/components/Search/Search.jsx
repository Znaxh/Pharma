import React from 'react'
import { CiSearch } from "react-icons/ci";
import Compare from '../Compare/Compare'

const Search = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex flex-col items-center'>
        <div className='py-2'>SEARCH MEDICINE NAME/MEDICAL FORMULA</div>
        <div className=''>
          <input type="text" placeholder='TYPE HERE' className="border border-gray-300 p-2 mr-2 w-96" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </div>
        <Compare />        
      </div>
    </div>
  )
}

export default Search