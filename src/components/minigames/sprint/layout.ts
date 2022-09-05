import { checkAnswer } from './correct-or-incorrect-answer';
import { getWords } from '../../../api/api';
import { dataStorage, setCurrentWord } from '../../utils/storage';
import { createStatsPopUp } from '../statistics-popup';

import './sprint.css';

export const createLayoutSprint = (level: string, page: string | null = null) => {
    const sprint = document.createElement('section');
    sprint.classList.add('game_container');
    sprint.id = 'sprint';
    const game = document.createElement('div');
    game.classList.add('game');

    const close_a = document.createElement('a');
    const close_btn = document.createElement('button');
    const points = document.createElement('div');
    const word = document.createElement('div');
    const seconds = document.createElement('div');

    close_a.href = '#home';
    close_btn.classList.add('close_btn');
    points.classList.add('points');
    word.classList.add('word');
    seconds.classList.add('seconds');

    close_a.classList.add('close_a');
    close_a.append(close_btn);

    game.append(close_a);
    game.append(points);
    game.append(word);
    game.append(seconds);

    const points_h4 = document.createElement('h4');
    const points_h6 = document.createElement('h6');
    points_h4.classList.add('points_score');
    points_h6.classList.add('points_plus');
    points_h4.textContent = '0';
    points_h6.textContent = '+10 points';
    const points_status = document.createElement('div');
    points_status.classList.add('status');
    const circle = [] as HTMLElement[];
    for (let i = 0; i < 3; i++) {
        circle[i] = document.createElement('div');
        circle[i].classList.add('circle');
        circle[i].classList.add('disabled');
        points_status.append(circle[i]);
    }

    points.appendChild(points_h4);
    points.appendChild(points_h6);
    points.appendChild(points_status);

    const words = document.createElement('div');
    const buttons = document.createElement('div');
    word.appendChild(words);
    word.appendChild(buttons);

    const words_h4 = document.createElement('h4');
    const words_h5 = document.createElement('h5');
    words_h4.textContent = '';
    words_h5.textContent = '';
    words_h4.classList.add('word_english');
    words_h5.classList.add('word_russian');
    words.appendChild(words_h4);
    words.appendChild(words_h5);
    words.classList.add('words');

    const button_right = document.createElement('button');
    const button_wrong = document.createElement('button');
    button_right.classList.add('right');
    button_wrong.classList.add('wrong');
    buttons.append(button_right);
    buttons.append(button_wrong);
    buttons.classList.add('buttons');

    const button_right_span = document.createElement('span');
    const button_wrong_span = document.createElement('span');
    button_right_span.textContent = 'right';
    button_wrong_span.textContent = 'wrong';
    button_right.append(button_right_span);
    button_wrong.append(button_wrong_span);

    const progress_percents = document.createElement('div');
    const progress_percents_wrapper = document.createElement('div');
    const progress_percents_span = document.createElement('span');

    progress_percents.classList.add('progress_percents');
    progress_percents_wrapper.classList.add('progress_percents_wrapper');
    progress_percents_span.classList.add('progress_percents_span');
    progress_percents_span.textContent = '60';

    let timer = setTimeout(function tick() {
        progress_percents_span.textContent = (Number(progress_percents_span.textContent) - 1).toString();
        if (Number(progress_percents_span.textContent)) timer = setTimeout(tick, 1000);
        else createStatsPopUp('sprint');
    }, 1000);
    
    seconds.append(progress_percents_span);
    seconds.append(progress_percents);
    progress_percents.append(progress_percents_wrapper);

    sprint.append(game);
    const main = document.querySelector('main') as HTMLElement;
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild as HTMLElement);
    }
    (main as HTMLElement).append(sprint);

    printWord(Number(level), page);

    [button_right, button_wrong].forEach((el) => {
        el.addEventListener('click', (e) => {
            checkAnswer(e);
            printWord(Number(level), page);
        });
    });

    [...Array.from(document.querySelectorAll('.burger_menu_link')), document.querySelector('.close-a')].forEach(
        (el) => {
            (el as HTMLElement).addEventListener('click', () => {
                clearTimeout(timer);
            });
        }
    );
};

export const printWord = async (level: number, page: string | null) => {
    const rusDOM = document.querySelector('.word_russian');
    const engDOM = document.querySelector('.word_english');
    //const page = Math.random() % 30;

    const i = Math.floor(Math.random() * 20);
    const b = Math.floor(Math.random() * 2);
    const j = b ? i : getRandomNotEqual(i);

    const words = await getWords(page ? Number(page) : Math.floor(Math.random() * 30), level);
    const currentEngWord = words[i];
    const currentRusWord = words[j];

    (engDOM as HTMLElement).textContent = currentEngWord.word;
    (rusDOM as HTMLElement).textContent = currentRusWord.wordTranslate;

    setCurrentWord(currentEngWord);
    dataStorage.sprint__state.correctness = Boolean(b);
};

const getRandomNotEqual = (i: number) => {
    let k = Math.floor(Math.random() * 20);
    while (k == i) {
        k = Math.floor(Math.random() * 20);
    }
    return k;
};
