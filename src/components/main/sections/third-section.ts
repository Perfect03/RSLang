export const createThirdSection = () => {
    const main = document.querySelector('main') as HTMLElement;
    const main_section_three = document.createElement('section');
    main_section_three.classList.add('main_section_three');
    main.append(main_section_three);

    const main_section_three_h1 = document.createElement('h1');
    main_section_three_h1.classList.add('main_section_h1');
    main_section_three_h1.textContent = 'All posibilities';
    main_section_three.append(main_section_three_h1);

    const main_section_three_box = document.createElement('div');
    main_section_three_box.classList.add('main_section_three_box');
    main_section_three.append(main_section_three_box);

    const main_section_three_p = document.createElement('p');
    main_section_three_p.classList.add('main_section_three_p');
    main_section_three_box.append(main_section_three_p);
    main_section_three_p.textContent =
        'You are on the home page of our application.  At the left edge is a menu with navigation through the app. So that you don`t get lost, it will be at your fingertips on every page. Above this text you will find information about the features of our application, but not all of them are available at once, you have to get acquainted first, use the buttons below for that. At the bottom of the page there is information about the creators with links to their Github and the school where they studied. We`ve created two games to help you learn new words and pronunciation. Our Textbook is divided into six difficulty sections, and the seventh section contains particularly difficult words that you choose yourself or that will cause difficulty in the minigames. If you guess a word more than once in a game, it`s marked as learned, and you can also choose them at your own discretion. To track your progress day by day, go to the stats page, you`re all set for that there. You may be wondering why we wrote text and not video. It`s to improve your reading skills!';
};
