import './burger.css';

export const createBurger = () => {
    const burger_menu = document.querySelector('body') as HTMLBodyElement;
    const burger_menu_button = document.createElement('a')
    burger_menu_button.classList.add('burger_menu_button')
    burger_menu.append(burger_menu_button)
    burger_menu_button.href = ''

    const burger_menu_lines = document.createElement('spun')
    burger_menu_lines.classList.add('burger_menu_lines')
    burger_menu_button.append(burger_menu_lines)

    const burger_menu_nav = document.createElement('nav')
    burger_menu_nav.classList.add('burger_menu_nav')
    burger_menu.append(burger_menu_nav)

    const burger_menu_link_main = document.createElement('a')
    burger_menu_link_main.classList.add('burger_menu_link')
    burger_menu_nav.append(burger_menu_link_main)
    burger_menu_link_main.textContent = 'Main'
    burger_menu_link_main.href = '#page-1'

    const burger_menu_img_main = document.createElement('img')
    burger_menu_img_main.classList.add('burger_menu_img')
    burger_menu_link_main.append(burger_menu_img_main)
    burger_menu_img_main.src = './header-assets/home.png'

    const burger_menu_link_textbook = document.createElement('a')
    burger_menu_link_textbook.classList.add('burger_menu_link')
    burger_menu_nav.append(burger_menu_link_textbook)
    burger_menu_link_textbook.textContent = 'Textbook'
    burger_menu_link_textbook.href = '#page-2'

    const burger_menu_img_textbook = document.createElement('img')
    burger_menu_img_textbook.classList.add('burger_menu_img')
    burger_menu_link_textbook.append(burger_menu_img_textbook)
    burger_menu_img_textbook.src = './header-assets/textbook.png'

    const burger_menu_link_dictionary = document.createElement('a')
    burger_menu_link_dictionary.classList.add('burger_menu_link')
    burger_menu_nav.append(burger_menu_link_dictionary)
    burger_menu_link_dictionary.textContent = 'Dictionary'
    burger_menu_link_dictionary.href = '#page-3'

    const burger_menu_img_dictionary = document.createElement('img')
    burger_menu_img_dictionary.classList.add('burger_menu_img')
    burger_menu_link_dictionary.append(burger_menu_img_dictionary)
    burger_menu_img_dictionary.src = './header-assets/dictionary.png'

    const burger_menu_link_minigame = document.createElement('a')
    burger_menu_link_minigame.classList.add('burger_menu_link')
    burger_menu_nav.append(burger_menu_link_minigame)
    burger_menu_link_minigame.textContent = 'Minigames'
    burger_menu_link_minigame.href = '#page-4'

    const burger_menu_img_minigame = document.createElement('img')
    burger_menu_img_minigame.classList.add('burger_menu_img')
    burger_menu_link_minigame.append(burger_menu_img_minigame)
    burger_menu_img_minigame.src = './header-assets/games.png'

    const burger_menu_link_statistics = document.createElement('a')
    burger_menu_link_statistics.classList.add('burger_menu_link')
    burger_menu_nav.append(burger_menu_link_statistics)
    burger_menu_link_statistics.textContent = 'Statistics'
    burger_menu_link_statistics.href = '#page-5'

    const burger_menu_img_statistics = document.createElement('img')
    burger_menu_img_statistics.classList.add('burger_menu_img')
    burger_menu_link_statistics.append(burger_menu_img_statistics)
    burger_menu_img_statistics.src = './header-assets/statistic.png'

    const burger_menu_link_logout = document.createElement('a')
    burger_menu_link_logout.classList.add('burger_menu_link')
    burger_menu_nav.append(burger_menu_link_logout)
    burger_menu_link_logout.textContent = 'Log Out'
    burger_menu_link_logout.href = '#page-6'

    const burger_menu_img_logout = document.createElement('img')
    burger_menu_img_logout.classList.add('burger_menu_img')
    burger_menu_link_logout.append(burger_menu_img_logout)
    burger_menu_img_logout.src = './header-assets/logout.png'

    const burger_menu_overlay = document.createElement('div')
    burger_menu_overlay.classList.add('burger_menu_overlay')
    burger_menu.append(burger_menu_overlay)
    burgerMenu();
};

function burgerMenu() {
    let burger_menu_main = document.querySelector('.burger_menu');
    let button = document.querySelector('.burger_menu_button');
    let links = document.querySelectorAll('.burger_menu_link');
    let overlay = document.querySelector('.burger_menu_overlay');
    const body = document.querySelector('body') as HTMLBodyElement;

    button?.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.forEach(el => { el.addEventListener('click', () => toggleMenu()) });
    overlay?.addEventListener('click', () => toggleMenu());

    function toggleMenu() {
        burger_menu_main?.classList.toggle('burger_menu_active');
        if (burger_menu_main?.classList.contains('burger_menu_active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'visible';
        }
    }
}
