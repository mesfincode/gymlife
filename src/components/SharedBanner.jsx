import React from 'react'
import breadCrumb from '../assets/img/breadcrumb-bg.jpg'
import { Link, useLocation } from 'react-router-dom'
const SharedBanner = ({title}) => {
    const location = useLocation()
    console.log(location)
  return (
    <div className='relative'>
      <img src={breadCrumb} alt="" className='h-[400px] object-cover' />
      <div className='absolute top-[200px] w-full  px-4'>
          <div className='w-full flex justify-center items-center flex-col space-y-4'>
            <h1 className='text-6xl font-bold uppercase text-white'>{title}</h1>
            <div className='flex justify-center items-center gap-5'>
                <Link className='text-white' to={"/"}>
                    Home
                </Link>
                <h1 className='text-white text-2xl'>{">"}</h1>
                <div className='text-primary'>{title =="About Us"?"About":title}</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SharedBanner
