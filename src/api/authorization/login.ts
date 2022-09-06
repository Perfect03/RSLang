import { storageUserAccInfo, storageUsersWords } from '../../components/utils/storage';
import { UserResponse } from '../../interfaces & types/authorization';
import { baseUrl } from '../api';
import { createEmptyStats, getUserStatistics } from '../statistics/userStatistics';
import { getAllUserWords } from '../usersWords/usersWords';
import { setCookie } from './cookie';

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

    setCookie('token', content.token, 1);
    setCookie('userId', content.userId, 365);

    try {
        await getUserStatistics();
        getAllUserWords();
        console.log(storageUsersWords);
    } catch {
        await createEmptyStats();
    }
};

export const getUserInfo = async (userId: string, token?: string) => {
    if (!token) token = storageUserAccInfo.token;
    const rawResponse = await fetch(`${baseUrl}users/${userId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    });
    const content = await rawResponse.json();
    storageUserAccInfo.email = content.email;
};
