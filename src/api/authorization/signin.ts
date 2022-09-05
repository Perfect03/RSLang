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
