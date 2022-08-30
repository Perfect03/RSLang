import { createLayoutAudioChallenge } from './layout';
import './audiochallenge.css';
import { createGameAudio } from './create-game-session';
import './assets/correct.mp3';
import './assets/incorrect.mp3';
import './assets/volume.png';

createLayoutAudioChallenge();
createGameAudio(0);
