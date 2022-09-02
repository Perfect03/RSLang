import { IWord, IWords } from './words';

export interface IDataStorage {
    audiochallenge__num__of__round: number;
    game__round__right__answers: IWords;
    game__round__wrong__answers: IWords;
    audiochallenge__session__words: IWords;
    audiochallenge__round__words: IWords;
    game__current__word: IWord;
    sprint__state: ISprintState;
}

export interface ISprintState {
    score: number;
    plus: number;
    circles: number;
    correctness: boolean;
}
