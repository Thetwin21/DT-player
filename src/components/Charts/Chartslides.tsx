import React from "react";
import Chart from "./Chart";
type chartProp = {
  slides: any[];
};
const Chartslides = ({ slides }: chartProp) => {
  return (
    <div className="w-full h-[400px] overflow-hidden">
      <div className="flex h-full w-full gap-x-4 ">
        {slides && slides.map((slide, index) => <Chart key={index}/>)}
      </div>
    </div>
  );
};

export default Chartslides;
