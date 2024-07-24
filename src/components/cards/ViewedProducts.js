import React from "react";
import Image from "next/image";

const ViewedProducts = ({ baseImageSrc, overlayImageSrc }) => {
  return (
    <div className="my-10 relative products_content h-[45vh] max-sm:h-[30vh] w-[100%]">
        
      <div className="absolute inset-0">
        <Image
          src={baseImageSrc}
          alt="basebed"
          layout="fill"
          objectFit="cover"
          className="base-image rounded-sm"
        />
        <Image
          src={overlayImageSrc}
          alt="openbed"
          layout="fill"
          objectFit="cover"
          className="overlay-image rounded-sm"
        />
      </div>
      <button className="bg-[#00acbb] mt-5 absolute top-full left-1/2 -translate-x-1/2 w-[90%] rounded-2xl px-4 py-[0.7rem] text-white max-sm:text-sm max-sm:px-2 max-sm:py-[0.5rem]">Customize Your Bed</button>
    </div>
  );
};

export default ViewedProducts;
