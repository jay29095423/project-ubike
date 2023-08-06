import React from 'react'
import Filter from './filter/Filter.js'

const Main = () => {
     return (
          <div className='w-full mt-[15vh] sm:py-8 py-4 sm:px-32'>
               <h1 className='text-[#B5CC22] pl-4 sm:text-2xl text-lg font-extrabold tracking-widest'>站點資訊
               </h1>
               <Filter />
          </div>
     )
}

export default Main