import { UserAuthInfo } from '../../interfaces & types/authorization';
import { IUserStatistic } from '../../interfaces & types/statistics';
import { IDataStorage } from '../../interfaces & types/storage-interface';
import { IStorageUserWords, ItempStorageUsersWords, IWord } from '../../interfaces & types/words';

export const dataStorage: IDataStorage = {
    audiochallenge__num__of__round: 1,
    audiochallenge__round__right__answers: [],
    audiochallenge__round__wrong__answers: [],
    audiochallenge__session__words: [],
    audiochallenge__round__words: [],
    audiochallenge__words__in__row: 0,
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
    sprint__round__right__answers: [],
    sprint__round__wrong__answers: [],
    sprint__words__in__row: 0,
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

export const storageUserStatistic: IUserStatistic = {
    learnedWords: 0,
    optional: {
        common__accuracy: 0,
        sprint__words: 0,
        sprint__words__array: [],
        sprint__right: 0,
        sprint__accuracy: 0,
        sprint__in_a_row: 0,
        audiochallenge__words: 0,
        audiochallenge__words__array: [],
        audiochallenge__right: 0,
        audiochallenge__accuracy: 0,
        audiochallenge__in_a_row: 0,
    },
};

export const setAudioChallengeRightAnswers = async (word: IWord) => {
    dataStorage.audiochallenge__round__right__answers.push(word);
    if (storageUserStatistic.optional.audiochallenge__words__array.indexOf(word) < 0) {
        storageUserStatistic.optional.audiochallenge__words__array.push(word);
        storageUserStatistic.optional.audiochallenge__words++;
    }
    storageUserStatistic.optional.audiochallenge__right++;
    storageUserStatistic.optional.audiochallenge__accuracy = Number(
        (
            (storageUserStatistic.optional.audiochallenge__right /
                storageUserStatistic.optional.audiochallenge__words__array.length) *
            100
        ).toFixed(2)
    );
};

export const setSprintRightAnswers = async (word: IWord) => {
    dataStorage.sprint__round__right__answers.push(word);
    if (storageUserStatistic.optional.sprint__words__array.indexOf(word) < 0) {
        storageUserStatistic.optional.sprint__words__array.push(word);
        storageUserStatistic.optional.sprint__words++;
    }
    storageUserStatistic.optional.sprint__right++;
    storageUserStatistic.optional.sprint__accuracy = Number(
        (
            (storageUserStatistic.optional.sprint__right / storageUserStatistic.optional.sprint__words__array.length) *
            100
        ).toFixed(2)
    );
};

export const setAudioChallengeWrongAnswers = async (word: IWord) => {
    dataStorage.audiochallenge__round__wrong__answers.push(word);
    if (storageUserStatistic.optional.audiochallenge__words__array.indexOf(word) < 0) {
        storageUserStatistic.optional.audiochallenge__words__array.push(word);
        storageUserStatistic.optional.audiochallenge__words++;
    }
    storageUserStatistic.optional.audiochallenge__accuracy = Number(
        (
            (storageUserStatistic.optional.audiochallenge__right /
                storageUserStatistic.optional.audiochallenge__words__array.length) *
            100
        ).toFixed(2)
    );
};

export const setSprintWrongAnswers = async (word: IWord) => {
    dataStorage.sprint__round__wrong__answers.push(word);
    if (storageUserStatistic.optional.sprint__words__array.indexOf(word) < 0) {
        storageUserStatistic.optional.sprint__words__array.push(word);
        storageUserStatistic.optional.sprint__words++;
    }
    storageUserStatistic.optional.sprint__accuracy = Number(
        (
            (storageUserStatistic.optional.sprint__right / storageUserStatistic.optional.sprint__words__array.length) *
            100
        ).toFixed(2)
    );
};

export const setAudioChallengeInARow = async (value: boolean) => {
    value ? dataStorage.audiochallenge__words__in__row++ : (dataStorage.audiochallenge__words__in__row = 0);
    if (dataStorage.audiochallenge__words__in__row > storageUserStatistic.optional.audiochallenge__in_a_row)
        storageUserStatistic.optional.audiochallenge__in_a_row++;
};

export const setSprintInARow = async (value: boolean) => {
    value ? dataStorage.sprint__words__in__row++ : (dataStorage.sprint__words__in__row = 0);
    if (dataStorage.sprint__words__in__row > storageUserStatistic.optional.sprint__in_a_row)
        storageUserStatistic.optional.sprint__in_a_row++;
};

export const whichRoundInGameAudio = () => {
    dataStorage.audiochallenge__num__of__round++;
    const progress_bar = document.querySelector('.progress_bar') as HTMLDivElement;
    progress_bar.textContent = `${dataStorage.audiochallenge__num__of__round.toString()}/10`;
};

export const setCurrentWord = (word: IWord) => {
    dataStorage.game__current__word = word;
};
