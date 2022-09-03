import { getUserInfo, loginUser } from '../../api/authorization/login';
import { storageUserAccInfo } from '../utils/storage';
import { loginFunction } from './login';

export const addLoginRequest = () => {
    const open_pop_login = document.querySelector('.open_pop_login') as HTMLButtonElement;
    const loginSave = document.querySelector('.login-save') as HTMLButtonElement;
    loginSave.addEventListener('click', async function () {
        await loginUser(loginFunction());
        getUserInfo(storageUserAccInfo.userId);
        console.log(storageUserAccInfo);
        if (storageUserAccInfo.message === 'Authenticated') {
            open_pop_login.style.display = 'none';
        }
    });
};
