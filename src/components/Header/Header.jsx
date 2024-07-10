import React from 'react'

const Header = () => {
  return (
    // <div className='flex text-white bg-gray-500 justify-center items-center  h-screen'>
    //   <div className='justify-center'>
    //   <div className='font-bold text-3xl'>Stop Paying For Overpriced Medicine</div>
    //   <div className=''>Generic medicines are as good as other private pharmaceutical company's medicines with half of the price </div>
    //   </div>
    // </div>
    <div className='flex justify-center items-center h-screen bg-gray-800'>
      <div className='flex flex-col '>
        <div className='font-bold text-3xl'>Stop Paying For Overpriced Medicine</div>
        <div className=''>Generic medicines are as good as other private pharmaceutical company's medicines with half of the price </div>
      </div>
    </div>
  )
}

export default Header