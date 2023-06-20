import React, { useState, useEffect } from "react";
import NewRhead from "./NewRhead";
import NewrSlides from "./NewrSlides";
import axios from "axios";
import Songs from "../Charts/Songs";

type newMusic = {
  url: string;
  setCurrentPlaying: any;
  
};

const NewR = ({ url,setCurrentPlaying }: newMusic) => {
  const [newSong, setNewSong] = useState<any[]>([]);
  useEffect(() => {
    axios({
      method: "get",
      url: url,
      params: {},
    })
      .then(function (response) {
        // handle success
        setNewSong(response.data.albums.items);
        console.log(response.data.albums.items);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  useEffect(() => {
    newSong && newSong.map((song) => console.log(song[6]));
  }, [newSong]);

  // const handleNewSong = ()

  return (
    <div className="w-full mb-[70px] my-5 flex flex-row justify-center py-3 px-4">
      <div className="w-[100%] h-full space-y-3 md:w-2/3 md:max-w-[700px] lg:w-[100%] lg:max-w-[900px] rounded-sm">
        <NewRhead />
        <div className="">
          <div className="flex h-full w-full gap-x-4 overflow-x-auto overflow-y-hidden">
            {newSong.length > 0 &&
              newSong.map((song) => (
                <>
                  <NewrSlides
                    img={song.images}
                    artist={song.artists}
                    name={song.name}
                    setCurrentPlaying={setCurrentPlaying}
                  />

                  <button
                    onClick={() => setCurrentPlaying(song.external_urls[1])}
                    className="text-ash-100"
                  >
                    play
                  </button>
                </>
              )) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewR;
