import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Slides from "./components/Slides/Slides";
import Trending from "./components/Trending/Trending";
import ForU from "./components/ForYou/ForU";
import Charts from "./components/Charts/Charts";
import NewR from "./components/NewR/NewR";
import Footer from "./components/Footer/Footer";

function App() {
  const [songs, setSongs] = useState("");
  const url = "https://v1.nocodeapi.com/detwins/spotify/dBzMEHdmhBoRvTXq/browse/new"

  const [currentSongPlaying, setCurrentPlaying] = useState<string>("");

  return (
    <div className="w-full overflow-hidden h-full min-h-screen bg-bb relative">
      <Navbar />
      <Slides />
      <Trending />
      <ForU />
      <Charts />
      <NewR url={url} setCurrentPlaying={setCurrentPlaying}/>
      <Footer currentPlaying={currentSongPlaying} />
    </div>
  );
}

export default App;
