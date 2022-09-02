import { IDataStorage } from '../../interfaces & types/storage-interface';
import { IWord } from '../../interfaces & types/words';

export const dataStorage: IDataStorage = {
    audiochallenge__num__of__round: 1,
    audiochallenge__round__right__answers: [],
    audiochallenge__round__wrong__answers: [],
    audiochallenge__session__words: [],
    audiochallenge__round__words: [],
    audiochallenge__current__word: {
        id: '',
        group: 0,
        page: 0,
        word: '',
        image: '',
        audio: '',
        audioMeaning: '',
        audioExample: '',
        textMeaning: '',
        textExample: '',
        transcription: '',
        textExampleTranslate: '',
        textMeaningTranslate: '',
        wordTranslate: '',
    },
};

export const setAudioChallengeRightAnswers = async (word: IWord) => {
    dataStorage.audiochallenge__round__right__answers.push(word);
};
export const setAudioChallengeWrongAnswers = async (word: IWord) => {
    dataStorage.audiochallenge__round__wrong__answers.push(word);
};

export const whichRoundInGameAudio = () => {
    dataStorage.audiochallenge__num__of__round++;
    const progress_bar = document.querySelector('.progress_bar') as HTMLDivElement;
    progress_bar.textContent = `${dataStorage.audiochallenge__num__of__round.toString()}/10`;
};

export const setAudioChallengeCurrentWord = (word: IWord) => {
    dataStorage.audiochallenge__current__word = word;
};
