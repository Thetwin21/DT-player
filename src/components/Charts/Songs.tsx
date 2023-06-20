import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Songs = () => {
  return (
    <div className="flex justify-between w-full h-14 py-1 my-2">
      <div className="flex">
        <img src="" alt="ill come" />
        <div>
          <p className="text-ash-100 text-sm font-semibold">Detwins</p>
          <p className="text-xs text-ash-100">Chees</p>
        </div>
      </div>
      <button>
        <BsFillPlayFill className="bg-skyb-500 text-skyb-400 text-2xl rounded-[50%] cursor-pointer" />
      </button>
    </div>
  );
};

export default Songs;
