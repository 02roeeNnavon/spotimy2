const { getData } = require("./db.js");

async function getAllSongs() {
  const songs = await getData("SELECT * FROM t_songs");
  return songs.rows;
}

async function getSongById(id) {
  const song = await getData(`SELECT * FROM t_songs WHERE id = '${id}'`);
  return song.rows[0];
}

async function getUser(username, password) {
  const user = await getData(
    `SELECT * FROM t_users WHERE username = '${username}' AND  password = '${password}'`
  );
  return user.rows;
}

async function createNewUser(user) {
  await getData(`INSERT INTO t_users (username, password, status)
    VALUES ('${user.username}', '${user.password}', 'user');`);
  return;
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

async function search(value) {
  value = value.toLowerCase();
  const songs = await getData(
    `SELECT * FROM t_songs WHERE LOWER(name) LIKE '%${value}%'`
  );
  console.log();
}
async function search(value,fillter){
  value = value.toLowerCase();
  const songs = await getData(`SELECT * FROM t_songs WHERE LOWER(${fillter}) LIKE '%${value}%'`);
  return songs.rows;
}


async function fillter(value){
  const songs = await getData(`SELECT * FROM t_songs WHERE genre = '${value}'`)
  console.log('hello1');
  return songs.rows;
}

async function genre(){
  const genre = await getData(`SELECT DISTINCT genre FROM t_songs`)
  return genre.rows;
}

module.exports = {
  getAllSongs,
  getSongById,
  createNewSong,
  deleteSongById,
  search,
  getUser,
  createNewUser,
  fillter,
  genre,
};
