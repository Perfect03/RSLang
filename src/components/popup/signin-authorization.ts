import { createUser } from '../../api/authorization/signin';
import { signFunction } from './signup';

export let userTest = {};

export const addSignUpListener = () => {
    const signSave = document.querySelector('.sign-save') as HTMLButtonElement;
    signSave.addEventListener('click', function () {
        userTest = signFunction();
        createUser(signFunction());
    });
};
