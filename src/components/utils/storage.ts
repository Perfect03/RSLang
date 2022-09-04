import { UserAuthInfo } from '../../interfaces & types/authorization';
import { IUserStatistic } from '../../interfaces & types/statistics';
import { IDataStorage } from '../../interfaces & types/storage-interface';
import { IStorageUserWords, ItempStorageUsersWords, IWord } from '../../interfaces & types/words';

export const dataStorage: IDataStorage = {
    audiochallenge__num__of__round: 1,
    game__round__right__answers: [],
    game__round__wrong__answers: [],
    audiochallenge__session__words: [],
    audiochallenge__round__words: [],
    game__current__word: {
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
    sprint__state: {
        score: 0,
        plus: 10,
        circles: 0,
        correctness: true,
    },
};

export const storageUserAccInfo: UserAuthInfo = {
    message: '',
    token: '',
    refreshToken: '',
    userId: '',
    name: '',
    email: '',
};

export const tempStorageUsersWords: ItempStorageUsersWords = {
    learnedWords: [],
    hardWords: [],
};

export const storageUsersWords: IStorageUserWords = {
    learnedWords: [],
    hardWords: [],
};

export const UserStatistic: IUserStatistic = {
    learnedWords : 0,
    additional: {
        common__accuracy : 0,
        sprint__words : 0,
        sprint__accuracy : 0,
        sprint__in_a_row : 0,
        audiochallenge__words : 0,
        audiochallenge__accuracy : 0,
        audiochallenge__in_a_row : 0,
    } 
}

/*
export const setAudioChallengeRightAnswers = async (word: IWord) => {
    dataStorage.audiochallenge__round__right__answers.push(word);
}*/

export const setRightAnswers = async (word: IWord) => {
    dataStorage.game__round__right__answers.push(word);
};
export const setWrongAnswers = async (word: IWord) => {
    dataStorage.game__round__wrong__answers.push(word);
};

export const whichRoundInGameAudio = () => {
    dataStorage.audiochallenge__num__of__round++;
    const progress_bar = document.querySelector('.progress_bar') as HTMLDivElement;
    progress_bar.textContent = `${dataStorage.audiochallenge__num__of__round.toString()}/10`;
};

export const setCurrentWord = (word: IWord) => {
    dataStorage.game__current__word = word;
};
