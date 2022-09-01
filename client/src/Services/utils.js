import dumb from "../Assets/audioFiles/dumb.mp3";
import ivriAnochi from "../Assets/audioFiles/ivriAnochi.mp3";
import neverGonnaGiveYouUp from "../Assets/audioFiles/neverGonnaGiveYouUp.mp3";
import ourGodIsAwsomeGod from "../Assets/audioFiles/ourGodIsAwsomeGod.mp3";
import trapAnthem from "../Assets/audioFiles/trapAnthem.mp3";
const songs = {
  "dumb.mp3": dumb,
  "ivriAnochi.mp3": ivriAnochi,
  "neverGonnaGiveYouUp.mp3": neverGonnaGiveYouUp,
  "ourGodIsAwsomeGod.mp3": ourGodIsAwsomeGod,
  "trapAnthem.mp3": trapAnthem
};
let audio = null;
const playSong = async (songUrl) => {
  audio?.pause();
  audio = new Audio(songs[songUrl]);
  audio.play();
};
export { playSong };
