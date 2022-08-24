import { IDataStorage } from '../../interfaces & types/storage-interface';

export const dataStorage: IDataStorage = {
    audiochallenge__right__answers: 0,
};

export const setAudioChallengeRightAnswers = (num: number) => {
    dataStorage.audiochallenge__right__answers = num;
};
