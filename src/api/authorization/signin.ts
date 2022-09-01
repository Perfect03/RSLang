//import { signFunction } from '../../components/popup/signup';
import { UserInfo } from '../../interfaces & types/authorization';
import { baseUrl } from '../api';

export const createUser = async (user: UserInfo) => {
    const rawResponse = await fetch(`${baseUrl}users`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const content = await rawResponse.json();

    console.log(content);
};
