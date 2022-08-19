export const createFifthSection = () => {
    const main = document.querySelector('main') as HTMLElement;
    const main_section_five = document.createElement('section');
    main_section_five.classList.add('main_section_five');
    main.append(main_section_five);

    const main_section_five_h1 = document.createElement('h1');
    main_section_five_h1.classList.add('main_section_h1');
    main_section_five.append(main_section_five_h1);
    main_section_five_h1.textContent = 'Our team';

    const main_section_five_cards_box = document.createElement('div');
    main_section_five_cards_box.classList.add('main_section_five_cards_box');
    main_section_five.append(main_section_five_cards_box);

    const main_section_five_card_one = document.createElement('div');
    main_section_five_card_one.classList.add('main_section_five_card');
    main_section_five_cards_box.append(main_section_five_card_one);

    const main_section_five_card_two = document.createElement('div');
    main_section_five_card_two.classList.add('main_section_five_card');
    main_section_five_cards_box.append(main_section_five_card_two);

    const main_section_five_card_three = document.createElement('div');
    main_section_five_card_three.classList.add('main_section_five_card');
    main_section_five_cards_box.append(main_section_five_card_three);

    const developer_img_box_one = document.createElement('img');
    developer_img_box_one.classList.add('developer_img_box');
    developer_img_box_one.src = 'components/index/main-assets/gleb.jpg';
    main_section_five_card_one.append(developer_img_box_one);

    const developer_img_box_two = document.createElement('img');
    developer_img_box_two.classList.add('developer_img_box');
    developer_img_box_two.src = 'components/index/main-assets/nikita.jpg';
    main_section_five_card_two.append(developer_img_box_two);

    const developer_img_box_three = document.createElement('img');
    developer_img_box_three.classList.add('developer_img_box');
    developer_img_box_three.src = 'components/index/main-assets/alisaa.jpg';
    main_section_five_card_three.append(developer_img_box_three);

    const main_section_five_card_one_info = document.createElement('div');
    main_section_five_card_one_info.classList.add('main_section_five_card_info');
    main_section_five_card_one.append(main_section_five_card_one_info);

    const main_section_five_card_two_info = document.createElement('div');
    main_section_five_card_two_info.classList.add('main_section_five_card_info');
    main_section_five_card_two.append(main_section_five_card_two_info);

    const main_section_five_card_three_info = document.createElement('div');
    main_section_five_card_three_info.classList.add('main_section_five_card_info');
    main_section_five_card_three.append(main_section_five_card_three_info);

    const main_section_five_card_one_name = document.createElement('h1');
    main_section_five_card_one_name.classList.add('name_dev');
    main_section_five_card_one_name.textContent = 'Gleb Zlobin';
    main_section_five_card_one_info.append(main_section_five_card_one_name);

    const main_section_five_card_two_name = document.createElement('h1');
    main_section_five_card_two_name.classList.add('name_dev');
    main_section_five_card_two_name.textContent = 'Falderian';
    main_section_five_card_two_info.append(main_section_five_card_two_name);

    const main_section_five_card_three_name = document.createElement('h1');
    main_section_five_card_three_name.classList.add('name_dev');
    main_section_five_card_three_name.textContent = 'AlisaFed';
    main_section_five_card_three_info.append(main_section_five_card_three_name);

    const main_section_five_card_one_job = document.createElement('h2');
    main_section_five_card_one_job.classList.add('job_dev');
    main_section_five_card_one_job.textContent = 'Team leader, Frontend developer';
    main_section_five_card_one_info.append(main_section_five_card_one_job);

    const main_section_five_card_two_job = document.createElement('h2');
    main_section_five_card_two_job.classList.add('job_dev');
    main_section_five_card_two_job.textContent = 'Full Stack developer';
    main_section_five_card_two_info.append(main_section_five_card_two_job);

    const main_section_five_card_three_job = document.createElement('h2');
    main_section_five_card_three_job.classList.add('job_dev');
    main_section_five_card_three_job.textContent = 'Frontend developer, Designer';
    main_section_five_card_three_info.append(main_section_five_card_three_job);

    const main_section_five_card_one_about = document.createElement('p');
    main_section_five_card_one_about.classList.add('about_dev');
    main_section_five_card_one_about.textContent =
        'Front-end developer, participated in the development of the registration form, the Sprint game and the group selector component';
    main_section_five_card_one_info.append(main_section_five_card_one_about);

    const main_section_five_card_two_about = document.createElement('p');
    main_section_five_card_two_about.classList.add('about_dev');
    main_section_five_card_two_about.textContent =
        'Front-end developer, participated in the development of the registration form, the Sprint game and the group selector component';
    main_section_five_card_two_info.append(main_section_five_card_two_about);

    const main_section_five_card_three_about = document.createElement('p');
    main_section_five_card_three_about.classList.add('about_dev');
    main_section_five_card_three_about.textContent =
        'Front-end developer, participated in the development of the registration form, the Sprint game and the group selector component';
    main_section_five_card_three_info.append(main_section_five_card_three_about);
};
