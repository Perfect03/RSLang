import axios from 'axios';
import { IWord } from '../interfaces & types/words'

const baseUrl = 'https://rs-lang-team-38.herokuapp.com/';

const requestForWords = async (page: number, group: number): Promise<IWord[]> => {
    try {
        const response = await axios.get(`${baseUrl}words?page=${page}&group=${group}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const getWords = async (page: number, group: number): Promise<IWord[]> => {
    return await requestForWords(page, group);
};
