import { dataStorage, setRightAnswers, setWrongAnswers } from '../../utils/storage';

export const checkAnswer = (e: MouseEvent) => {
    let result;
    if (
        ((e.target as HTMLElement).textContent === 'right' && dataStorage.sprint__state.correctness) ||
        ((e.target as HTMLElement).textContent === 'wrong' && !dataStorage.sprint__state.correctness)
    )
        result = true;
    else result = false;
    changeResult(result);
};

export const changeResult = (res: boolean) => {
    if (res) {
        setRightAnswers(dataStorage.game__current__word);
        const audio = new Audio('components/minigames/assets/correct.mp3');
        audio.play();
        dataStorage.sprint__state.score += dataStorage.sprint__state.plus;
        if (dataStorage.sprint__state.circles < 3) dataStorage.sprint__state.circles++;
        else {
            dataStorage.sprint__state.circles = 0;
            dataStorage.sprint__state.plus += 10;
        }
    } else {
        setWrongAnswers(dataStorage.game__current__word);
        const audio = new Audio('components/minigames/assets/incorrect.mp3');
        audio.play();
        dataStorage.sprint__state.circles = 0;
        dataStorage.sprint__state.plus = 10;
    }
    drawResult();
};

export const drawResult = () => {
    (document.querySelector('.points_score') as HTMLElement).textContent = dataStorage.sprint__state.score.toString();
    drawCircles(dataStorage.sprint__state.circles);
    (document.querySelector(
        '.points_plus'
    ) as HTMLElement).textContent = `+${dataStorage.sprint__state.plus.toString()} points`;
};

export const drawCircles = (n: number) => {
    const circles = document.querySelectorAll('.circle');
    circles.forEach((el) => el.classList.remove('active'));
    for (let i = 0; i < n; i++) circles[i].classList.add('active');
};
