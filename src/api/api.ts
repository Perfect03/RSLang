import axios from 'axios';
import { IWord } from '../interfaces & types/words';

export const baseUrl = 'https://rs-lang-team-38.herokuapp.com/';

export let getAllWords;

const requestForWords = async (page: number, group: number): Promise<IWord[]> => {
    try {
        const response = await axios.get(`${baseUrl}words?page=${page}&group=${group}`);
        return response.data;
    } catch (error) {
        return [];
    }
};

export const getWords = async (page: number, group: number): Promise<IWord[]> => {
    getAllWords = await requestForWords(page, group);
};


const requestForWordById = async (id: string) => {
    try {
        const response = await axios.get(`${baseUrl}words/${id}`);
        return response.data;
    } catch (error) {
        return [];
    }
};

export const getWordById = async (id: string) => {
    return await requestForWordById(id);
};
