export const header_content_page_name = document.createElement('h1');

export const createHeader = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const header = document.createElement('header');
    header.classList.add('header');
    body.append(header);

    const header_components = document.createElement('div');
    header_components.classList.add('header_components');
    header.appendChild(header_components);

    //Burger button
    const burger_menu = document.createElement('div');
    burger_menu.classList.add('burger_menu');
    header_components.append(burger_menu);

    //Header pageName & userName
    const header_content = document.createElement('div');
    header_content.classList.add('header_content');
    header_components.appendChild(header_content);

    //pageName
    const header_content_page = document.createElement('div');
    header_content_page.classList.add('header_content_page');
    header_content.appendChild(header_content_page);

    header_content_page_name.classList.add('header_content_page_name');
    header_content_page.appendChild(header_content_page_name);
    header_content_page_name.textContent = 'Main';

    //userName
    const header_content_user_box = document.createElement('div');
    header_content_user_box.classList.add('header_content_user_box');
    header_content.appendChild(header_content_user_box);

    const header_content_user = document.createElement('div');
    header_content_user.classList.add('header_content_user');
    header_content_user_box.appendChild(header_content_user);

    const header_content_user_name = document.createElement('p');
    header_content_user_name.classList.add('header_content_user_name');
    header_content_user.appendChild(header_content_user_name); //`${login_name}`

    const header_content_user_email = document.createElement('p');
    header_content_user_email.classList.add('header_content_user_email');
    header_content_user.appendChild(header_content_user_email); //`${login_email}`

    const header_content_user_img_box = document.createElement('div');
    header_content_user_img_box.classList.add('header_content_user_img_box');
    header_content_user_box.appendChild(header_content_user_img_box);

    const header_content_user_img = document.createElement('img');
    header_content_user_img.classList.add('header_content_user_img');
    header_content_user_img_box.appendChild(header_content_user_img);
    header_content_user_img.src = 'components/header/header-assets/user.png';

    //Button LogIn
    const header_content_login = document.createElement('div');
    header_content_login.classList.add('header_content_login');
    header_content.appendChild(header_content_login);

    const header_content_login_button = document.createElement('button');
    header_content_login_button.classList.add('main_page_button', 'custom-btn', 'open_pop_login');
    header_content_login.appendChild(header_content_login_button);
    header_content_login_button.textContent = 'LOGIN';

    return header_content_page_name;
};
