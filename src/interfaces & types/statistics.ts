import { IWords } from './words';

export interface IUserStatistic {
    learnedWords: number;
    optional: OptionalStatistics;
}

type OptionalStatistics = {
    common__accuracy: number;
    sprint__words: number;
    sprint__right: number;
    sprint__accuracy: number;
    sprint__in_a_row: number;
    audiochallenge__words: number;
    audiochallenge__right: number;
    audiochallenge__accuracy: number;
    audiochallenge__in_a_row: number;
};

export interface ISprintAndAudioWords {
    audiochallenge__words__array: IWords;
    sprint__words__array: IWords;
}

export interface IGetUserStatistic extends IUserStatistic {
    id: string;
}
