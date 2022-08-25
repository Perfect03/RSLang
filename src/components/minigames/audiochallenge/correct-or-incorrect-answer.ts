import { dataStorage, setAudioChallengeRightAnswers, whichRoundInGameAudio } from '../../utils/storage';

export const addListenersToWordsBtn = (button: HTMLButtonElement) => {
    const replay_btn = document.querySelector('.replay_btn') as HTMLButtonElement;
    button.addEventListener('click', function () {
        if (button.dataset.id === replay_btn.dataset.id) {
            setAudioChallengeRightAnswers();
            whichRoundInGameAudio();
            playSoundCorrectChoice();
            deleteCorrectWord(button.dataset.id as string);
        } else {
            whichRoundInGameAudio();
            playSoundInCorrectChoice();
        }
    });
};

const playSoundCorrectChoice = () => {
    console.log('Correct!');

    // const audio = new Audio('dist/components/minigames/audiochallenge/assets/correct.mp3');
    // audio.play();
};

const playSoundInCorrectChoice = () => {
    console.log('Incorrect!');
    // const audio = new Audio('components/minigames/audiochallenge/incorrect.mp3');
    // audio.play();
};

const deleteCorrectWord = (wordId: string) => {
    for (let i = 0; i < dataStorage.audiochallenge__session__words.length; i++) {
        if (dataStorage.audiochallenge__session__words[i].id === wordId) {
            dataStorage.audiochallenge__session__words.splice(i, 1);
        }
    }
};
