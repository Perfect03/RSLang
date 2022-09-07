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

export interface IServerWord {
    wordId: string;
    difficulty: IWordDifficulty;
}

export type IWords = IWord[];

export type IWordDifficulty = 'learned' | 'hard';

export type ItempStorageUsersWords = {
    learnedWords: IWordIsDiffOrLearnResponse[];
    hardWords: IWordIsDiffOrLearnResponse[];
};

export interface IWordIsDiffOrLearn {
    wordId: string;
    word: {
        difficulty: string;
        optional?: {
            learned: boolean;
            option2?: string;
        };
    };
}

export interface IWordIsDiffOrLearnResponse {
    userId: string;
    difficulty: string;
    optional: {
        learned: boolean;
    };
    wordId: string;
}

export interface IStorageUserWords {
    hardWords: IWord[];
    learnedWords: IWord[];
}
