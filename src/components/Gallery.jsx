import React from 'react'
import { photoGallery } from '../constants'

const Gallery = () => {
    
  return (
    <section className="bg-black-1 flex justify-center items-center flex-col w-full space-y-8 py-16 ">
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto w-full gap-2  xl:px-48 '>
     {
        photoGallery.map((path,index)=>(
            <div key={index}>
                 <img src={path} alt=""   className=' h-[400px]  object-cover'/>
            </div>
        ))
      }
     </div>
    </section>
  )
}

export default Gallery
