import { type } from "os";
import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
type songProps = {
  currentPlaying: string
}
const Footer = ({currentPlaying}: songProps) => {
  return (
    <div className="fixed flex items-center bg-bb px-24 justify-between bottom-0 border-[0.1px] border-t-[#595959] w-full h-[60px] z-10">
      <div className="flex gap-1">
        <img src="" alt="" />
        <div>
          <p className="font-semibold text-ash-100 text-base">Detwinskn</p>
          <p className="text-ash-100 text-xs">Chees</p>
        </div>
      </div>
      <div className="flex space-x-3">
        {currentPlaying && 
        <audio controls><source src={currentPlaying} type="audio/mpeg/mp3"/></audio>
      }
        <button><AiOutlineShareAlt className="text-ash-100 text-4xl"/></button>
        <button className="bg-ash-100 rounded-[50%] cursor-pointer p-2">
          <BsFillPlayFill className=" text-skyb-400 text-xl" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
