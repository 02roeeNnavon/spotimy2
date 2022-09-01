let audio = null;
const playSong = (songUrl) => {
  audio?.pause();
  audio = new Audio(songUrl);
  audio.play();
};
const stopSong = () => {
  audio?.pause();
}
export { playSong,stopSong };
