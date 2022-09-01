import { IPage } from '../../interfaces & types/page';
import { createMain } from '../main/render';
import { createTextbook } from '../textbook/textbook';
import { createStatistics } from '../statistics/statistics';
import { createDictionary } from '../dictionary/dictionary';
import { createLayoutSprint } from '../minigames/sprint/layout';

const routes = {
    home: {
        template: createMain,
        title: 'RSLang',
        description: 'This is the home page',
    },
    textbook: {
        template: createTextbook,
        title: 'Textbook',
        description: 'This is the textbook page',
    },
    statistics: {
        template: createStatistics,
        title: 'Statistics',
        description: 'This is the statistics page',
    },
    dictionary: {
        template: createDictionary,
        title: 'Dictionary',
        description: 'This is the dictionary page',
    },
    /*audioChallange: {
        template: createLayoutAudioChallange,
        title: 'Minigames',
        description: 'This is the minigames page',
    },*/
    sprint: {
        template: createLayoutSprint,
        title: 'Sprint',
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
    route.template(0);
    //(<HTMLElement>document.getElementById('content')).innerHTML = html;
    //const listeners = new Listen();
    //location === 'garage' ? listeners.ListenGarage() : listeners.ListenWinners();
    document.title = route.title;
};
