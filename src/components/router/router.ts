import { IPage } from '../../interfaces & types/page';
import { createMain } from '../main/render';
import { createTextbook } from '../textbook/textbook';
import { createStatistics } from '../statistics/statistics';
import { createDictionary } from '../dictionary/dictionary';
import { createMinigames } from '../minigames/minigames';

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
    dictionary: {
        template: createDictionary,
        title: 'Dictionary',
        name: 'Dictionary',
        description: 'This is the dictionary page',
    },
    minigames: {
        template: createMinigames,
        title: 'Minigames',
        name: 'Minigames',
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
    route.template();
    //(<HTMLElement>document.getElementById('content')).innerHTML = html;
    //const listeners = new Listen();
    //location === 'garage' ? listeners.ListenGarage() : listeners.ListenWinners();
    document.title = route.title;
};
