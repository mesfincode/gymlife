import React from "react";
import { photoGallery } from "../constants";
import imageIcon from "../assets/img/image-icon.svg";
const Gallery = () => {
  return (
    <section className="gallery-section bg-black-1 flex justify-center items-center flex-col w-full space-y-8 py-16 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto w-full gap-2 ">
        {photoGallery.map((path, index) => (
          <div key={index} className="relative group cursor-pointer">
            <img src={path} alt="" className=" h-[400px]  object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-50 group-hover:opacity-100 opacity-0 transition-opacity duration-300 flex items-center justify-center">
              <img src={imageIcon} alt="" width={70} height={70} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
