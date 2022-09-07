export const main_section_four_button_login = document.createElement('button');
export const main_section_four_button_signup = document.createElement('button');

export const createFourthSection = () => {
    const main = document.querySelector('main') as HTMLElement;
    const main_section_four = document.createElement('section');
    main_section_four.classList.add('main_section_four');
    main.append(main_section_four);

    const main_section_four_content = document.createElement('div');
    main_section_four_content.classList.add('main_section_four_content');
    main_section_four.append(main_section_four_content);
    //h1
    const main_section_four_content_h1 = document.createElement('h1');
    main_section_four_content_h1.classList.add('main_section_h1');
    main_section_four_content.append(main_section_four_content_h1);
    main_section_four_content_h1.textContent = "Don't forget";
    //p
    const main_section_four_content_p = document.createElement('p');
    main_section_four_content_p.classList.add('main_section_four_content_p');
    main_section_four_content_p.textContent =
        'Some of the magic features of our app are not available to users with whom we are not familiar. If you want to access them, please log in or register first.';
    main_section_four_content.append(main_section_four_content_p);
    //div
    const main_section_four_button_box = document.createElement('div');
    main_section_four_button_box.classList.add('main_section_four_button_box');
    main_section_four_content.append(main_section_four_button_box);

    //buttons
    main_section_four_button_login.classList.add(
        'main_page_button',
        'custom-btn',
        'section_four_button_login',
        'open_pop_login'
    );
    main_section_four_button_box.append(main_section_four_button_login);
    main_section_four_button_login.textContent = 'LOGIN';

    main_section_four_button_signup.classList.add(
        'main_page_button',
        'custom-btn',
        'section_four_button_signup',
        'open_pop_sign'
    );
    main_section_four_button_box.append(main_section_four_button_signup);
    main_section_four_button_signup.textContent = 'SIGN UP';

    //div
    const main_section_four_img_box = document.createElement('div');
    main_section_four_img_box.classList.add('main_section_four_img_box');
    main_section_four.append(main_section_four_img_box);

    //img
    const main_section_four_img = document.createElement('img');
    main_section_four_img.classList.add('main_section_four_img');
    main_section_four_img_box.append(main_section_four_img);
    main_section_four_img.src = 'components/main/main-assets/sec4.png';
};
