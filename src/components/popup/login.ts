import './login.css';

export const createLogin = () => { 
const body = document.querySelector('body') as HTMLBodyElement;
const popup_login = document.createElement('div')
popup_login.classList.add('popup', 'popup_login')
body.appendChild(popup_login)

const popup_login_wind = document.createElement('div')
popup_login_wind.classList.add('popup_wind')
popup_login.appendChild(popup_login_wind)

const popup_login_wind_h1 = document.createElement('h1')
popup_login_wind_h1.classList.add('main_section_h1')
popup_login_wind.appendChild(popup_login_wind_h1)
popup_login_wind_h1.textContent = 'LOG IN'

const popup_login_wind_form = document.createElement('form')
popup_login_wind_form.classList.add('popup_form')
popup_login_wind.appendChild(popup_login_wind_form)

const popup_login_wind_form_email = document.createElement('input')
popup_login_wind_form_email.classList.add('popup_input', 'login_email')
popup_login_wind_form.appendChild(popup_login_wind_form_email)
popup_login_wind_form_email.type = 'email'
popup_login_wind_form_email.placeholder = 'E-mail'
popup_login_wind_form_email.onchange = loginFunction;

const popup_login_wind_form_pass = document.createElement('input')
popup_login_wind_form_pass.classList.add('popup_input', 'login_pass')
popup_login_wind_form.appendChild(popup_login_wind_form_pass)
popup_login_wind_form_pass.type = 'password'
popup_login_wind_form_pass.placeholder = 'Password'
popup_login_wind_form_pass.onchange = loginFunction;

const popup_login_wind_form_btn = document.createElement('a')
popup_login_wind_form_btn.classList.add('main_page_button', 'custom-btn', 'login-btn', 'login-save')
popup_login_wind_form.appendChild(popup_login_wind_form_btn)
popup_login_wind_form_btn.href = '#'
popup_login_wind_form_btn.textContent = 'LOG IN'

const popup_login_option = document.createElement('div')
popup_login_option.classList.add('popup_login_option')
popup_login_wind.appendChild(popup_login_option)

const popup_login_option_p = document.createElement('p')
popup_login_option_p.classList.add('popup_login_option_p', 'open_pop_sign')
popup_login_option.appendChild(popup_login_option_p)
popup_login_option_p.textContent = 'New User'


const buttonLogin = document.querySelector('.open_pop_login');
const popupL = document.querySelector('.popup_login');

buttonLogin?.addEventListener("click", () => {
    (document.querySelector('.popup_login') as HTMLElement).style.display = 'flex';

    popupL?.addEventListener('click', e => {
        if (e.target === popupL) {
            (document.querySelector('.popup_login') as HTMLElement).style.display = 'none';
        }
    });
});

const loginSave = document.querySelector('.login-save')
loginSave?.addEventListener("click", loginFunction)
}

function loginFunction() {
    let login_email = (document.querySelector('.login_email') as HTMLInputElement).value;
    let login_pass = (document.querySelector('.login_pass') as HTMLInputElement).value;

    (document.querySelector('.popup_login') as HTMLElement).style.display = 'none';

    (document.querySelector('.login_email') as HTMLInputElement).value = '';
    (document.querySelector('.login_pass') as HTMLInputElement).value = '';

    console.log(login_email, login_pass);
}