import { alternativeCreateUser } from '../../api/authorization/signin';
import { UserInfo } from '../../interfaces & types/authorization';

export const addSignUpListener = () => {
    const signSave = document.querySelector('.sign-save') as HTMLElement;
    signSave.addEventListener('click', () => {
        const sign_name = (document.querySelector('.sign_name') as HTMLInputElement).value.toLowerCase();
        const sign_email = (document.querySelector('.sign_email') as HTMLInputElement).value.toLowerCase();
        const sign_pass = (document.querySelector('.sign_pass') as HTMLInputElement).value.toLowerCase();
        const popup_hello = document.querySelector('.popup_hello') as HTMLElement;

        if (sign_name !== '' && sign_email !== '' && sign_pass !== '') {
            (document.querySelector('.popup_registration') as HTMLElement).style.display = 'none';
            popup_hello.style.visibility = 'visible';
            setTimeout(function () {
                (document.querySelector('.popup_hello') as HTMLElement).style.visibility = 'hidden';
            }, 1000);
            const UsersInfo: UserInfo = { name: sign_name, email: sign_email, password: sign_pass };
            try {
                // createUser(UsersInfo);
                alternativeCreateUser(UsersInfo);
            } catch (error) {
                console.log('error');
            }
        } else {
            (document.querySelector('.sign_name') as HTMLInputElement).placeholder = 'Please enter name';
            (document.querySelector('.sign_email') as HTMLInputElement).placeholder = 'Please enter email';
            (document.querySelector('.sign_pass') as HTMLInputElement).placeholder = 'Please enter password';
        }
    });
};
