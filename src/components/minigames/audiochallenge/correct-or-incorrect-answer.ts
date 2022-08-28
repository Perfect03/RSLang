import { dataStorage, setAudioChallengeRightAnswers, whichRoundInGameAudio } from '../../utils/storage';

export const addListenersToWordsBtn = (button: HTMLButtonElement) => {
    const replay_btn = document.querySelector('.replay_btn') as HTMLButtonElement;
    button.addEventListener('click', function () {
        whichRoundInGameAudio();
        if (button.dataset.id === replay_btn.dataset.id) {
            setAudioChallengeRightAnswers();
            deleteCorrectWord(button.dataset.id as string);
            changeIdkForNexBtn();
            playSoundCorrectChoice();
        } else {
            playSoundInCorrectChoice();
        }
    });
};

const playSoundCorrectChoice = () => {
    console.log('Correct!');
    const word_image = document.querySelector('.word_image') as HTMLImageElement;
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;

    if (skip_btn.innerText === 'Next') {
        word_image.style.display = 'block';
    }
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

const changeIdkForNexBtn = () => {
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;
    skip_btn.innerText = 'Next';
    skip_btn.style.background = 'linear-gradient(rgb(82, 205, 228) 15%, rgb(191, 232, 142) 100%)';
};

export const changeNextForIdkBtn = () => {
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;
    const word_image = document.querySelector('.word_image') as HTMLImageElement;
    skip_btn.innerText = 'Skip';
    skip_btn.style.background = 'linear-gradient(rgb(247, 90, 109) 15%, rgb(219, 137, 200) 100%)';
    word_image.style.display = 'None';
};
