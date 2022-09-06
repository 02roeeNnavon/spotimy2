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
const fs = require("fs");
const app = express();
app.use(cors());
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});
app.use(express.json({limit: '5000mb'}));
app.use(express.urlencoded({limit: '5000mb'}));

//get all apps
app.get("/api/songs", async (req, res) => {
  try {
    const songs = await getAllSongs();

    if (!songs || !songs.length) {
      res.status(404).send({status: 'error: song not found'});
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
      res.status(404).send({status: 'error: song not found'});
    } else {
      res.send(requestedSong);
    }
  } catch (err) {
    res.send(err);
  }
});

//create song
app.post("/api/addsong", async (req, res) => {
  const { name, audioBuffer, genre, imageBuffer, singer } = req.body;
  const id = makeId(6);
  try {
    const newSong = {
      name,
      id: id,
      songurl: `/Assets/audioFiles/${id}`,
      genre,
      imageurl: `/Assets/images/${id}`,
      singer,
    };
    
    fs.writeFileSync(`../client/public/Assets/audioFiles/${id}`, new Buffer(audioBuffer, 'base64'), 'binary', function (err) {});
    fs.writeFileSync(`../client/public/Assets/images/${id}`, new Buffer(imageBuffer, 'base64'), 'binary', function (err) {});

    await createNewSong(newSong);
    res.send({status: 'success'});
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

// delete song by id
app.delete("/api/deletesong/:id", async (req, res) => {
  try {
    const songId = req.params.id;
    await deleteSongById(songId);
    res.send({status: 'success'});
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

//const indexPath = path.join(__dirname, "../client/build/index.html");
//app.get("*", (req, res) => {
//  res.sendFile(indexPath);
//});
