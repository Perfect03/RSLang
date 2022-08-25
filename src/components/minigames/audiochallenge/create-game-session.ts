import { baseUrl, getWordById, getWords } from '../../../api/api';
import { IWord, IWords } from '../../../interfaces & types/words';
import { getRandomInt } from '../../utils/helpers';
import { dataStorage } from '../../utils/storage';
import { addListenersToWordsBtn } from './correct-or-incorrect-answer';
import { nextWords } from './next-words-btn';

export const createGameAudio = async () => {
    const level = 0;
    const session_words: IWords = [];

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
    addListenerToSkipBtn();
    putWordsInGameAudio(dataStorage.audiochallenge__round__words);
};

const createRoundGameAudio = (cards: IWords) => {
    for (let i = 0; i < 4; i++) {
        dataStorage.audiochallenge__round__words.push(
            cards[getRandomInt(dataStorage.audiochallenge__session__words.length)]
        );
    }
};

const putWordsInGameAudio = (cards: IWords) => {
    const words_div: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.word_div');
    for (let i = 0; i < 4; i++) {
        words_div[i].textContent = cards[i].wordTranslate;
        words_div[i].dataset.id = cards[i].id;
        addListenersToWordsBtn(words_div[i]);
    }
    addWordToReplayBtn();
};

const addWordToReplayBtn = () => {
    const words_div: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.word_div');
    const random_index = getRandomInt(4);
    const replay_btn = document.querySelector('.replay_btn') as HTMLButtonElement;
    replay_btn.dataset.id = words_div[random_index].dataset.id;

    addPlayListenerToReplayBtn(replay_btn);
};

const addPlayListenerToReplayBtn = async (button: HTMLButtonElement) => {
    const word = await getWordById(button.dataset.id as string);
    const audio = new Audio(`${baseUrl}${word.audio}`);
    button.addEventListener('click', function () {
        audio.play();
    });
};

const addListenerToSkipBtn = () => {
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;
    skip_btn.addEventListener('click', function () {
        dataStorage.audiochallenge__round__words = [];
        createRoundGameAudio(dataStorage.audiochallenge__session__words);
        console.log('createRoundGameAudio', dataStorage.audiochallenge__session__words);
        putWordsInGameAudio(dataStorage.audiochallenge__round__words);
        nextWords();
    });
};
