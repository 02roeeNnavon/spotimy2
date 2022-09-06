const express = require("express");
const cors = require("cors");
const path = require("path");
const { makeId } = require("./util.js");
const PORT = 3000;
const {
  getAllSongs,
  getSongById,
  createNewSong,
  deleteSongById,
  search,
} = require("./queries");
const app = express();
app.use(express.json());
app.use(cors());

//get all apps
app.get("/api/songs", async (req, res) => {
  try {
    const songs = await getAllSongs();

    if (!songs || !songs.length) {
      res.status(404).send(`songs do not exist`);
    } else {
      res.send(songs);
    }
  } catch (err) {
    res.send(err);
  }
});

app.get("/api/songs/search/:value", async (req, res) => {
  try {
    const songs = await search(req.params.value);
    if (!songs || !songs.length){
      res.status(404).send([])
    }
    else{
      res.send(songs)
    }
  } 
  catch (err) {
    res.status(404)
  }
})

//get specific song id
app.get("/api/songs/:id", async (req, res) => {
  try {
    const songId = req.params.id;
    const requestedSong = await getSongById(songId);

    if (!requestedSong) {
      res.status(404).send(`song ${songId} not found`);
    } else {
      res.send(requestedSong);
    }
  } catch (err) {
    res.send(err);
  }
});

//create song
app.post("/api/addsong", async (req, res) => {
  const { name, genre, singer } = req.body;
  try {
    const newSong = {
      name,
      id: makeId(6),
      songurl:"../Assets/audioFiles/" + id,
      genre,
      imageUrl: "../Assets/images/" + id,
      singer,
    };
    await createNewSong(newSong);
    res.send("song has been added");
  } catch (err) {
    res.send(err);
  }
});

// delete song by id
app.delete("/api/deletesong/:id", async (req, res) => {
  try {
    const songId = req.params.id;
    await deleteSongById(songId);
    res.send("song has been removed");
  } catch (err) {
    res.send(err);
  }
});

//connect to port
app.listen(PORT, function (err) {
  if (err) {
    console.log("Error in server setup");
  }
  console.log("Server listening on Port", PORT);
});

app.use(express.static(path.resolve(__dirname, "../client/build")));

const indexPath = path.join(__dirname, "../client/build/index.html");
app.get("*", (req, res) => {
  res.sendFile(indexPath);
});
