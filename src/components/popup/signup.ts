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
    popup_registration_wind_form_name.onchange = signFunction;

    const popup_registration_wind_form_email = document.createElement('input');
    popup_registration_wind_form_email.classList.add('popup_input', 'sign_email');
    popup_registration_wind_form.appendChild(popup_registration_wind_form_email);
    popup_registration_wind_form_email.type = 'email';
    popup_registration_wind_form_email.placeholder = 'E-mail';
    popup_registration_wind_form_email.onchange = signFunction;

    const popup_registration_wind_form_pass = document.createElement('input');
    popup_registration_wind_form_pass.classList.add('popup_input', 'sign_pass');
    popup_registration_wind_form.appendChild(popup_registration_wind_form_pass);
    popup_registration_wind_form_pass.type = 'password';
    popup_registration_wind_form_pass.placeholder = 'Password';
    popup_registration_wind_form_pass.onchange = signFunction;

    const popup_registration_wind_form_btn = document.createElement('a');
    popup_registration_wind_form_btn.classList.add('main_page_button', 'custom-btn', 'login-btn', 'sign-save');
    popup_registration_wind_form.appendChild(popup_registration_wind_form_btn);
    popup_registration_wind_form_btn.href = '#';
    popup_registration_wind_form_btn.textContent = 'SIGN UP';

    const buttonSign = document.querySelector('.open_pop_sign');
    const popupS = document.querySelector('.popup_registration');

    buttonSign?.addEventListener('click', () => {
        (document.querySelector('.popup_login') as HTMLElement).style.display = 'none';
        (document.querySelector('.popup_registration') as HTMLElement).style.display = 'flex';

        popupS?.addEventListener('click', (e) => {
            if (e.target === popupS) {
                (document.querySelector('.popup_registration') as HTMLElement).style.display = 'none';
            }
        });
    });

    const signSave = document.querySelector('.sign-save');
    signSave?.addEventListener('click', signFunction);
};

function signFunction() {
    const sign_name = (document.querySelector('.sign_name') as HTMLInputElement).value;
    const sign_email = (document.querySelector('.sign_email') as HTMLInputElement).value;
    const sign_pass = (document.querySelector('.sign_pass') as HTMLInputElement).value;

    (document.querySelector('.popup_registration') as HTMLElement).style.display = 'none';

    (document.querySelector('.sign_name') as HTMLInputElement).value = '';
    (document.querySelector('.sign_email') as HTMLInputElement).value = '';
    (document.querySelector('.sign_pass') as HTMLInputElement).value = '';

    console.log(sign_name, sign_email, sign_pass);
}
