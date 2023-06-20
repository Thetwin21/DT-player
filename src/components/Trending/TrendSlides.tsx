import React, { useState } from "react";
import Slides from "../Slides/Slides";


type slidesProp = {
   slides: any[] ;
}
const TrendSlides = ({slides}: slidesProp) => {
  return (
    <div className="trendscroll w-full h-[180px] md:h-[200px] overflow-y-hidden overflow-x-auto">
      <div className="flex h-full w-full gap-x-4 ">
        {slides && slides.map(slide => (
          <div className="bg-ash-300 h-full w-[180px] md:w-[200px] min-w-[180px] md:min-w-[200px]  rounded-md"></div>
        ))  
        }
      </div>
    </div>
  );
};

export default TrendSlides;
