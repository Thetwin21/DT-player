import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Songs from "./Songs";

const Chart = () => {
  const [songs, setSongs] = useState<any[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  return (
    <div className="bg-ash-300 h-full w-[290px] md:w-[200px] min-w-[300px] md:min-w-[380px]  rounded-xl p-3">
      <div className="flex justify-between items-center">
        <p className="text-lg text-ash-100 font-bold">Top 100 NIgeria</p>
        <button className="flex items-center gap-1 text-ash-100 font-light text-sm">
          More <MdKeyboardDoubleArrowRight />{" "}
        </button>
      </div>
      <div className="grid h-full w-full py-3 px-[5px] overflow-hidden">
        <div className="w-full h-full ">
          {songs.map((song, index) => (
            <Songs key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
