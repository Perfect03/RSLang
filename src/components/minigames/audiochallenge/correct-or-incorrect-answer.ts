import { dataStorage, setAudioChallengeRightAnswers, setAudioChallengeWrongAnswers } from '../../utils/storage';
import '../assets/correct.mp3';
import '../assets/incorrect.mp3';

export const addListenersToWordsBtn = () => {
    const words_div: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.word_div');
    words_div.forEach((el) => {
        el.addEventListener('click', function () {
            disableWordsButton(true);
            if (el.dataset.id === dataStorage.game__current__word.id) {
                setAudioChallengeRightAnswers(dataStorage.game__current__word);
                deleteCorrectWord(el.dataset.id as string);
                changeIdkForNextBtn();
                playSoundCorrectChoice();
                el.style.boxShadow = '0px 0px 10px rgba(42, 232, 99, 0.99)';
                el.style.color = 'black';
            } else if (el.dataset.id !== dataStorage.game__current__word.id) {
                el.style.boxShadow = '0px 0px 10px rgba(255, 0, 0, 0.79)';
                el.style.color = 'black';
                setAudioChallengeWrongAnswers(dataStorage.game__current__word);
                changeIdkForNextBtn();
                playSoundInCorrectChoice();
                showCorrect();
            }
        });
    });
};

export const playSoundCorrectChoice = () => {
    const word_image = document.querySelector('.word_image') as HTMLImageElement;
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;

    if (skip_btn.innerText === 'Next') {
        word_image.style.display = 'block';
    }
    const audio = new Audio('components/minigames/assets/correct.mp3');
    audio.play();
};

export const playSoundInCorrectChoice = () => {
    const word_image = document.querySelector('.word_image') as HTMLImageElement;
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;

    if (skip_btn.innerText === 'Next') {
        word_image.style.display = 'block';
    }
    const audio = new Audio('components/minigames/assets/incorrect.mp3');
    audio.play();
};

export const deleteCorrectWord = (wordId: string) => {
    for (let i = 0; i < dataStorage.audiochallenge__session__words.length; i++) {
        if (dataStorage.audiochallenge__session__words[i].id === wordId) {
            dataStorage.audiochallenge__session__words.splice(i, 1);
        }
    }
};

export const changeIdkForNextBtn = () => {
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

export const disableWordsButton = (condition: boolean) => {
    const words_div: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.word_div');
    words_div.forEach((el) => {
        el.disabled = condition;
    });
};

export const showCorrect = () => {
    const words_div: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.word_div');
    words_div.forEach((el) => {
        if (el.dataset.id === dataStorage.game__current__word.id) {
            el.style.boxShadow = '0px 0px 10px rgba(42, 232, 99, 0.99)';
            el.style.color = 'black';
        }
    });
};
