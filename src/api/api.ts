import axios from 'axios';

const baseUrl = 'https://rs-lang-team-38.herokuapp.com/';

export let getAllWords;

const requestForWords = async (page: number, group: number) => {
    try {
        const response = await axios.get(`${baseUrl}words?page=${page}&group=${group}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export const getWords = async (page: number, group: number) => {
    getAllWords = await requestForWords(page, group);
};

