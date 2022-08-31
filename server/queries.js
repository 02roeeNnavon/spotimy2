const { getData } = require("./db.js");

async function getAllSongs() {
  const songs = await getData("SELECT * FROM t_songs");
  return songs.rows;
}

async function getSongById(id) {
  const song = await getData(`SELECT * FROM t_songs WHERE id = '${id}'`);
  return song.rows[0];
}

async function createNewSong(newSong) {
  await getData(`INSERT INTO t_songs (name, id, songurl, genre, imageurl, singer)
    VALUES ('${newSong.name}', '${newSong.id}', '${newSong.songurl}', '${newSong.genre}', '${newSong.imageurl}', '${newSong.singer}');`);
  return;
}

async function deleteSongById(id) {
  await getData(`DELETE FROM t_songs WHERE id = '${id}'`);
  return;
}

module.exports = {
  getAllSongs,
  getSongById,
  createNewSong,
  deleteSongById,
};
