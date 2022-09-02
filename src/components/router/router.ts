import { IPage } from '../../interfaces & types/page';
import { createMain } from '../main/render';
import { createTextbook } from '../textbook/textbook';
import { createStatistics } from '../statistics/statistics';
import { chooseLevelPage } from '../minigames/choose-level';
import { header_content_page_name } from '../header/header';

const routes = {
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
    /*if (location.length == 0) {
        location = '/';
    }*/
    //state.view = location;
    //location === 'winners' ? await updateStateWinners() : await updateStateGarage();
    const route = routes[location];
    route.template(`${location}`);
    header_content_page_name.textContent = route.name;
    //(<HTMLElement>document.getElementById('content')).innerHTML = html;
    //const listeners = new Listen();
    //location === 'garage' ? listeners.ListenGarage() : listeners.ListenWinners();
    document.title = route.title;
};
