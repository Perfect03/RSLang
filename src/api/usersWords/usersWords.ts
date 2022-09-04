import { storageUserAccInfo } from '../../components/utils/storage';
import { ICreateWord } from '../../interfaces & types/words';
import { baseUrl } from '../api';

const createUserWord = async ({ wordId, word }: ICreateWord) => {
    const rawResponse = await fetch(`${baseUrl}users/${storageUserAccInfo.userId}/words/${wordId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(word),
    });
    const content = await rawResponse.json();

    console.log('post:', content);
};

const getUserWord = async (wordId: string) => {
    const rawResponse = await fetch(`${baseUrl}users/${storageUserAccInfo.userId}/words/${wordId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
        },
    });
    const content = await rawResponse.json();

    console.log('get', content);
};

export const immitator = () => {
    const header = document.querySelector('.header_content_page') as HTMLDivElement;
    const button = document.createElement('button');

    header.appendChild(button);
    button.style.width = '100px';
    button.style.height = '50px';
    button.style.backgroundColor = 'darkmagenta';

    const testWord: ICreateWord = {
        wordId: '5e9f5ee35eb9e72bc21af4a6',
        word: {
            difficulty: 'weak',
            optional: {
                learned: true,
            },
        },
    };
    button.addEventListener('click', function () {
        createUserWord(testWord);
        getUserWord(testWord.wordId);
    });
};
