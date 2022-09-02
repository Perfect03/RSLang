import { deleteChildsOfMain } from '../utils/delete-main-childs';
import { createGameAudio } from './audiochallenge/create-game-session';
import { createLayoutAudioChallenge } from './audiochallenge/layout';
import { createLayoutSprint } from './sprint/layout';
import './minigames.css';
import './assets/volume.png';

export const chooseLevelPage = (game: string) => {
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

    levels_title.innerText = 'Choose the difficulty level:';

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
            if (game == 'sprint') createLayoutSprint(Number(level.dataset.level));
            else {
                createLayoutAudioChallenge();
                createGameAudio(Number(level.dataset.level));
            }
        });
    }
};
