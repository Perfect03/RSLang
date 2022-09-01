import { baseUrl } from '../../../api/api';
import { dataStorage } from '../../utils/storage';
import { hideGameDiv } from './layout';

export const createStatsPopUp = () => {
    hideGameDiv();

    const container = document.querySelector('.audiochallenge_game_container') as HTMLDivElement;
    const stats_container = document.createElement('div');
    const stats_header = document.createElement('div');
    const correct_answers_container = document.createElement('div');
    const incorrect_answers_container = document.createElement('div');
    const correct_answers_title = document.createElement('div');
    const incorrect_answers_title = document.createElement('div');
    const correct_answers = document.createElement('div');
    const incorrect_answers = document.createElement('div');
    const buttons_div = document.createElement('div');
    // const repeat_btn = document.createElement('button');
    const mainpage_btn = document.createElement('button');
    const mainpage_a = document.createElement('a');

    stats_container.classList.add('stats_container');
    stats_header.classList.add('stats_header');
    correct_answers_container.classList.add('correct_answers_container');
    correct_answers.classList.add('correct_answers');
    incorrect_answers_container.classList.add('incorrect_answers_container');
    incorrect_answers.classList.add('incorrect_answers');
    buttons_div.classList.add('buttons_div');
    // repeat_btn.classList.add('repeat_btn');
    mainpage_btn.classList.add('mainpage_btn');

    stats_header.innerText = `Ваш результат: ${dataStorage.audiochallenge__round__right__answers.length}/10`;
    correct_answers_title.innerText = `Верные ответы: ${dataStorage.audiochallenge__round__right__answers.length}`;
    incorrect_answers_title.innerText = `Неверные ответы: ${dataStorage.audiochallenge__round__wrong__answers.length}`;
    // repeat_btn.innerText = 'Сыграть еще раз';
    mainpage_btn.innerText = 'Выйти на главную страницу';

    mainpage_a.href='#home';
    mainpage_btn.style.cursor='pointer';

    container.appendChild(stats_container);
    stats_container.appendChild(stats_header);
    stats_container.appendChild(correct_answers_container);
    stats_container.appendChild(incorrect_answers_container);
    correct_answers_container.appendChild(correct_answers_title);
    correct_answers_container.appendChild(correct_answers);
    incorrect_answers_container.appendChild(incorrect_answers_title);
    incorrect_answers_container.appendChild(incorrect_answers);
    stats_container.appendChild(buttons_div);
    // buttons_div.appendChild(repeat_btn);
    buttons_div.appendChild(mainpage_a);
    mainpage_a.appendChild(mainpage_btn);

    dataStorage.audiochallenge__round__right__answers.forEach((el) => {
        const answer_div = document.createElement('div');
        const audio_div = document.createElement('div');
        const audio = document.createElement('audio');
        const audio_btn = document.createElement('button');
        const eng_word = document.createElement('div');
        const ru_word = document.createElement('div');

        answer_div.classList.add('answer_div');
        audio_div.classList.add('audio_div');
        eng_word.classList.add('eng_word');
        ru_word.classList.add('ru_word');
        audio_btn.classList.add('audio_btn');

        eng_word.innerText = `- ${el.word}`;
        ru_word.innerText = `- ${el.wordTranslate}`;
        audio.src = `${baseUrl}${el.audio}`;

        correct_answers.appendChild(answer_div);
        answer_div.appendChild(audio_div);
        answer_div.appendChild(eng_word);
        answer_div.appendChild(ru_word);
        audio_div.appendChild(audio);
        audio_div.appendChild(audio_btn);

        audio_btn.addEventListener('click', function () {
            audio.play();
        });
    });

    dataStorage.audiochallenge__round__wrong__answers.forEach((el) => {
        const answer_div = document.createElement('div');
        const audio_div = document.createElement('div');
        const audio = document.createElement('audio');
        const audio_btn = document.createElement('button');
        const eng_word = document.createElement('div');
        const ru_word = document.createElement('div');

        answer_div.classList.add('answer_div');
        audio_div.classList.add('audio_div');
        eng_word.classList.add('eng_word');
        ru_word.classList.add('ru_word');
        audio_btn.classList.add('audio_btn');

        eng_word.innerText = `- ${el.word}`;
        ru_word.innerText = `- ${el.wordTranslate}`;
        audio.src = `${baseUrl}${el.audio}`;

        incorrect_answers.appendChild(answer_div);
        answer_div.appendChild(audio_div);
        answer_div.appendChild(eng_word);
        answer_div.appendChild(ru_word);
        audio_div.appendChild(audio);
        audio_div.appendChild(audio_btn);

        audio_btn.addEventListener('click', function () {
            audio.play();
        });
    });
};
