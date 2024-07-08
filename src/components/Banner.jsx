import React from 'react'
import banner from '../assets/img/banner-bg.jpg'
const Banner = () => {
  return (
    <section className='relative'>
      <img src={banner} alt="" className=' h-[550px] object-cover '/>
      <div className='absolute top-[200px] w-full  px-4'>
         <div className='w-full flex justify-center items-center flex-col space-y-4'>
         <h1 className='text-white max-sm:text-2xl text-4xl uppercase font-bold'>registr now to get more deals</h1>
         <h1 className='text-black-text max-sm:text-2xl uppercase text-2xl font-raleway '>Where health, beauty and fitness meet.</h1>
         <button className='border-2 px-8 py-3 hover:bg-primary transition text-white font-raleway uppercase text-2xl max-sm:text-lg max-sm:px-2 border-primary'>Book Appointment</button>
         </div>
      </div>
    </section>
  )
}

export default Banner
