import {
    dataStorage,
    setAudioChallengeRightAnswers,
    setAudioChallengeWrongAnswers,
    whichRoundInGameAudio,
} from '../../utils/storage';
import {
    changeIdkForNextBtn,
    changeNextForIdkBtn,
    deleteCorrectWord,
    disableWordsButton,
    playSoundCorrectChoice,
    playSoundInCorrectChoice,
} from './correct-or-incorrect-answer';
import { createRoundGameAudio, putWordsInGameAudio } from './create-game-session';
import { createStatsPopUp } from '../statistics-popup';

export const addKeyBoardToGame = () => {
    document.addEventListener('keydown', function (event) {
        switch (event.key) {
            case '1':
                choiceWithKeyboard('1');
                break;
            case '2':
                choiceWithKeyboard('2');
                break;
            case '3':
                choiceWithKeyboard('3');
                break;
            case '4':
                choiceWithKeyboard('4');
                break;
            case ' ':
                skipWithSpace();
                break;
        }
    });
};

const choiceWithKeyboard = (id: string) => {
    disableWordsButton(true);
    const word_div = document.getElementById(id) as HTMLDivElement;
    setAudioChallengeWrongAnswers;
    if (word_div.dataset.id === dataStorage.game__current__word.id) {
        setAudioChallengeRightAnswers(dataStorage.game__current__word);
        deleteCorrectWord(word_div.dataset.id as string);
        changeIdkForNextBtn();
        playSoundCorrectChoice();
    } else {
        setAudioChallengeWrongAnswers(dataStorage.game__current__word);
        changeIdkForNextBtn();
        playSoundInCorrectChoice();
    }
};

const skipWithSpace = () => {
    dataStorage.audiochallenge__round__words = [];
    createRoundGameAudio(dataStorage.audiochallenge__session__words);
    putWordsInGameAudio(dataStorage.audiochallenge__round__words);
    changeNextForIdkBtn();
    whichRoundInGameAudio();
    disableWordsButton(false);
    if (dataStorage.audiochallenge__num__of__round === 11) {
        createStatsPopUp('audioChallenge');
        dataStorage.audiochallenge__num__of__round = 9;
        whichRoundInGameAudio();
    }
};
