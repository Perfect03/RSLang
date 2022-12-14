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
    developer_img_box_one.src = 'components/main/main-assets/avatars/gleb.jpg';
    main_section_five_card_one.append(developer_img_box_one);

    const developer_img_box_two = document.createElement('img');
    developer_img_box_two.classList.add('developer_img_box');
    developer_img_box_two.src = 'components/main/main-assets/avatars/nikita.jpg';
    main_section_five_card_two.append(developer_img_box_two);

    const developer_img_box_three = document.createElement('img');
    developer_img_box_three.classList.add('developer_img_box');
    developer_img_box_three.src = 'components/main/main-assets/avatars/alisaa.jpg';
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

    const main_section_five_card_one_gh_a = document.createElement('a');
    main_section_five_card_one_gh_a.classList.add('main_section_five_card_one_gh_a');
    main_section_five_card_one_name.appendChild(main_section_five_card_one_gh_a);
    main_section_five_card_one_gh_a.href = 'https://github.com/Perfect03';

    const main_section_five_card_one_gh = document.createElement('img');
    main_section_five_card_one_gh.classList.add('developer_img_gh');
    main_section_five_card_one_gh.src = 'components/main/main-assets/github.png';
    main_section_five_card_one_gh_a.append(main_section_five_card_one_gh);

    const main_section_five_card_two_name = document.createElement('h1');
    main_section_five_card_two_name.classList.add('name_dev');
    main_section_five_card_two_name.textContent = 'Nikita Staselovich';
    main_section_five_card_two_info.append(main_section_five_card_two_name);

    const main_section_five_card_two_gh_a = document.createElement('a');
    main_section_five_card_two_gh_a.classList.add('main_section_five_card_two_gh_a');
    main_section_five_card_two_name.appendChild(main_section_five_card_two_gh_a);
    main_section_five_card_two_gh_a.href = 'https://github.com/Falderian';

    const main_section_five_card_two_gh = document.createElement('img');
    main_section_five_card_two_gh.classList.add('developer_img_gh');
    main_section_five_card_two_gh.src = 'components/main/main-assets/github.png';
    main_section_five_card_two_gh_a.append(main_section_five_card_two_gh);

    const main_section_five_card_three_name = document.createElement('h1');
    main_section_five_card_three_name.classList.add('name_dev');
    main_section_five_card_three_name.textContent = 'Alisa Fedorova';
    main_section_five_card_three_info.append(main_section_five_card_three_name);

    const main_section_five_card_three_gh_a = document.createElement('a');
    main_section_five_card_three_gh_a.classList.add('main_section_five_card_three_gh_a');
    main_section_five_card_three_name.appendChild(main_section_five_card_three_gh_a);
    main_section_five_card_three_gh_a.href = 'https://github.com/AlisaFed';

    const main_section_five_card_three_gh = document.createElement('img');
    main_section_five_card_three_gh.classList.add('developer_img_gh');
    main_section_five_card_three_gh.src = 'components/main/main-assets/github.png';
    main_section_five_card_three_gh_a.append(main_section_five_card_three_gh);

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
        'Team communication, organizing meetings and assignments. Took over development of Textbook. Created roating. And gave us the sprint game. Also did a lot of statistics gathering.';
    main_section_five_card_one_info.append(main_section_five_card_one_about);

    const main_section_five_card_two_about = document.createElement('p');
    main_section_five_card_two_about.classList.add('about_dev');
    main_section_five_card_two_about.textContent =
        'Took care of all the backend, including the authorization and registration backend. Developed the audio challenge game. Made the statistics page work.';
    main_section_five_card_two_info.append(main_section_five_card_two_about);

    const main_section_five_card_three_about = document.createElement('p');
    main_section_five_card_three_about.classList.add('about_dev');
    main_section_five_card_three_about.textContent =
        'Layout of homepage, statistics, and all the basic elements. Styling of the games. The design of the entire application. Took part in creating the authorization and registration.';
    main_section_five_card_three_info.append(main_section_five_card_three_about);
};
