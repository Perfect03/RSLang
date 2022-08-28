import { IDataStorage } from '../../interfaces & types/storage-interface';

export const dataStorage: IDataStorage = {
    audiochallenge__num__of__round: 0,
    audiochallenge__right__answers: 0,
    audiochallenge__session__words: [],
    audiochallenge__round__words: [],
};

export const setAudioChallengeRightAnswers = () => {
    dataStorage.audiochallenge__right__answers += 1;
};

export const whichRoundInGameAudio = () => {
    dataStorage.audiochallenge__num__of__round += 1;
    const progress_bar = document.querySelector('.progress_bar') as HTMLDivElement;
    progress_bar.textContent = `${dataStorage.audiochallenge__num__of__round.toString()}/20`;
};
