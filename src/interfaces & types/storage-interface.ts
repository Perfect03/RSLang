import { IWord, IWords } from './words';

export interface IDataStorage {
    audiochallenge__num__of__round: number;
    audiochallenge__round__right__answers: IWords;
    audiochallenge__round__wrong__answers: IWords;
    audiochallenge__session__words: IWords;
    audiochallenge__round__words: IWords;
    audiochallenge__current__word: IWord;
}
