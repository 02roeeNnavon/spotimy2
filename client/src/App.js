import React from "react";
import SongPreview from "./components/SongPreview";

function App() {
  return (
    <SongPreview id="A12345" name="test" singer ="Generic name" genre = "Test music" imageUrl = {null} songUrl = {null} goToSongPage = {(id) => {console.log("hello")}}/>
  );
}

export default App;
