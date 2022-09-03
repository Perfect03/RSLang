export interface IWord {
    id: string;
    group: number;
    page: number;
    word: string;
    image: string;
    audio: string;
    audioMeaning: string;
    audioExample: string;
    textMeaning: string;
    textExample: string;
    transcription: string;
    textExampleTranslate: string;
    textMeaningTranslate: string;
    wordTranslate: string;
}

export type IWords = IWord[];

export interface IUsersWords {
    learnedWords: IWord[];
    diffictultWords: IWord[];
}

export interface ICreateWord {
    wordId: string;
    word: {
        difficulty: string;
        optional?: {
            learned: boolean;
            option2?: string;
        };
    };
}
