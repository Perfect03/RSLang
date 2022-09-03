import { getUserInfo, loginUser } from '../../api/authorization/login';
import { storageUserAccInfo } from '../utils/storage';
import { loginFunction } from './login';

export const addLoginRequest = () => {
    const loginSave = document.querySelector('.login-save') as HTMLButtonElement;
    loginSave.addEventListener('click', async function () {
        await loginUser(loginFunction());
        getUserInfo(storageUserAccInfo.userId);
        console.log(storageUserAccInfo);
    });
};
