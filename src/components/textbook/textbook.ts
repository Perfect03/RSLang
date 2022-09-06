import './textbook.css';
import { readWords, renderWords } from './index';
import { IWord, IWordIsDiffOrLearn } from '../../interfaces & types/words';
// import { usersWords } from '../utils/storage';
import { createUserWord } from '../../api/usersWords/usersWords';
import { storageUsersWords } from '../utils/storage';

export const createTextbook = () => {
    localStorage.setItem('pageGames', localStorage.getItem('page') as string);
    localStorage.setItem('groupGames', localStorage.getItem('group') as string);

    const textbook = document.createElement('div');
    textbook.id = 'textbook';

    const pagination = createPagination(Number(localStorage.getItem('page')));
    const textbook_words = document.createElement('div');
    textbook_words.classList.add('textbook_words');
    textbook_words.classList.add(`group${Number(localStorage.getItem('group'))}`);
    const textbook_games = createGames();

    textbook.append(textbook_games);
    textbook.append(pagination as HTMLElement);
    textbook.append(textbook_words);
    
    const cards = document.createElement('div');
    const groups = createGroups(Number(localStorage.getItem('group')));
    cards.classList.add('cards');

    textbook_words.append(cards);
    textbook_words.append(groups);

    const main = document.querySelector('main') as HTMLElement;
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild as HTMLElement);
    }
    (main as HTMLElement).append(textbook);
    listenPagination(pagination as HTMLElement);
    listenGroups(groups as HTMLElement);
    readWords(Number(localStorage.getItem('page')), Number(localStorage.getItem('group')));
};

const createPagination = (activeItem: number) => {
    let pagination: HTMLElement;
    if (document.querySelector('.pagination')) {
        pagination = document.querySelector('.pagination') as HTMLElement;
        pagination.removeChild(pagination.firstChild as HTMLElement);
    } else {
        pagination = document.createElement('div');
        pagination.classList.add('pagination');
    }
    const pagination_ul = document.createElement('ul');
    const paginationNumbers_li = [] as HTMLElement[];
    const paginationNumbers_a = [] as HTMLElement[];
    const paginationBorders_li = [] as HTMLElement[];
    const paginationBorders_a = [] as HTMLElement[];
    const paginationBreaks_li = [] as HTMLElement[];
    const paginationBreaks_a = [] as HTMLElement[];
    for (let j = 0; j < 30; j++) {
        paginationNumbers_li[j] = document.createElement('li');
        paginationNumbers_a[j] = document.createElement('a');
        paginationNumbers_li[j].append(paginationNumbers_a[j]);
        paginationNumbers_a[j].textContent = `${j + 1}`;
        paginationNumbers_li[j].classList.add('page-item');
        paginationNumbers_li[j].classList.add('page');
    }
    paginationNumbers_li[activeItem].classList.add('active');

    for (let j = 0; j < 2; j++) {
        paginationBorders_li[j] = document.createElement('li');
        paginationBorders_a[j] = document.createElement('a');
        paginationBorders_li[j].append(paginationBorders_a[j]);
        paginationBorders_li[j].classList.add('page');
    }
    paginationBorders_a[0].textContent = '❮';
    paginationBorders_li[0].classList.add('page-border-prev');
    if (!activeItem) paginationBorders_li[0].classList.add('disabled');
    paginationBorders_a[1].textContent = '❯';
    paginationBorders_li[1].classList.add('page-border-next');
    if (activeItem == 29) paginationBorders_li[1].classList.add('disabled');

    for (let j = 0; j < 2; j++) {
        paginationBreaks_li[j] = document.createElement('li');
        paginationBreaks_a[j] = document.createElement('a');
        paginationBreaks_li[j].append(paginationBreaks_a[j]);
        paginationBreaks_a[j].textContent = '...';
        paginationBreaks_li[j].classList.add('page');
    }
    paginationBreaks_li[0].classList.add('page-break-back');
    paginationBreaks_li[1].classList.add('page-break-next');

    pagination?.append(pagination_ul);
    appendPagination(pagination_ul, paginationNumbers_li, paginationBorders_li, paginationBreaks_li);
    return pagination;
};

const appendPagination = (ul: HTMLElement, numbers: HTMLElement[], borders: HTMLElement[], breaks: HTMLElement[]) => {
    let i = 0;
    ul.append(borders[0]);
    ul.append(numbers[0]);
    ul.append(numbers[1]);
    for (i = 0; i < numbers.length && !numbers[i].classList.contains('active'); ) {
        i++;
    }
    if (i >= 0 && i <= 3) {
        ul.append(numbers[2]);
        ul.append(numbers[3]);
        if (i === 3) ul.append(numbers[4]);
        ul.append(breaks[1]);
    }
    if (i >= 4 && i <= 25) {
        ul.append(breaks[0]);
        ul.append(numbers[i - 1]);
        ul.append(numbers[i]);
        ul.append(numbers[i + 1]);
        ul.append(breaks[1]);
    }
    if (i >= 26 && i <= 29) {
        ul.append(breaks[0]);
        if (i === 26) ul.append(numbers[25]);
        ul.append(numbers[26]);
        ul.append(numbers[27]);
    }
    ul.append(numbers[28]);
    ul.append(numbers[29]);
    ul.append(borders[1]);
};

const listenPagination = (pag: HTMLElement) => {
    pag.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).classList.contains('page') || (e.target as HTMLElement).tagName == 'A') {
            const active = Array.from(pag.querySelectorAll('.page')).find((el) => el.classList.contains('active'));
            const activeNumber = Number(active?.textContent) - 1;
            if (
                !(
                    (activeNumber == 0 && (e.target as HTMLElement).textContent == '❮') ||
                    (activeNumber == 29 && (e.target as HTMLElement).textContent == '❯')
                )
            ) {
                active?.classList.remove('active');
                let activeNumberNew;
                if (Number((e.target as HTMLElement).textContent)) {
                    activeNumberNew = Number((e.target as HTMLElement).textContent) - 1;
                } else
                    switch ((e.target as HTMLElement).textContent) {
                        case '❮': {
                            activeNumberNew = activeNumber - 1;
                            break;
                        }
                        case '❯': {
                            activeNumberNew = activeNumber + 1;
                            break;
                        }
                        case '...': {
                            if (
                                (e.target as HTMLElement).classList.contains('page-break-back') ||
                                ((e.target as HTMLElement).parentNode as HTMLElement).classList.contains(
                                    'page-break-back'
                                )
                            )
                                activeNumberNew = activeNumber - 3;
                            else activeNumberNew = activeNumber + 3;
                        }
                    }
                pag = createPagination(activeNumberNew as number);
                localStorage.setItem('page', activeNumberNew?.toString() as string);
                localStorage.setItem('pageGames', activeNumberNew?.toString() as string);
                readWords(Number(localStorage.getItem('page')), Number(localStorage.getItem('group')));
            }
        }
    });
};

const createGroups = (activeItem: number) => {
    const groups = document.createElement('div');
    groups.classList.add('groups');
    const groups_title = document.createElement('h6');
    groups_title.classList.add('groups_title');
    groups_title.textContent = 'Degree of difficulty:';
    const groups_buttons = document.createElement('div');
    groups_buttons.classList.add('groups_buttons');
    groups.append(groups_title);
    groups.append(groups_buttons);

    const button = [] as HTMLElement[];
    for (let i = 0; i < 7; i++) {
        button[i] = document.createElement('button');
        button[i].textContent = `${i + 1}`;
        button[i].classList.add(`${'group' + i}`);
        groups_buttons.append(button[i]);
    }
    button[activeItem].classList.add('active');

    return groups;
};

const empty_card = document.createElement('div');
empty_card.classList.add('empty_card', 'card');
empty_card.textContent = 'There is nothing here yet.';

const changeStyleGroup = () => {
  const textbook_words = document.querySelector('.textbook_words') as HTMLElement;
  const cards = document.querySelector('.cards') as HTMLElement;
    document.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).classList.contains('group0')) {
            for (let i = 0; i < 7; i++) {
                textbook_words.classList.remove(`group${i}`);
            }
            textbook_words.classList.add('group0');
        } else if ((e.target as HTMLElement).classList.contains('group1')) {
            for (let i = 0; i < 7; i++) {
                textbook_words.classList.remove(`group${i}`);
            }
            textbook_words.classList.add('group1');
        } else if ((e.target as HTMLElement).classList.contains('group2')) {
            for (let i = 0; i < 7; i++) {
                textbook_words.classList.remove(`group${i}`);
            }
            textbook_words.classList.add('group2');
        } else if ((e.target as HTMLElement).classList.contains('group3')) {
            for (let i = 0; i < 7; i++) {
                textbook_words.classList.remove(`group${i}`);
            }
            textbook_words.classList.add('group3');
        } else if ((e.target as HTMLElement).classList.contains('group4')) {
            for (let i = 0; i < 7; i++) {
                textbook_words.classList.remove(`group${i}`);
            }
            textbook_words.classList.add('group4');
        } else if ((e.target as HTMLElement).classList.contains('group5')) {
            for (let i = 0; i < 7; i++) {
                textbook_words.classList.remove(`group${i}`);
            }
            textbook_words.classList.add('group5');
        } else if ((e.target as HTMLElement).classList.contains('group6')) {
            for (let i = 0; i < 7; i++) {
                textbook_words.classList.remove(`group${i}`);
            }
            textbook_words.classList.add('group6');
            if (!cards.childNodes.length) {
                cards.append(empty_card);
            }
        }
    });
};

export const checkLearnedWords = () => {
    let learned = 0;
    document.querySelectorAll('.card').forEach((el) => {
        if ((el as HTMLElement).classList.contains('learned_word')) learned++;
    });
    if (learned == document.querySelectorAll('.card').length) {
        (document.querySelector('.textbook_words') as HTMLElement).style.background =
            'linear-gradient(to right, rgba(162, 246, 104, 0.48), 50%, rgb(250, 252, 252))';
        (document.querySelector('.page-item.active') as HTMLElement).classList.add('learned');
        (document.querySelector('button.active') as HTMLElement).classList.add('learned');
        (document.querySelector('.textbook_games') as HTMLElement).style.display = 'none';
    } else {
        (document.querySelector('.page-item.active') as HTMLElement).classList.remove('learned');
        (document.querySelector('button.active') as HTMLElement).classList.remove('learned');
        (document.querySelector('.textbook_games') as HTMLElement).style.display = 'flex';
        changeStyleGroup();
    }
};

const listenGroups = (groups: HTMLElement) => {
    groups.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).tagName == 'BUTTON') {
            const active = Array.from(groups.querySelectorAll('button')).find((el) => el.classList.contains('active'));
            active?.classList.remove('active');
            (e.target as HTMLElement).classList.add('active');
            localStorage.setItem('group', (Number((e.target as HTMLElement).textContent) - 1).toString());
            localStorage.setItem('groupGames', (Number((e.target as HTMLElement).textContent) - 1).toString());
            if (Number((e.target as HTMLElement).textContent) - 1 == 6) {
                renderWords(storageUsersWords.hardWords);
            } else readWords(Number(localStorage.getItem('page')), Number(localStorage.getItem('group')));
        }
    });
};

export const difficultWord = (word: IWord) => {
    storageUsersWords.hardWords.push(word);
    storageUsersWords.learnedWords = storageUsersWords.learnedWords.filter(function (f) {
        return f !== word;
    });
    const wordWithId: IWordIsDiffOrLearn = {
        wordId: word.id,
        word: {
            difficulty: 'hard',
            optional: {
                learned: false,
            },
        },
    };
    createUserWord(wordWithId);
};

export const learnWord = (word: IWord) => {
    storageUsersWords.learnedWords.push(word);
    storageUsersWords.hardWords = storageUsersWords.hardWords.filter(function (f) {
        return f !== word;
    });
    const wordWithId: IWordIsDiffOrLearn = {
        wordId: word.id,
        word: {
            difficulty: 'easy',
            optional: {
                learned: true,
            },
        },
    };
    createUserWord(wordWithId);
};

const createGames = () => {
    const textbook_games = document.createElement('div');
    textbook_games.classList.add('textbook_games');
    textbook_games.classList.add('game');

    const a_link1 = document.createElement('a');
    const a_link2 = document.createElement('a');

    a_link1.href = '#audioChallenge';
    a_link2.href = '#sprint';

    textbook_games.append(a_link1);
    textbook_games.append(a_link2);
    const textbook_game1 = document.createElement('div');
    const textbook_game2 = document.createElement('div');
    a_link1.append(textbook_game1);
    a_link2.append(textbook_game2);
    const game_img1 = document.createElement('img');
    const game_img2 = document.createElement('img');
    const game_title1 = document.createElement('span');
    const game_title2 = document.createElement('span');
    textbook_game1.append(game_img1);
    textbook_game1.append(game_title1);
    textbook_game2.append(game_img2);
    textbook_game2.append(game_title2);
    textbook_game1.classList.add('textbook_game');
    textbook_game2.classList.add('textbook_game');
    game_title1.textContent = 'Audio Challenge';
    game_title2.textContent = 'Sprint';
    game_img1.setAttribute('src', 'components/textbook/textbook-assets/headphones.png');
    game_img2.setAttribute('src', 'components/textbook/textbook-assets/running.png');
    game_img1.setAttribute('alt', 'img');
    game_img2.setAttribute('alt', 'img');

    return textbook_games;
};
