import { baseUrl, getWordById, getWords } from '../../../api/api';
import { IWord, IWords } from '../../../interfaces & types/words';
import { getRandomInt } from '../../utils/helpers';
import { dataStorage, setAudioChallengeCurrentWord, whichRoundInGameAudio } from '../../utils/storage';
import { addKeyBoardToGame } from './choose-with-keyboard';
import { addListenersToWordsBtn, changeNextForIdkBtn, disableWordsButton } from './correct-or-incorrect-answer';
import { createStatsPopUp } from './statistics-popup';

export const createGameAudio = async (level: number) => {
    const session_words: IWords = [];
    addListenersToWordsBtn();
    addPlayListenerToReplayBtn();
    const readWords = async (page: number, group: number) => {
        const cards = await getWords(page, group);
        renderWords(cards);
    };

    const renderWords = async (cards: IWord[]) => {
        for (let i = 0; i < 20; i++) {
            session_words.push(cards[i]);
            dataStorage.audiochallenge__session__words.push(cards[i]);
        }
    };

    await readWords(getRandomInt(29), level);
    createRoundGameAudio(session_words);
    putWordsInGameAudio(dataStorage.audiochallenge__round__words);
    addListenerToSkipBtn();
    addKeyBoardToGame();
};

export const createRoundGameAudio = (cards: IWords) => {
    while (dataStorage.audiochallenge__round__words.length < 5) {
        const random_index = getRandomInt(dataStorage.audiochallenge__session__words.length);
        if (!dataStorage.audiochallenge__round__words.includes(cards[random_index]))
            dataStorage.audiochallenge__round__words.push(cards[random_index]);
    }
};

export const putWordsInGameAudio = async (cards: IWords) => {
    const words_div: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.word_div');
    for (let i = 0; i < 4; i++) {
        words_div[i].textContent = cards[i].wordTranslate;
        words_div[i].dataset.id = cards[i].id;
        words_div[i].id = (i + 1).toString();
    }
    const random_index = getRandomInt(4);
    const word = await getWordById(words_div[random_index].dataset.id as string);
    setAudioChallengeCurrentWord(word);
    setCurrentWordAudioAndImage();
};

export const addPlayListenerToReplayBtn = () => {
    const replay_btn = document.querySelector('.replay_btn') as HTMLButtonElement;
    const audio = document.querySelector('.word_audio') as HTMLAudioElement;
    replay_btn.addEventListener('click', function () {
        audio.play();
    });
};

export const addListenerToSkipBtn = () => {
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;

    skip_btn.addEventListener('click', function () {
        if (dataStorage.audiochallenge__num__of__round <= 10) {
            dataStorage.audiochallenge__round__words = [];
            createRoundGameAudio(dataStorage.audiochallenge__session__words);
            putWordsInGameAudio(dataStorage.audiochallenge__round__words);
            changeNextForIdkBtn();
            whichRoundInGameAudio();
            disableWordsButton(false);
        } else {
            createStatsPopUp();
            dataStorage.audiochallenge__num__of__round = 9;
            whichRoundInGameAudio();
            console.log(dataStorage);
        }
    });
};

export const setCurrentWordAudioAndImage = () => {
    const audio = document.querySelector('.word_audio') as HTMLAudioElement;
    audio.src = `${baseUrl}${dataStorage.audiochallenge__current__word.audio}`;

    if (dataStorage.audiochallenge__num__of__round < 11) {
        audio.play();
    }

    const word_image = document.querySelector('.word_image') as HTMLImageElement;
    word_image.src = `${baseUrl}${dataStorage.audiochallenge__current__word.image}`;
};
