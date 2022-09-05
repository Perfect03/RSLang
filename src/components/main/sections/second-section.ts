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
    main_section_two_textbook.classList.add('main_section_two_textbook', 'advantages_cards', 'active_slide');

    const main_section_two_textbook_h1 = document.createElement('h1');
    main_section_two_textbook_h1.classList.add('main_section_two_headers', 'slide_h1');
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

    const main_section_two_games_h1 = document.createElement('h1');
    main_section_two_games_h1.classList.add('main_section_two_headers', 'slide_h1');
    main_section_two_games.append(main_section_two_games_h1);
    main_section_two_games_h1.textContent = 'Games';
    main_section_two_games_h1.style.position = 'absolute';
    main_section_two_games_h1.style.bottom = '225px';
    main_section_two_games_h1.style.color = '#FFF';

    const main_section_two_games_p = document.createElement('p');
    main_section_two_games_p.classList.add('main_section_two_p', 'games_p');
    main_section_two_games.append(main_section_two_games_p);
    main_section_two_games_p.textContent =
        'If you`re bored just looking at word cards, we`ve put together some awesome word study and memorization games called Sprint and Audio Chalenge. Learning doesn`t have to be boring!';
    main_section_two_games_p.style.bottom = '70px';
    main_section_two_games_p.style.top = 'auto';
    main_section_two_games_p.style.color = '#FFF';

    //Statistic
    const main_section_two_statistics = document.createElement('div');
    main_section_two_statistics.classList.add('main_section_two_statistics', 'advantages_cards');
    main_section_two_box.append(main_section_two_statistics);

    const main_section_two_statistics_h1 = document.createElement('h1');
    main_section_two_statistics_h1.classList.add('main_section_two_headers', 'slide_h1');
    main_section_two_statistics.append(main_section_two_statistics_h1);
    main_section_two_statistics_h1.textContent = 'Statistics';

    const main_section_two_statistics_p = document.createElement('p');
    main_section_two_statistics_p.classList.add('main_section_two_p');
    main_section_two_statistics.append(main_section_two_statistics_p);
    main_section_two_statistics_p.textContent =
        'This section will give you an idea of the statistics available for the day as well as for the entire training period. It`s always easier to move forward when you can see the goal.';

    const slides = document.querySelectorAll('.advantages_cards');

    slides.forEach((slide) => {
        console.log('1');
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active_slide');
        });
    });

    const clearActiveClasses = () => {
        console.log('2');
        slides.forEach((slide) => {
            slide.classList.remove('active_slide');
        });
    };
};
