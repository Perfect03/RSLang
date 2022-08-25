import { IWords } from './words';

export interface IDataStorage {
    audiochallenge__num__of__round: number;
    audiochallenge__right__answers: number;
    audiochallenge__session__words: IWords;
    audiochallenge__round__words: IWords;
}
