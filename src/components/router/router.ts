import { IPage } from '../../interfaces & types/page';
import { createMain } from '../main/render';
import { createTextbook } from '../textbook/textbook';
import { createStatistics } from '../statistics/layout';
import { chooseLevelPage } from '../minigames/choose-level';
import { header_content_page_name } from '../header/header';
import { addKeyBoardToGame, deleteKeyBoardToGame } from '../minigames/audiochallenge/choose-with-keyboard';

export const routes = {
    home: {
        template: createMain,
        title: 'RSLang',
        name: 'Main',
        description: 'This is the home page',
    },
    textbook: {
        template: createTextbook,
        title: 'Textbook',
        name: 'Textbook',
        description: 'This is the textbook page',
    },
    statistics: {
        template: createStatistics,
        title: 'Statistics',
        name: 'Statistics',
        description: 'This is the statistics page',
    },
    audioChallenge: {
        template: chooseLevelPage,
        title: 'Minigames',
        name: 'Audio challenge',
        description: 'This is the minigames page',
    },
    sprint: {
        template: chooseLevelPage,
        title: 'Sprint',
        name: 'Sprint',
        description: 'This is the minigames page',
    },
};

export const listenMenus = () => {
    window.addEventListener('hashchange', locationHandler);
};

export const locationHandler = async (): Promise<void> => {
    const location: IPage = <IPage>window.location.hash.replace('#', '');
    const route = routes[location];
    route.template(`${location}`);
    location === 'audioChallenge' ? addKeyBoardToGame() : deleteKeyBoardToGame();
    header_content_page_name.textContent = route.name;
    document.title = route.title;
    const footer = document.querySelector('.footer') as HTMLElement;
    if (
        header_content_page_name.textContent === 'Audio challenge' ||
        header_content_page_name.textContent === 'Sprint'
    ) {
        footer.style.opacity = '0';
    } else {
        footer.style.opacity = '1';
    }
};
