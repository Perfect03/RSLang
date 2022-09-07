import { addSignUpListener } from './signin-authorization';

export const createSignIn = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const popup_registration = document.createElement('div');
    popup_registration.classList.add('popup', 'popup_registration');
    body.appendChild(popup_registration);

    const popup_registration_wind = document.createElement('div');
    popup_registration_wind.classList.add('popup_wind');
    popup_registration.appendChild(popup_registration_wind);

    const popup_registration_wind_h1 = document.createElement('h1');
    popup_registration_wind_h1.classList.add('main_section_h1');
    popup_registration_wind.appendChild(popup_registration_wind_h1);
    popup_registration_wind_h1.textContent = 'SIGN UP';

    const popup_registration_wind_form = document.createElement('form');
    popup_registration_wind_form.classList.add('popup_form');
    popup_registration_wind.appendChild(popup_registration_wind_form);

    const popup_registration_wind_form_name = document.createElement('input');
    popup_registration_wind_form_name.classList.add('popup_input', 'sign_name');
    popup_registration_wind_form.appendChild(popup_registration_wind_form_name);
    popup_registration_wind_form_name.type = 'name';
    popup_registration_wind_form_name.placeholder = 'Name';

    const popup_registration_wind_form_email = document.createElement('input');
    popup_registration_wind_form_email.classList.add('popup_input', 'sign_email');
    popup_registration_wind_form.appendChild(popup_registration_wind_form_email);
    popup_registration_wind_form_email.type = 'email';
    popup_registration_wind_form_email.placeholder = 'E-mail';

    const popup_registration_wind_form_pass = document.createElement('input');
    popup_registration_wind_form_pass.classList.add('popup_input', 'sign_pass');
    popup_registration_wind_form.appendChild(popup_registration_wind_form_pass);
    popup_registration_wind_form_pass.type = 'password';
    popup_registration_wind_form_pass.placeholder = 'Password';

    const popup_registration_wind_form_btn = document.createElement('a');
    popup_registration_wind_form_btn.classList.add('main_page_button', 'custom-btn', 'login-btn', 'sign-save');
    popup_registration_wind_form.appendChild(popup_registration_wind_form_btn);
    popup_registration_wind_form_btn.href = '#';
    popup_registration_wind_form_btn.textContent = 'SIGN UP';

    const popup_hello = document.createElement('div');
    popup_hello.classList.add('popup_hello', 'popup');
    body.appendChild(popup_hello);

    const popup_hello_wind = document.createElement('div');
    popup_hello_wind.classList.add('popup_hello_wind', 'popup_wind');
    popup_hello.appendChild(popup_hello_wind);

    const popup_hello_wind_h1 = document.createElement('h1');
    popup_hello_wind_h1.classList.add('main_section_h1', 'popuph1');
    popup_hello_wind.appendChild(popup_hello_wind_h1);

    const popupS = document.querySelector('.popup_registration');

    document.querySelectorAll('.open_pop_sign').forEach((item) => {
        item.addEventListener('click', () => {
            (document.querySelector('.popup_login') as HTMLElement).style.display = 'none';
            (document.querySelector('.popup_registration') as HTMLElement).style.display = 'flex';

            popupS?.addEventListener('click', (e) => {
                if (e.target === popupS) {
                    (document.querySelector('.popup_registration') as HTMLElement).style.display = 'none';
                }
            });
        });
    });
    addSignUpListener();
};
