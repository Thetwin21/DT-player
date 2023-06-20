import React from "react";
type newSlides = {
  img: any[];
  artist: any[];
  name: string;
  // song: string;
  // onClick:;
  setCurrentPlaying: any;
};
const NewrSlides = ({ img, artist, name, setCurrentPlaying }: newSlides) => {
  return (
    <div className="flex flex-col h-full w-[180px] md:w-[200px] min-w-[180px] md:min-w-[200px] text-ash-50 rounded-md overflow-hidden justify-between">
      <img src={img[0].url} className="h-[180px] w-full" alt="" />
      <div className="p-2">
        <p className="text-ash-100 font-semibold text-[16px]">{name}</p>
        <p className="text-ash-100 text-[14px]">{artist[0].name}</p>
      </div>
    </div>
  );
};

export default NewrSlides;
