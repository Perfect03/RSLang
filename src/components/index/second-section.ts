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
    main_section_two_textbook_img.src = 'components/index/main-assets/textbook.jpg';
    main_section_two_textbook.append(main_section_two_textbook_img);

    const main_section_two_textbook_h1 = document.createElement('h1');
    main_section_two_textbook_h1.classList.add('main_section_two_headers');
    main_section_two_textbook.append(main_section_two_textbook_h1);
    main_section_two_textbook_h1.textContent = 'Textbook';

    const main_section_two_textbook_p = document.createElement('p');
    main_section_two_textbook_p.classList.add('main_section_two_p');
    main_section_two_textbook.append(main_section_two_textbook_p);
    main_section_two_textbook_p.textContent =
        'The electronic textbook consists of six sections. Each section has 30 pages of 20 words. The translation of the word, the thematic image, as well as the pronunciation of both the word separately and as part of the phrase are presented.';

    main_section_two_box.append(main_section_two_textbook);

    //Dictionary
    const main_section_two_dictionary = document.createElement('div');
    main_section_two_dictionary.classList.add('main_section_two_dictionary', 'advantages_cards');
    main_section_two_box.append(main_section_two_dictionary);

    const main_section_two_dictionary_img = document.createElement('img');
    main_section_two_dictionary_img.classList.add('main_section_two_images');
    main_section_two_dictionary_img.src = 'components/index/main-assets/dictionary.jpg';
    main_section_two_dictionary.append(main_section_two_dictionary_img);

    const main_section_two_dictionary_h1 = document.createElement('h1');
    main_section_two_dictionary_h1.classList.add('main_section_two_headers');
    main_section_two_dictionary.append(main_section_two_dictionary_h1);
    main_section_two_dictionary_h1.textContent = 'Dictionary';

    const main_section_two_dictionary_p = document.createElement('p');
    main_section_two_dictionary_p.classList.add('main_section_two_p');
    main_section_two_dictionary.append(main_section_two_dictionary_p);
    main_section_two_dictionary_p.textContent =
        'The dictionary contains lists of studied words, words that do not need to be learned, as well as those that cause difficulties. The dictionary reflects statistics for each section and student progress.';

    //Games
    const main_section_two_games = document.createElement('div');
    main_section_two_games.classList.add('main_section_two_games', 'advantages_cards');
    main_section_two_box.append(main_section_two_games);

    const main_section_two_games_img = document.createElement('img');
    main_section_two_games_img.classList.add('main_section_two_images');
    main_section_two_games_img.src = 'components/index/main-assets/games.jpg';
    main_section_two_games.append(main_section_two_games_img);

    const main_section_two_games_h1 = document.createElement('h1');
    main_section_two_games_h1.classList.add('main_section_two_headers');
    main_section_two_games.append(main_section_two_games_h1);
    main_section_two_games_h1.textContent = 'Games';

    const main_section_two_games_p = document.createElement('p');
    main_section_two_games_p.classList.add('main_section_two_p');
    main_section_two_games.append(main_section_two_games_p);
    main_section_two_games_p.textContent =
        'For learning words and reinforcing memorization, the application has 4 games: Savannah, Sprint, Audio Chalenge and Imaginarium, which will help you to "pump" your vocabulary in a playful way';

    //Statistic
    const main_section_two_statistics = document.createElement('div');
    main_section_two_statistics.classList.add('main_section_two_statistics', 'advantages_cards');
    main_section_two_box.append(main_section_two_statistics);

    const main_section_two_statistics_img = document.createElement('img');
    main_section_two_statistics_img.classList.add('main_section_two_images');
    main_section_two_statistics_img.src = 'components/index/main-assets/statistic.jpg';
    main_section_two_statistics.append(main_section_two_statistics_img);

    const main_section_two_statistics_h1 = document.createElement('h1');
    main_section_two_statistics_h1.classList.add('main_section_two_headers');
    main_section_two_statistics.append(main_section_two_statistics_h1);
    main_section_two_statistics_h1.textContent = 'Statistics';

    const main_section_two_statistics_p = document.createElement('p');
    main_section_two_statistics_p.classList.add('main_section_two_p');
    main_section_two_statistics.append(main_section_two_statistics_p);
    main_section_two_statistics_p.textContent =
        'All the progress of training can be viewed in statistics, where data for the current day, as well as for the entire training period, are presented. The information is presented both in the form of a table and graphs, which is very convenient.';
};
