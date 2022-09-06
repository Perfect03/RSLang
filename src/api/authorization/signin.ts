import axios from 'axios';
import { UserInfo } from '../../interfaces & types/authorization';
import { baseUrl } from '../api';

export const createUser = async (user: UserInfo) => {
    await fetch(`${baseUrl}users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
};

export const alternativeCreateUser = (user: UserInfo) => {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    const body = JSON.stringify(user);

    axios
        .post(`${baseUrl}users`, body, { headers })
        .then(() => {
            console.log('Пользователь создан!');
        })
        .catch((error) => console.log(error.response.data));
};
