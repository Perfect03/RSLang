import { storageUserAccInfo, storageUsersWords } from '../../components/utils/storage';
import { UserResponse } from '../../interfaces & types/authorization';
import { baseUrl } from '../api';
import { getAllUserWords } from '../usersWords/usersWords';

export const loginUser = async (user: UserResponse) => {
    const rawResponse = await fetch(`${baseUrl}signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const content = await rawResponse.json();

    storageUserAccInfo.message = content.message;
    storageUserAccInfo.token = content.token;
    storageUserAccInfo.refreshToken = content.refreshToken;
    storageUserAccInfo.userId = content.userId;
    storageUserAccInfo.name = content.name;
};

export const getUserInfo = async (userId: string) => {
    const rawResponse = await fetch(`${baseUrl}users/${userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
        },
    });
    const content = await rawResponse.json();
    storageUserAccInfo.email = content.email;

    getAllUserWords();
    console.log('Все слова', storageUsersWords);
};
