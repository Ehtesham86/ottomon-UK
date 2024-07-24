import React from "react";
import ViewedProducts from "./cards/ViewedProducts";

const BaseProducts = () => {
  return (
    <div>
      <div className="text-center animate__animated animate__fadeIn text-[1.8rem] my-10 font-semibold">
        You may also like
      </div>
      <div className="grid mb-16 grid-cols-4 px-5 max-lg:grid-cols-2 items-center gap-x-4 place-items-center  max-sm:gap-x-4 w-[100%]">
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
      </div>

      <div className="text-center text-[1.8rem] my-10 font-semibold">
        Recently viewed products
      </div>
      <div className="grid mb-16 grid-cols-3 px-5 max-lg:grid-cols-2 items-center gap-x-4 place-items-center  max-sm:gap-x-4 w-[100%]">
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
        <ViewedProducts
          baseImageSrc="/OttomanEndLiftBaseclosedBg.jpg"
          overlayImageSrc="/Ottoman_Bed_side_opening-small.jpg"
        />
      </div>
    </div>
  );
};

export default BaseProducts;
