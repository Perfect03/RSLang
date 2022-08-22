export const createFirstSection = () => {
    const body = document.querySelector('body') as HTMLBodyElement;

    const main = document.createElement('main');
    main.classList.add('main');
    body.append(main);

    const main_section_one = document.createElement('section');
    main_section_one.classList.add('main_section_one');
    main.append(main_section_one);

    const main_section_one_content = document.createElement('div');
    main_section_one_content.classList.add('main_section_one_content');
    main_section_one.append(main_section_one_content);

    const main_section_one_content_h1 = document.createElement('h1');
    main_section_one_content_h1.classList.add('main_section_one_content_h1');
    main_section_one_content.append(main_section_one_content_h1);
    main_section_one_content_h1.textContent = 'RS Lang';

    const main_section_one_content_p = document.createElement('p');
    main_section_one_content_p.classList.add('main_section_one_content_p');
    main_section_one_content.append(main_section_one_content_p);
    main_section_one_content_p.textContent =
        'Memorizing English words can be fun and challenging. Play games, listen to pronunciation, improve your knowledge. With our app, learning is a joy.';

    const main_section_one_content_button = document.createElement('button');
    main_section_one_content_button.classList.add('main_section_one_content_button', 'main_page_button', 'custom-btn');
    main_section_one_content.appendChild(main_section_one_content_button);
    main_section_one_content_button.textContent = "LET'S GO";

    const main_section_one_img = document.createElement('img');
    main_section_one_img.classList.add('main_section_one_img');
    main_section_one.append(main_section_one_img);
    main_section_one_img.src = 'components/index/main-assets/girl.jpg';
};
