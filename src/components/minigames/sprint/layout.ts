import { checkAnswer } from './correct-or-incorrect-answer';
import { getWords } from '../../../api/api';
import { IWord } from '../../../interfaces & types/words';
import { dataStorage } from './state';

import './sprint.css';

export const createLayoutSprint = (level: number) => {
    const sprint = document.createElement('div');
    sprint.id = 'sprint';
    const game = document.createElement('div');
    game.classList.add('game');

    const points = document.createElement('div');
    const word = document.createElement('div');
    const seconds = document.createElement('div');
    points.classList.add('points');
    word.classList.add('word');
    seconds.classList.add('seconds');

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

    const accuracy_circle_progress_percents = document.createElement('div');
    const accuracy_circle_progress_percents_wrapper = document.createElement('div');
    const accuracy_circle_progress_percents_span = document.createElement('span');
    accuracy_circle_progress_percents.classList.add('accuracy_circle_progress_percents');
    accuracy_circle_progress_percents_wrapper.classList.add('accuracy_circle_progress_percents_wrapper');
    accuracy_circle_progress_percents_span.classList.add('accuracy_circle_progress_percents_span');
    accuracy_circle_progress_percents_span.textContent = '60';

    seconds.append(accuracy_circle_progress_percents);
    accuracy_circle_progress_percents.append(accuracy_circle_progress_percents_wrapper);
    accuracy_circle_progress_percents_wrapper.append(accuracy_circle_progress_percents_span);
    sprint.append(game);
    const main = document.querySelector('main') as HTMLElement;
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild as HTMLElement);
    }
    (main as HTMLElement).append(sprint);

    printWords(level);

    [button_right, button_wrong].forEach((el) => {
        el.addEventListener('click', (e) => {
            checkAnswer(e);
            printWords(level);
        });
    });
};

export const printWords = async (level: number) => {
    const rusDOM = document.querySelector('.word_russian');
    const engDOM = document.querySelector('.word_english');
    const rusWords = [];
    const engWords = [];

    const page = Math.random() % 30;
    rusWords.push(...(await getWords(page, level)).map((el) => el.wordTranslate));
    engWords.push(...(await getWords(page, level)).map((el) => el.word));

    const b = Math.floor(Math.random() * 2);
    const i = Math.floor(Math.random() * 20);
    const j = b ? i : getRandomNotEqual(i);
    (rusDOM as HTMLElement).textContent = rusWords[i];
    (engDOM as HTMLElement).textContent = engWords[j];

    dataStorage.correctness = Boolean(b);
};

const getRandomNotEqual = (i: number) => {
    let k = Math.floor(Math.random() * 20);
    while (k == i) {
        k = Math.floor(Math.random() * 20);
    }
    return k;
};
