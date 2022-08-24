import { getWords } from '../../../api/api';
import { IWord, IWords } from '../../../interfaces & types/words';

export const getWordsForGameAudio = async () => {
    const readWords = async (page: number, group: number) => {
        const cards = await getWords(page, group);
        renderWords(cards);
    };

    const session_words: IWords = [];
    const renderWords = async (cards: IWord[]) => {
        for (let i = 0; i < 20; i++) {
            session_words.push(cards[i]);
        }
    };
    await readWords(1, 0);
    putWordsInGameAudio(session_words);
};

const putWordsInGameAudio = (cards: IWords) => {
    const words_div = document.querySelectorAll('.word_div');
    console.log(words_div);
    for (let i = 0; i < 4; i++) {
        console.log(cards);
        console.log(cards[i]);
        // words_div[i].textContent = cards[i].word;
    }
};
