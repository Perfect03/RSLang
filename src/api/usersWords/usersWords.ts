import { storageUserAccInfo, storageUsersWords, tempStorageUsersWords } from '../../components/utils/storage';
import { IWordIsDiffOrLearn, IWordIsDiffOrLearnResponse } from '../../interfaces & types/words';
import { baseUrl, getWordById } from '../api';

export const createUserWord = async ({ wordId, word }: IWordIsDiffOrLearn) => {
    await fetch(`${baseUrl}users/${storageUserAccInfo.userId}/words/${wordId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(word),
    });
};

export const getUserWord = async (wordId: string) => {
    const word = await fetch(`${baseUrl}users/${storageUserAccInfo.userId}/words/${wordId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
        },
    });
    return word;
};

export const getAllUserWords = async () => {
    const rawResponse = await fetch(`${baseUrl}users/${storageUserAccInfo.userId}/words/`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
        },
        
    });
    const content: Array<IWordIsDiffOrLearnResponse> = await rawResponse.json();

    await content.forEach((el) => {
        checkIsWordLearnOrNot(el);
        checkIsWordHardOrEasy(el);
    });
    console.log(tempStorageUsersWords);
    await convertAllUsersWords();
};

const checkIsWordHardOrEasy = (word: IWordIsDiffOrLearnResponse) => {
    if (word.difficulty === 'hard') tempStorageUsersWords.hardWords.push(word);
};

const checkIsWordLearnOrNot = (word: IWordIsDiffOrLearnResponse) => {
    if (word.optional.learned === true) tempStorageUsersWords.learnedWords.push(word);
};

const convertAllUsersWords = async () => {
    tempStorageUsersWords.learnedWords.forEach(async (el) => {
        const word = await getWordById(el.wordId);
        storageUsersWords.learnedWords.push(word);
    });
    tempStorageUsersWords.hardWords.forEach(async (el) => {
        const word = await getWordById(el.wordId);
        storageUsersWords.hardWords.push(word);
    });
};
