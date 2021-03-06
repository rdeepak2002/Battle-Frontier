import * as PIXISound from 'pixi-sound';

import prologue from "./../../resources/music/prologue.mp3";
import battle1_intro from "./../../resources/music/battle1/battle1_intro.mp3";
import battle1_loop from "./../../resources/music/battle1/battle1_loop.mp3";

// check out: https://opengameart.org/content/boss-battle-2-symphonic-metal
// check out: https://www.youtube.com/watch?v=hahYL4H0HD0&ab_channel=%E3%83%A6%E3%83%BC%E3%83%95%E3%83%AB%E3%82%AB%E3%81%AE%E3%82%B2%E3%83%BC%E3%83%A0%E9%9F%B3%E6%A5%BD%E3%81%A8DTM%E3%81%A1%E3%82%83%E3%82%93%E3%81%AD%E3%82%8B
// check out: https://wingless-seraph.net/en/material-riyoukiyaku_eng.html

/**
 * Class for managing Music
 * @author Deepak Ramalingam
 */
class MusicManager {
  /**
   * Constructor to initialize variables
   */
  constructor() {
    // variables to keep track of the song currently playing
    this.now_playing = undefined;
    // variable to keep track of the music files
    this.files = {
      "prologue": {"file": prologue},
      "battle1_intro" : {"file": battle1_intro, "loop_song": "battle1_loop"},
      "battle1_loop": {"file": battle1_loop}
    };
  }

  /**
   * function to play music based off filename
   * @param {string} song The string name of the song to play
   * @param {boolean} loop Boolean to control looping
   * @param {boolean} override Boolean to ignore current music playing
   */
  play_music(song, loop, override) {
    if((!this.now_playing || override) && this.files && this.files[song]) {
      this.now_playing = PIXISound.default.Sound.from({
        url: this.files[song].file,
        autoPlay: true,
        loop: loop,
        complete: () => {
          if(this.files[song].loop_song) {
            this.play_music(this.files[song].loop_song, true, true);
          }
        }
      });
    }
  }
}

export default MusicManager;
