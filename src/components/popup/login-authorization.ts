import { getUserInfo, loginUser } from '../../api/authorization/login';
import { storageUserAccInfo } from '../utils/storage';
import { loginFunction } from './login';

export const addLoginRequest = () => {
    const loginSave = document.querySelector('.login-save') as HTMLButtonElement;
    loginSave.addEventListener('click', async function () {
        await loginUser(loginFunction());
        await getUserInfo(storageUserAccInfo.userId);
        console.log(storageUserAccInfo);
        changeUiForAuthUser();
    });
};

const changeUiForAuthUser = () => {
    const header_content_login = document.querySelector('.header_content_login') as HTMLButtonElement;
    const header_content_user_box = document.querySelector('.header_content_user_box') as HTMLButtonElement;
    const header_content_user_name = document.querySelector('.header_content_user_name') as HTMLDivElement;
    const header_content_user_email = document.querySelector('.header_content_user_email') as HTMLDivElement;

    if (storageUserAccInfo.message === 'Authenticated') {
        header_content_login.style.display = 'none';
        header_content_user_box.style.display = 'flex';
        header_content_user_name.textContent = storageUserAccInfo.name;
        header_content_user_email.textContent = storageUserAccInfo.email;
    }
};

export const changeUiForNonAuthUser = () => {
    const header_content_login = document.querySelector('.header_content_login') as HTMLButtonElement;
    const header_content_user_box = document.querySelector('.header_content_user_box') as HTMLButtonElement;

    header_content_login.style.display = 'flex';
    header_content_user_box.style.display = 'none';
};
