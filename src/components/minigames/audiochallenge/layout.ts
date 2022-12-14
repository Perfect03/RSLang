import { deleteChildsOfMain } from '../../utils/delete-main-childs';

export const createLayoutAudioChallenge = () => {
    const main = document.querySelector('main') as HTMLElement;
    const audiochallenge_section = document.createElement('section');
    const audiochallenge_wrapper = document.createElement('section');
    const audiochallenge_header = document.createElement('div');
    const progress_bar = document.createElement('div');
    const close_a = document.createElement('a');
    const close_btn = document.createElement('button');
    const audiochallenge_game_container = document.createElement('div');
    const replay_btn_container = document.createElement('div');
    const replay_btn_container_img = document.createElement('img');
    const word_image_container = document.createElement('div');
    const word_image = document.createElement('img');
    const word_audio = document.createElement('audio');
    const words_wrapper = document.createElement('div');
    const replay_btn = document.createElement('button');
    const skip_btn_container = document.createElement('div');
    const skip_btn = document.createElement('button');

    audiochallenge_section.classList.add('game_container');
    audiochallenge_section.id = 'audioChallenge';
    audiochallenge_wrapper.classList.add('audiochallenge_wrapper');
    audiochallenge_header.classList.add('audiochallenge_header');
    progress_bar.classList.add('progress_bar');
    close_btn.classList.add('close_btn');
    audiochallenge_game_container.classList.add('game');
    replay_btn_container.classList.add('replay_btn_container');
    replay_btn_container_img.classList.add('replay_btn_container_img');
    replay_btn_container_img.src = 'components/minigames/assets/volume.png';
    words_wrapper.classList.add('words_wrapper');
    replay_btn.classList.add('replay_btn');
    word_image_container.classList.add('word_image_container');
    word_image.classList.add('word_image');
    word_audio.classList.add('word_audio');
    words_wrapper.classList.add('words_wrapper');
    skip_btn_container.classList.add('skip_btn_container');
    skip_btn.classList.add('skip_btn');
    skip_btn.textContent = 'Skip';

    close_a.href = '#home';

    deleteChildsOfMain();

    word_image.style.display = 'none';
    progress_bar.innerText = `0/10`;

    main.appendChild(audiochallenge_section);
    audiochallenge_section.appendChild(audiochallenge_wrapper);

    audiochallenge_wrapper.appendChild(audiochallenge_header);
    audiochallenge_header.appendChild(progress_bar);
    audiochallenge_header.appendChild(close_a);

    close_a.appendChild(close_btn);
    close_btn.style.cursor = 'pointer';

    audiochallenge_wrapper.appendChild(audiochallenge_game_container);

    audiochallenge_game_container.appendChild(replay_btn_container);
    replay_btn_container.appendChild(word_image_container);
    word_image_container.appendChild(word_image);
    replay_btn_container.appendChild(replay_btn);
    replay_btn.appendChild(replay_btn_container_img);

    replay_btn.appendChild(word_audio);
    audiochallenge_game_container.appendChild(words_wrapper);
    audiochallenge_game_container.appendChild(skip_btn_container);
    skip_btn_container.appendChild(skip_btn);

    for (let i = 0; i < 4; i++) {
        const word_div = document.createElement('button');
        word_div.classList.add(`word_div`);
        words_wrapper.appendChild(word_div);
    }
};

export const hideGameDiv = () => {
    const elements = document.querySelectorAll(
        '.replay_btn_container, .words_wrapper, .skip_btn_container, #sprint .points, #sprint .word, #sprint .seconds'
    ) as NodeListOf<HTMLElement>;
    elements.forEach((el) => {
        el.style.display = 'none';
    });
    /*const replay_btn_container = document.querySelector('.replay_btn_container') as HTMLDivElement;
    const words_wrapper = document.querySelector('.words_wrapper') as HTMLDivElement;
    const skip_btn_container = document.querySelector('.skip_btn_container') as HTMLDivElement;

    replay_btn_container.style.display = 'none';
    words_wrapper.style.display = 'none';
    skip_btn_container.style.display = 'none';*/
};
