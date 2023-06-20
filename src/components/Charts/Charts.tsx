import React, { useState } from "react";
import ChartHead from "./ChartHead";
import Chartslides from "./Chartslides";

const Charts = () => {
  const [slides, setSlides] = useState<any[]>([1, 2, 3, 4, 5, 6]);
  return (
    <div className="w-full my-5 flex flex-row justify-center py-3 px-4">
      <div className="w-[100%] h-full space-y-3 md:w-2/3 md:max-w-[700px] lg:w-[100%] lg:max-w-[900px] rounded-sm">
        <ChartHead />
        <Chartslides slides={slides} />
      </div>
    </div>
  );
};

export default Charts;
