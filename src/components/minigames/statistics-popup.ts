import { baseUrl } from '../../api/api';
import { dataStorage } from '../utils/storage';
import { hideGameDiv } from './audiochallenge/layout';
import { IGame } from '../../interfaces & types/game';
import './audiochallenge/audiochallenge.css';

export const createStatsPopUp = (game: IGame) => {
    hideGameDiv();

    const container = document.querySelector('.game') as HTMLDivElement;
    const stats_container = document.createElement('div');
    const stats_header = document.createElement('div');
    const correct_answers_container = document.createElement('div');
    const incorrect_answers_container = document.createElement('div');
    const correct_answers_title = document.createElement('div');
    correct_answers_title.classList.add('correct_answers_title_h');
    const incorrect_answers_title = document.createElement('div');
    incorrect_answers_title.classList.add('incorrect_answers_title_h');
    const correct_answers = document.createElement('div');
    const incorrect_answers = document.createElement('div');
    const buttons_div = document.createElement('div');
    // const repeat_btn = document.createElement('button');
    const mainpage_btn = document.createElement('button');
    const mainpage_a = document.createElement('a');
    const stats_container_result = document.createElement('div');

    stats_container_result.classList.add('stats_container_result');
    stats_container.classList.add('stats_container');
    stats_header.classList.add('stats_header');
    correct_answers_container.classList.add('correct_answers_container');
    correct_answers.classList.add('correct_answers');
    incorrect_answers_container.classList.add('incorrect_answers_container');
    incorrect_answers.classList.add('incorrect_answers');
    buttons_div.classList.add('buttons_div');
    // repeat_btn.classList.add('repeat_btn');
    mainpage_btn.classList.add('mainpage_btn', 'main_page_button', 'custom-btn');

    const right =
        game == 'audioChallenge'
            ? dataStorage.audiochallenge__round__right__answers
            : dataStorage.sprint__round__right__answers;
    stats_header.innerText = `Your score: ${right.length} / 10`;
    correct_answers_title.innerText = `Correct answers: ${right.length}`;

    const wrong =
        game == 'audioChallenge'
            ? dataStorage.audiochallenge__round__wrong__answers
            : dataStorage.sprint__round__wrong__answers;
    incorrect_answers_title.innerText = `Incorrect answers: ${wrong.length}`;
    // repeat_btn.innerText = 'Сыграть еще раз';
    mainpage_btn.innerText = 'Back to main';

    mainpage_a.href = '#home';
    mainpage_btn.style.cursor = 'pointer';

    container.appendChild(stats_container);
    stats_container.appendChild(stats_header);
    stats_container.appendChild(stats_container_result);
    stats_container_result.appendChild(correct_answers_container);
    stats_container_result.appendChild(incorrect_answers_container);
    correct_answers_container.appendChild(correct_answers_title);
    correct_answers_container.appendChild(correct_answers);
    incorrect_answers_container.appendChild(incorrect_answers_title);
    incorrect_answers_container.appendChild(incorrect_answers);
    stats_container.appendChild(buttons_div);
    // buttons_div.appendChild(repeat_btn);
    buttons_div.appendChild(mainpage_a);
    mainpage_a.appendChild(mainpage_btn);

    right.forEach((el) => {
        const answer_div = document.createElement('div');
        const audio_div = document.createElement('div');
        const audio = document.createElement('audio');
        const audio_btn = document.createElement('button');
        const eng_word = document.createElement('div');
        const ru_word = document.createElement('div');
        const audio_btn_img = document.createElement('img');

        answer_div.classList.add('answer_div');
        audio_div.classList.add('audio_div');
        eng_word.classList.add('eng_word');
        ru_word.classList.add('ru_word');
        audio_btn.classList.add('audio_btn');
        audio_btn_img.classList.add('audio_btn_img');
        audio_btn_img.src = 'components/minigames/assets/volume.png';

        eng_word.innerText = `  ${el.word}`;
        ru_word.innerText = ` - ${el.wordTranslate}`;
        audio.src = `${baseUrl}${el.audio}`;

        correct_answers.appendChild(answer_div);
        answer_div.appendChild(audio_div);
        answer_div.appendChild(eng_word);
        answer_div.appendChild(ru_word);
        audio_div.appendChild(audio);
        audio_div.appendChild(audio_btn);
        audio_btn.appendChild(audio_btn_img);

        audio_btn.addEventListener('click', function () {
            audio.play();
        });
    });

    wrong.forEach((el) => {
        const answer_div = document.createElement('div');
        const audio_div = document.createElement('div');
        const audio = document.createElement('audio');
        const audio_btn = document.createElement('button');
        const eng_word = document.createElement('div');
        const ru_word = document.createElement('div');
        const audio_btn_img = document.createElement('img');

        answer_div.classList.add('answer_div');
        audio_div.classList.add('audio_div');
        eng_word.classList.add('eng_word');
        ru_word.classList.add('ru_word');
        audio_btn.classList.add('audio_btn');
        audio_btn_img.classList.add('audio_btn_img');
        audio_btn_img.src = 'components/minigames/assets/volume.png';

        eng_word.innerText = ` ${el.word}`;
        ru_word.innerText = ` - ${el.wordTranslate}`;
        audio.src = `${baseUrl}${el.audio}`;

        incorrect_answers.appendChild(answer_div);
        answer_div.appendChild(audio_div);
        answer_div.appendChild(eng_word);
        answer_div.appendChild(ru_word);
        audio_div.appendChild(audio);
        audio_div.appendChild(audio_btn);
        audio_btn.appendChild(audio_btn_img);

        audio_btn.addEventListener('click', function () {
            audio.play();
        });
    });
};
