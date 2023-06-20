import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const ForU = () => {
  const [red, turnRed] = useState<Boolean>(false);
  const [red1, turnRed1] = useState<Boolean>(false);
  const addFavorite = () => {
    turnRed(!red);
  };
  const addFavorite1 = () => {
    turnRed1(!red1);
  };
  return (
    <div className="w-full h-[150px] md:h-[180px] flex justify-center mt-14 py-3 px-4">
      <div className="flex space-x-3 w-[100%] h-full md:w-2/3 md:max-w-[700px] lg:w-[100%] lg:max-w-[900px] rounded-sm">
        <div className="w-1/3 justify-between flex flex-col ">
          <h3 className=" text-ash-100 text-[30px] font-bold">
            Picked For You{" "}
          </h3>
          <div className="h-4/6 min-w-full border-2-ash-200"></div>
        </div>
        <div className="flex flex-col justify-between p-4 bg-[#262626] h-full w-1/3 rounded-md">
          <div className="flex flex-col">
            <p className="text-ash-200">Playlist</p>
            <p className="text-ash-100 font-semibold text-lg">
              Morgan by Chees
            </p>
          </div>
          <div className="flex justify-between items-center">
            {red ? (
              <AiFillHeart
                onClick={addFavorite}
                className="text-red-500  text-2xl cursor-pointer"
              />
            ) : (
              <AiOutlineHeart
                onClick={addFavorite}
                className="text-ash-50 text-2xl cursor-pointer"
              />
            )}
            <button>
              <BsFillPlayFill className="bg-ash-100 text-2xl rounded-[50%] cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between p-4 bg-[#262626] h-full w-1/3 rounded-md">
          <div className="flex flex-col">
            <p className="text-ash-200">Playlist</p>
            <p className="text-ash-100 font-semibold text-lg">
              Morgan by Chees
            </p>
          </div>
          <div className="flex justify-between items-center">
            {red1 ? (
              <AiFillHeart
                onClick={addFavorite1}
                className="text-red-500  text-2xl cursor-pointer"
              />
            ) : (
              <AiOutlineHeart
                onClick={addFavorite1}
                className="text-ash-50 text-2xl cursor-pointer"
              />
            )}
            <button>
              <BsFillPlayFill className="bg-ash-100 text-2xl rounded-[50%] cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForU;
