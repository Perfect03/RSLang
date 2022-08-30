import { baseUrl, getWordById, getWords } from '../../../api/api';
import { IWord, IWords } from '../../../interfaces & types/words';
import { getRandomInt } from '../../utils/helpers';
import { dataStorage, setAudioChallengeCurrentWord, whichRoundInGameAudio } from '../../utils/storage';
import { addListenersToWordsBtn, changeNextForIdkBtn, disableWordsButton } from './correct-or-incorrect-answer';

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
};

const createRoundGameAudio = (cards: IWords) => {
    for (let i = 0; i < 4; i++) {
        dataStorage.audiochallenge__round__words.push(
            cards[getRandomInt(dataStorage.audiochallenge__session__words.length)]
        );
    }
};

const putWordsInGameAudio = async (cards: IWords) => {
    const words_div: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.word_div');
    for (let i = 0; i < 4; i++) {
        words_div[i].textContent = cards[i].wordTranslate;
        words_div[i].dataset.id = cards[i].id;
    }
    const random_index = getRandomInt(4);
    const word = await getWordById(words_div[random_index].dataset.id as string);
    setAudioChallengeCurrentWord(word);
    setCurrentWordAudioAndImage();
};

const addPlayListenerToReplayBtn = () => {
    const replay_btn = document.querySelector('.replay_btn') as HTMLButtonElement;
    const audio = document.querySelector('.word_audio') as HTMLAudioElement;
    replay_btn.addEventListener('click', function () {
        audio.play();
    });
};

export const addListenerToSkipBtn = () => {
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;

    skip_btn.addEventListener('click', function () {
        dataStorage.audiochallenge__round__words = [];
        createRoundGameAudio(dataStorage.audiochallenge__session__words);
        putWordsInGameAudio(dataStorage.audiochallenge__round__words);
        changeNextForIdkBtn();
        whichRoundInGameAudio();
        disableWordsButton(false);
        if (dataStorage.audiochallenge__num__of__round === 11) {
            console.log('Out of rounds');
            console.log(dataStorage);
        }
    });
};

export const setCurrentWordAudioAndImage = () => {
    const audio = document.querySelector('.word_audio') as HTMLAudioElement;
    audio.src = `${baseUrl}${dataStorage.audiochallenge__current__word.audio}`;

    const word_image = document.querySelector('.word_image') as HTMLImageElement;
    word_image.src = `${baseUrl}${dataStorage.audiochallenge__current__word.image}`;
};
