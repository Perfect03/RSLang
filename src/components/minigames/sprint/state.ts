import { transpileModule } from 'typescript';
import { ISprintState } from '../../../interfaces & types/storage-interface';

export const dataStorage: ISprintState = {
    score: 0,
    plus: 10,
    circles: 0,
    correctness: true,
};
