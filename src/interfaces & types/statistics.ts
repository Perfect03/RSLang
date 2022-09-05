export interface IUserStatistic {
    learnedWords: number;
    optional: OptionalStatistics;
}

type OptionalStatistics = {
    common__accuracy: number;
    sprint__words: number;
    sprint__accuracy: number;
    sprint__in_a_row: number;
    audiochallenge__words: number;
    audiochallenge__accuracy: number;
    audiochallenge__in_a_row: number;
};
