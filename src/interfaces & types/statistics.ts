import { IWords } from './words';

export interface IUserStatistic {
    learnedWords: number;
    optional: OptionalStatistics;
}

type OptionalStatistics = {
    common__accuracy: number;
    sprint__words: IWords;
    sprint__accuracy: number;
    sprint__in_a_row: number;
    audiochallenge__words: IWords;
    audiochallenge__accuracy: number;
    audiochallenge__in_a_row: number;
};
