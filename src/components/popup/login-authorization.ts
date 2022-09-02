import { loginUser } from '../../api/authorization/login';
import { loginFunction } from './login';

export const addLoginRequest = () => {
    const loginSave = document.querySelector('.login-save') as HTMLButtonElement;
    loginSave.addEventListener('click', function () {
        loginUser(loginFunction());
    });
};
