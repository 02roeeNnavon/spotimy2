let audio = null;

const playSong = (songUrl, progress) => {
  audio?.pause();
  audio = new Audio(songUrl);
  audio.currentTime = progress;
  audio.play();
};
const stopSong = () => {
  audio?.pause();
}
const getProgress = () => {
  return audio?.currentTime;
}
const isPlaying = () => {
  return !audio?.paused;
}
export { playSong,stopSong,getProgress,isPlaying };
