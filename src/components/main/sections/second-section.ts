export const createSecondSection = () => {
    const main = document.querySelector('main') as HTMLElement;
    const main_section_two = document.createElement('section');
    main_section_two.classList.add('main_section_two');
    main.append(main_section_two);

    const main_section_two_h1 = document.createElement('h1');
    main_section_two_h1.classList.add('main_section_h1');
    main_section_two.append(main_section_two_h1);
    main_section_two_h1.textContent = 'Advantages';

    const main_section_two_box = document.createElement('div');
    main_section_two_box.classList.add('main_section_two_box');
    main_section_two.append(main_section_two_box);

    //Textbook
    const main_section_two_textbook = document.createElement('div');
    main_section_two_textbook.classList.add('main_section_two_textbook', 'advantages_cards');

    const main_section_two_textbook_img = document.createElement('img');
    main_section_two_textbook_img.classList.add('main_section_two_images');
    main_section_two_textbook_img.src = 'components/main/main-assets/dictionary.jpg';
    main_section_two_textbook.append(main_section_two_textbook_img);

    const main_section_two_textbook_h1 = document.createElement('h1');
    main_section_two_textbook_h1.classList.add('main_section_two_headers');
    main_section_two_textbook.append(main_section_two_textbook_h1);
    main_section_two_textbook_h1.textContent = 'Textbook';

    const main_section_two_textbook_p = document.createElement('p');
    main_section_two_textbook_p.classList.add('main_section_two_p');
    main_section_two_textbook.append(main_section_two_textbook_p);
    main_section_two_textbook_p.textContent =
        'The electronic textbook consists of six sections, 30 pages each, containing 20 words. That`s 3,600 new words! You can hear the pronunciation, see the translation and examples of usage. Increase your vocabulary! And in section 7, you can save particularly difficult words.';

    main_section_two_box.append(main_section_two_textbook);

    //Games
    const main_section_two_games = document.createElement('div');
    main_section_two_games.classList.add('main_section_two_games', 'advantages_cards');
    main_section_two_box.append(main_section_two_games);

    const main_section_two_games_img = document.createElement('img');
    main_section_two_games_img.classList.add('main_section_two_images');
    main_section_two_games_img.src = 'components/main/main-assets/games.jpg';
    main_section_two_games.append(main_section_two_games_img);

    const main_section_two_games_h1 = document.createElement('h1');
    main_section_two_games_h1.classList.add('main_section_two_headers');
    main_section_two_games.append(main_section_two_games_h1);
    main_section_two_games_h1.textContent = 'Games';

    const main_section_two_games_p = document.createElement('p');
    main_section_two_games_p.classList.add('main_section_two_p');
    main_section_two_games.append(main_section_two_games_p);
    main_section_two_games_p.textContent =
        'If you`re bored just looking at word cards, we`ve put together some awesome word study and memorization games called Sprint and Audio Chalenge. Learning doesn`t have to be boring!';

    //Statistic
    const main_section_two_statistics = document.createElement('div');
    main_section_two_statistics.classList.add('main_section_two_statistics', 'advantages_cards');
    main_section_two_box.append(main_section_two_statistics);

    const main_section_two_statistics_img = document.createElement('img');
    main_section_two_statistics_img.classList.add('main_section_two_images');
    main_section_two_statistics_img.src = 'components/main/main-assets/statistic.jpg';
    main_section_two_statistics.append(main_section_two_statistics_img);

    const main_section_two_statistics_h1 = document.createElement('h1');
    main_section_two_statistics_h1.classList.add('main_section_two_headers');
    main_section_two_statistics.append(main_section_two_statistics_h1);
    main_section_two_statistics_h1.textContent = 'Statistics';

    const main_section_two_statistics_p = document.createElement('p');
    main_section_two_statistics_p.classList.add('main_section_two_p');
    main_section_two_statistics.append(main_section_two_statistics_p);
    main_section_two_statistics_p.textContent =
        'This section will give you an idea of the statistics available for the day as well as for the entire training period. It`s always easier to move forward when you can see the goal.';
};
