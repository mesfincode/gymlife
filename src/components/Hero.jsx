import React from 'react'
import hero1 from '../assets/img/hero/hero-1.jpg'
import hero2 from '../assets/img/hero/hero-2.jpg'

const Hero = () => {
  return (
    <section className=''>
    <img src={hero1} alt=""  className='h-screen object-cover n w-full '/>
    <div className='absolute top-1/3 px-4 md:left-40 lg:left-1/2 z-50 space-y-6'>
        <h1 className='text-white uppercase text-2xl tracking-widest'>Shape your body</h1>
       <div>
       <h1 className='text-white text-4xl  sm:text-6xl xl:text-8xl font-bold uppercase tracking-widest'>Be <label htmlFor="" className='text-primary'>Strong</label> </h1>
        <h1 className='text-white text-4xl  sm:text-6xl xl:text-8xl font-bold uppercase tracking-widest'> training hard</h1>

       </div>
        <button className='bg-primary rounded-lg px-4 py-2  uppercase text-white text-lg font-raleway'>Get Info</button>
    </div>
    </section>
  )
}

export default Hero
