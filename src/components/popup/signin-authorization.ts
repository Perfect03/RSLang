import { createUser } from '../../api/authorization/signin';
import { signFunction } from './signup';

export const addSignUpListener = () => {
    const signSave = document.querySelector('.sign-save') as HTMLButtonElement;
    signSave.addEventListener('click', function () {
        createUser(signFunction());
    });
};
