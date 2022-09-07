import { deleteCookie } from '../../api/authorization/cookie';
import { getUserStatistics } from '../../api/statistics/userStatistics';
import { changeUiForNonAuthUser } from '../popup/login-authorization';
import { createMain } from '../main/render';
import './burger.css';

export const createBurger = () => {
    const burger_menu = document.querySelector('.burger_menu') as HTMLBodyElement;
    const burger_menu_button = document.createElement('a');
    burger_menu_button.classList.add('burger_menu_button');
    burger_menu.append(burger_menu_button);
    burger_menu_button.href = '';

    const burger_menu_lines = document.createElement('span');
    burger_menu_lines.classList.add('burger_menu_lines');
    burger_menu_button.append(burger_menu_lines);

    const burger_menu_nav = document.createElement('nav');
    burger_menu_nav.classList.add('burger_menu_nav');
    burger_menu.append(burger_menu_nav);

    const burger_menu_link_main = document.createElement('a');
    burger_menu_link_main.classList.add('burger_menu_link');
    burger_menu_nav.append(burger_menu_link_main);
    burger_menu_link_main.textContent = 'Main';
    burger_menu_link_main.href = '#home';

    const burger_menu_img_main = document.createElement('img');
    burger_menu_img_main.classList.add('burger_menu_img');
    burger_menu_link_main.append(burger_menu_img_main);
    burger_menu_img_main.src = 'components/header/header-assets/home.png';

    const burger_menu_link_textbook = document.createElement('a');
    burger_menu_link_textbook.classList.add('burger_menu_link');
    burger_menu_nav.append(burger_menu_link_textbook);
    burger_menu_link_textbook.textContent = 'Textbook';
    burger_menu_link_textbook.href = '#textbook';

    const burger_menu_img_textbook = document.createElement('img');
    burger_menu_img_textbook.classList.add('burger_menu_img');
    burger_menu_link_textbook.append(burger_menu_img_textbook);
    burger_menu_img_textbook.src = 'components/header/header-assets/dictionary.png';

    const burger_menu_link_audiochalenge = document.createElement('a');
    burger_menu_link_audiochalenge.classList.add('burger_menu_link');
    burger_menu_nav.append(burger_menu_link_audiochalenge);
    burger_menu_link_audiochalenge.textContent = 'Audio Challenge';
    burger_menu_link_audiochalenge.href = '#audioChallenge';

    const burger_menu_img_audiochalenge = document.createElement('img');
    burger_menu_img_audiochalenge.classList.add('burger_menu_img');
    burger_menu_link_audiochalenge.append(burger_menu_img_audiochalenge);
    burger_menu_img_audiochalenge.src = 'components/header/header-assets/headphones.png';

    const burger_menu_link_sprint = document.createElement('a');
    burger_menu_link_sprint.classList.add('burger_menu_link');
    burger_menu_nav.append(burger_menu_link_sprint);
    burger_menu_link_sprint.textContent = 'Sprint';
    burger_menu_link_sprint.href = '#sprint';

    const burger_menu_img_sprint = document.createElement('img');
    burger_menu_img_sprint.classList.add('burger_menu_img');
    burger_menu_link_sprint.append(burger_menu_img_sprint);
    burger_menu_img_sprint.src = 'components/header/header-assets/running.png';

    const burger_menu_link_statistics = document.createElement('a');
    burger_menu_link_statistics.classList.add('burger_menu_link');
    burger_menu_nav.append(burger_menu_link_statistics);
    burger_menu_link_statistics.textContent = 'Statistics';
    burger_menu_link_statistics.href = '#statistics';

    burger_menu_link_statistics.addEventListener('click', async function () {
        await getUserStatistics();
    });

    const burger_menu_img_statistics = document.createElement('img');
    burger_menu_img_statistics.classList.add('burger_menu_img');
    burger_menu_link_statistics.append(burger_menu_img_statistics);
    burger_menu_img_statistics.src = 'components/header/header-assets/statistic.png';

    const burger_menu_link_logout = document.createElement('a');
    burger_menu_link_logout.classList.add('burger_menu_link');
    burger_menu_nav.append(burger_menu_link_logout);
    burger_menu_link_logout.textContent = 'Log Out';
    burger_menu_link_logout.href = '#log-out';

    burger_menu_link_logout.addEventListener('click', function () {
        deleteCookie('userId', 'token');
        changeUiForNonAuthUser();
        console.log('Clear cookies');
        window.location.hash = '';
        createMain();
    });

    const burger_menu_img_logout = document.createElement('img');
    burger_menu_img_logout.classList.add('burger_menu_img');
    burger_menu_link_logout.append(burger_menu_img_logout);
    burger_menu_img_logout.src = 'components/header/header-assets/logout.png';

    const burger_menu_overlay = document.createElement('div');
    burger_menu_overlay.classList.add('burger_menu_overlay');
    burger_menu.append(burger_menu_overlay);

    burgerMenu();
};

function burgerMenu() {
    const burger_menu_main = document.querySelector('.burger_menu');
    const button = document.querySelector('.burger_menu_button');
    const links = document.querySelectorAll('.burger_menu_link');
    const overlay = document.querySelector('.burger_menu_overlay');
    const body = document.querySelector('body') as HTMLBodyElement;

    button?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.forEach((el) => {
        el.addEventListener('click', () => {
            (burger_menu_main as HTMLElement).classList.remove('burger_menu_active');
            body.style.overflowY = 'visible';
            body.style.paddingRight = '0';
        });
    });
    overlay?.addEventListener('click', () => toggleMenu());

    function toggleMenu() {
        (burger_menu_main as HTMLElement).classList.toggle('burger_menu_active');
        if ((burger_menu_main as HTMLElement).classList.contains('burger_menu_active')) {
            body.style.overflowY = 'hidden';
            body.style.paddingRight = '17px';
        } else {
            body.style.overflowY = 'visible';
            body.style.paddingRight = '0';
        }
    }
}
