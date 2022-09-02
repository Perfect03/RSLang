import { UserResponse } from '../../interfaces & types/authorization';
import { baseUrl } from '../api';

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

    console.log(content);
};
