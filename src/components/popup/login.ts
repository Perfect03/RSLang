import { UserResponse } from '../../interfaces & types/authorization';
import { addLoginRequest } from './login-authorization';

export const createLogin = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const popup_login = document.createElement('div');
    popup_login.classList.add('popup', 'popup_login');
    body.appendChild(popup_login);

    const popup_login_wind = document.createElement('div');
    popup_login_wind.classList.add('popup_wind');
    popup_login.appendChild(popup_login_wind);

    const popup_login_wind_h1 = document.createElement('h1');
    popup_login_wind_h1.classList.add('main_section_h1');
    popup_login_wind.appendChild(popup_login_wind_h1);
    popup_login_wind_h1.textContent = 'LOG IN';

    const popup_login_wind_form = document.createElement('form');
    popup_login_wind_form.classList.add('popup_form');
    popup_login_wind.appendChild(popup_login_wind_form);

    const popup_login_wind_form_email = document.createElement('input');
    popup_login_wind_form_email.classList.add('popup_input', 'login_email');
    popup_login_wind_form.appendChild(popup_login_wind_form_email);
    popup_login_wind_form_email.type = 'email';
    popup_login_wind_form_email.placeholder = 'E-mail';

    const popup_login_wind_form_pass = document.createElement('input');
    popup_login_wind_form_pass.classList.add('popup_input', 'login_pass');
    popup_login_wind_form.appendChild(popup_login_wind_form_pass);
    popup_login_wind_form_pass.type = 'password';
    popup_login_wind_form_pass.placeholder = 'Password';

    const popup_login_wind_form_btn = document.createElement('a');
    popup_login_wind_form_btn.classList.add('main_page_button', 'custom-btn', 'login-btn', 'login-save');
    popup_login_wind_form.appendChild(popup_login_wind_form_btn);
    popup_login_wind_form_btn.href = '#';
    popup_login_wind_form_btn.textContent = 'LOG IN';

    const popup_login_option = document.createElement('div');
    popup_login_option.classList.add('popup_login_option');
    popup_login_wind.appendChild(popup_login_option);

    const popup_login_option_p = document.createElement('p');
    popup_login_option_p.classList.add('popup_login_option_p', 'open_pop_sign');
    popup_login_option.appendChild(popup_login_option_p);
    popup_login_option_p.textContent = 'New User';

    const popupL = document.querySelector('.popup_login');
    document.querySelectorAll('.open_pop_login').forEach((item) => {
        item.addEventListener('click', () => {
            (document.querySelector('.popup_login') as HTMLElement).style.display = 'flex';

            popupL?.addEventListener('click', (e) => {
                if (e.target === popupL) {
                    (document.querySelector('.popup_login') as HTMLElement).style.display = 'none';
                }
            });
        });
    });
    addLoginRequest();
};

export function loginFunction() {
    console.log('loginFunction');
    const login_email = (document.querySelector('.login_email') as HTMLInputElement).value.toLowerCase();
    const login_pass = (document.querySelector('.login_pass') as HTMLInputElement).value.toLowerCase();
    const popup_hello = document.querySelector('.popup_hello') as HTMLElement;
    if (login_email !== '' && login_pass !== '') {
        (document.querySelector('.popup_login') as HTMLElement).style.display = 'none';
        popup_hello.style.display = 'flex';
        setTimeout(function () {
            (document.querySelector('.popup_hello') as HTMLElement).style.display = 'none';
        }, 1500);
    } else {
        (document.querySelector('.login_email') as HTMLInputElement).placeholder = 'Please enter email';
        (document.querySelector('.login_pass') as HTMLInputElement).placeholder = 'Please enter password';
    }
    const UsersResponse: UserResponse = { email: login_email, password: login_pass };
    return UsersResponse;
}
