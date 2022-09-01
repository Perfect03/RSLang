import { deleteChildsOfMain } from '../../utils/delete-main-childs';
import { createGameAudio } from './create-game-session';
import { createLayoutAudioChallenge } from './layout';
import './audiochallenge.css';
import './assets/volume.png';
import './assets/correct.mp3';
import './assets/incorrect.mp3';

export const audiochallengeLevelPage = () => {
    deleteChildsOfMain();
    const header_title = document.querySelector('.header_content_page_name') as HTMLHeadingElement;
    header_title.innerText = 'AudioChallenge';
    const main = document.querySelector('main') as HTMLDivElement;

    const levels_wrapper = document.createElement('div');
    const levels_title = document.createElement('span');
    const levels_div = document.createElement('div');

    levels_wrapper.classList.add('level_wrapper');
    levels_div.classList.add('levels_div');
    levels_title.classList.add('levels_title');

    levels_title.innerText = 'Select the Level';

    main.appendChild(levels_wrapper);
    levels_wrapper.appendChild(levels_title);
    levels_wrapper.appendChild(levels_div);

    for (let i = 0; i < 6; i++) {
        const level = document.createElement('button');

        level.dataset.level = (i + 1).toString();
        level.innerText = (i + 1).toString();

        level.classList.add('level');

        levels_div.appendChild(level);

        level.addEventListener('click', function () {
            createLayoutAudioChallenge();
            createGameAudio(Number(level.dataset.level));
        });
    }
};
