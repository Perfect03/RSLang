import axios from 'axios';
import { storageUserAccInfo } from '../../components/utils/storage';
import { IWordIsDiffOrLearn } from '../../interfaces & types/words';
import { baseUrl } from '../api';

export const axiosCreateUserWord = ({ wordId, word }: IWordIsDiffOrLearn) => {
    try {
        const url = `${baseUrl}users/${storageUserAccInfo.userId}/words/${wordId}`;
        const headers = {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
        const body = JSON.stringify(word);
        axios.post(url, body, { headers });
    } catch (error) {
        return error;
    }
};

export const axiosGetUserWord = async (wordId: string) => {
    const url = `${baseUrl}users/${storageUserAccInfo.userId}/words/${wordId}`;
    const headers = {
        Authorization: `Bearer ${storageUserAccInfo.token}`,
        Accept: 'application/json',
    };
    const response = axios.get(url, { headers });
    return response;
};

export const axiosDeleteWord = async (wordId: string) => {
    const url = `${baseUrl}users/${storageUserAccInfo.userId}/words/${wordId}`;
    const headers = {
        Authorization: `Bearer ${storageUserAccInfo.token}`,
        Accept: 'application/json',
    };
    await axios.delete(url, { headers });
};
export const axiosGetAllUserWords = async () => {
    const url = `${baseUrl}users/${storageUserAccInfo.userId}/words/`;
    const headers = {
        Authorization: `Bearer ${storageUserAccInfo.token}`,
        Accept: 'application/json',
    };
    const response = await axios.get(url, { headers });
    console.log('Все слова:', response.data);
    return response.data;
};

// export const getAllUserWords = async () => {
//     const rawResponse = await fetch(`${baseUrl}users/${storageUserAccInfo.userId}/words/`, {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${storageUserAccInfo.token}`,
//             Accept: 'application/json',
//         },
//     });
//     const content: Array<IWordIsDiffOrLearnResponse> = await rawResponse.json();

//     await content.forEach((el) => {
//         checkIsWordLearnOrNot(el);
//         checkIsWordHardOrEasy(el);
//     });
//     console.log(tempStorageUsersWords);
// };

// const checkIsWordHardOrEasy = (word: IWordIsDiffOrLearnResponse) => {
//     if (word.difficulty === 'hard') tempStorageUsersWords.hardWords.push(word);
// };

// const checkIsWordLearnOrNot = (word: IWordIsDiffOrLearnResponse) => {
//     if (word.optional.learned === true) tempStorageUsersWords.learnedWords.push(word);
// };

// const convertAllUsersWords = async () => {
//     tempStorageUsersWords.learnedWords.forEach(async (el) => {
//         const word = await getWordById(el.wordId);
//         storageUsersWords.learnedWords.push(word);
//     });
//     tempStorageUsersWords.hardWords.forEach(async (el) => {
//         const word = await getWordById(el.wordId);
//         storageUsersWords.hardWords.push(word);
//     });
//     console.log(storageUsersWords);
// };
