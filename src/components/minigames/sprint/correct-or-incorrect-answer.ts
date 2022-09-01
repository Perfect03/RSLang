import { dataStorage } from './state';
import { printWords } from './layout';

export const checkAnswer = (e: MouseEvent) => {
    let result;
    if (
        ((e.target as HTMLElement).textContent === 'right' && dataStorage.correctness) ||
        ((e.target as HTMLElement).textContent === 'wrong' && !dataStorage.correctness)
    )
        result = true;
    else result = false;
    changeResult(result);
};

export const changeResult = (res: boolean) => {
    if (res) {
        dataStorage.score += dataStorage.plus;
        if (dataStorage.circles < 3) dataStorage.circles++;
        else {
            dataStorage.circles = 0;
            dataStorage.plus += 10;
        }
    } else {
        dataStorage.circles = 0;
        dataStorage.plus = 10;
    }
    drawResult(res);
};

export const drawResult = (res: boolean) => {
    (document.querySelector('.points_score') as HTMLElement).textContent = dataStorage.score.toString();
    drawCircles(dataStorage.circles);
    (document.querySelector('.points_plus') as HTMLElement).textContent = `+${dataStorage.plus.toString()} points`;
};

export const drawCircles = (n: number) => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((el) => el.classList.remove('active'));
    for (let i = 0; i < n; i++) circles[i].classList.add('active');
};

export const addListenersToWordsBtn = (button: HTMLButtonElement) => {
    const replay_btn = document.querySelector('.replay_btn') as HTMLButtonElement;
    button.addEventListener('click', function () {
        if (button.dataset.id === replay_btn.dataset.id) {
            deleteCorrectWord(button.dataset.id as string);
            changeIdkForNexBtn();
            playSoundCorrectChoice();
        } else {
            playSoundInCorrectChoice();
        }
    });
};

const playSoundCorrectChoice = () => {
    console.log('Correct!');
    const word_image = document.querySelector('.word_image') as HTMLImageElement;
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;

    if (skip_btn.innerText === 'Next') {
        word_image.style.display = 'block';
    }
    // const audio = new Audio('dist/components/minigames/audiochallenge/assets/correct.mp3');
    // audio.play();
};

const playSoundInCorrectChoice = () => {
    console.log('Incorrect!');
    // const audio = new Audio('components/minigames/audiochallenge/incorrect.mp3');
    // audio.play();
};

const deleteCorrectWord = (wordId: string) => {};

const changeIdkForNexBtn = () => {
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;
    skip_btn.innerText = 'Next';
};

export const changeNextForIdkBtn = () => {
    const skip_btn = document.querySelector('.skip_btn') as HTMLButtonElement;
    const word_image = document.querySelector('.word_image') as HTMLImageElement;
    skip_btn.innerText = 'Skip';
    word_image.style.display = 'None';
};
