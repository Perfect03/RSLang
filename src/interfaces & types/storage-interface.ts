import { IWord, IWords } from './words';

export interface IDataStorage {
    audiochallenge__num__of__round: number;
    audiochallenge__round__right__answers: IWords;
    audiochallenge__round__wrong__answers: IWords;
    audiochallenge__session__words: IWords;
    audiochallenge__round__words: IWords;
    game__current__word: IWord;
    sprint__state: ISprintState;
    sprint__round__right__answers: IWords;
    sprint__round__wrong__answers: IWords;
    audiochallenge__words__in__row: 0;
    sprint__words__in__row: 0;
}

export interface ISprintState {
    score: number;
    plus: number;
    circles: number;
    correctness: boolean;
}
