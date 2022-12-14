import { getWords } from '../../api/api';
import { IWord, IServerWord } from '../../interfaces & types/words';
import { baseUrl } from '../../api/api';
import { difficultWord, learnWord, checkLearnedWords } from './textbook';
import { storageUserAccInfo } from '../utils/storage';
import { axiosGetAllUserWords } from '../../api/usersWords/usersWords';

import './textbook-assets/headphones.png';
import './textbook-assets/running.png';
import './textbook-assets/difwords.png';

export const readWords = async (page: number, group: number) => {
    const cards = await getWords(page, group);
    renderWords(cards);
};

export const renderWords = async (cards: IWord[]) => {
    const cardsDOM = document.querySelector('.cards') as HTMLElement;
    while (cardsDOM.hasChildNodes()) {
        cardsDOM.removeChild(cardsDOM.firstChild as HTMLElement);
    }
    let words: IServerWord[] = [];
    if (storageUserAccInfo.email) {
        words = await axiosGetAllUserWords();
    }
    for (let i = 0; i < cards.length; i++) {
        cardsDOM.appendChild(renderCard(cards[i], words));
    }
    checkLearnedWords();
};

const createAudio = (card: IWord) => {
    const card_audio_icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    card_audio_icon.classList.add('card_audio');
    card_audio_icon.setAttributeNS(null, 'focusable', 'false');
    card_audio_icon.setAttributeNS(null, 'viewBox', '0 0 24 24');
    card_audio_icon.setAttributeNS(null, 'aria-hidden', 'true');
    card_audio_icon.setAttributeNS(null, 'style', 'font-size: 2rem; cursor: pointer;');
    const card_audio_icon_path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    card_audio_icon.append(card_audio_icon_path);
    card_audio_icon_path.setAttributeNS(
        null,
        'd',
        'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'
    );

    const card_audio = document.createElement('audio');
    const card_audio_meaning = document.createElement('audio');
    const card_audio_example = document.createElement('audio');

    card_audio.src = `${baseUrl}${card.audio}`;
    card_audio_meaning.src = `${baseUrl}${card.audioMeaning}`;
    card_audio_example.src = `${baseUrl}${card.audioExample}`;

    card_audio_icon.addEventListener('click', () => {
        const audios = [card_audio, card_audio_meaning, card_audio_example];
        if (audios.some((el) => el.currentTime)) {
            card_audio_icon_path.setAttributeNS(
                null,
                'd',
                'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z'
            );
            audios.forEach((el) => {
                el.pause();
                el.currentTime = 0;
            });
        } else {
            card_audio_icon_path.setAttributeNS(null, 'd', 'M6 6h12v12H6z');
            audios[0].play();
            for (let i = 0; i < audios.length - 1; i++) {
                audios[i].onended = function () {
                    audios[i + 1].play();
                };
            }
        }
    });
    return [card_audio_icon, card_audio, card_audio_meaning, card_audio_example];
};

export const renderCard = (card: IWord, words: IServerWord[]) => {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    const image = document.createElement('img');
    image.classList.add('image');
    const card_content = document.createElement('div');
    card_content.classList.add('card_content');
    newCard.append(image);
    newCard.append(card_content);

    const card_content_top = document.createElement('div');
    card_content_top.classList.add('card_content_top');
    const card_content_bottom = document.createElement('div');
    card_content_bottom.classList.add('card_content_bottom');
    card_content.append(card_content_top);
    card_content.append(card_content_bottom);

    const card_content_top_left = document.createElement('div');
    card_content_top_left.classList.add('card_content_top_left');
    const card_content_top_right = document.createElement('div');
    card_content_top_right.classList.add('card_content_top_right');
    card_content_top.append(card_content_top_left);
    card_content_top.append(card_content_top_right);

    const wordTranscription = document.createElement('div');
    const wordTranslate = document.createElement('wordTranslate');
    wordTranslate.classList.add('wordTranslate');

    const word = document.createElement('span');
    const transcription = document.createElement('span');
    word.classList.add('word');
    transcription.classList.add('transcription');
    wordTranscription.append(word);
    wordTranscription.append(transcription);

    card_content_top_left.append(wordTranscription);
    card_content_top_left.append(wordTranslate);

    createAudio(card).forEach((el) => {
        card_content_top_right.append(el);
    });

    const card_content_bottom1 = document.createElement('div');
    const card_content_bottom2 = document.createElement('div');
    const card_content_bottom3 = document.createElement('div');
    card_content_bottom.append(card_content_bottom1);
    card_content_bottom.append(card_content_bottom2);
    card_content_bottom.append(card_content_bottom3);
    card_content_bottom3.classList.add('card_content_bottom3');

    const textMeaning = document.createElement('div');
    const textExample = document.createElement('div');
    textMeaning.classList.add('textMeaning');
    textExample.classList.add('textExample');
    const buttonsLeft = document.createElement('div');
    const buttonsRight = document.createElement('div');
    buttonsLeft.classList.add('card_buttons');

    buttonsRight.classList.add('card_buttons');
    if (storageUserAccInfo.email) {
        const difficultButton = document.createElement('button') as HTMLButtonElement;
        const difficultButton_text = document.createElement('span');
        const deleteButton = document.createElement('button');
        const deleteButton_text = document.createElement('span');
        difficultButton.classList.add('difficultButton');
        deleteButton.classList.add('deleteButton');
        difficultButton.append(difficultButton_text);
        deleteButton.append(deleteButton_text);
        difficultButton_text.textContent = 'difficult';
        deleteButton_text.textContent = 'learned';
        buttonsLeft.append(difficultButton);
        buttonsLeft.append(deleteButton);

        newCard.dataset.id = card.id;
        newCard.dataset.difficulty = 'easy';

        words = words.filter(function (f) {
            return f.wordId == card.id;
        });
        if (words.length) {
            if (words[0].difficulty == 'hard') {
                newCard.classList.remove('learned_word');
                newCard.classList.add('hard_word');
                newCard.dataset.difficulty = 'hard';
            }
            if (words[0].difficulty == 'learned') {
                newCard.classList.remove('hard_word');
                newCard.classList.add('learned_word');
                newCard.dataset.difficulty = 'easy';
            }
        } else {
            difficultButton.addEventListener('click', () => {
                difficultWord(card);
                newCard.classList.remove('learned_word');
                newCard.classList.add('hard_word');
                newCard.dataset.difficulty = 'hard';
                checkLearnedWords();
            });
            deleteButton.addEventListener('click', () => {
                learnWord(card);
                newCard.classList.remove('hard_word');
                newCard.classList.add('learned_word');
                newCard.dataset.difficulty = 'easy';
                checkLearnedWords();
            });
        }
    }
    const correctAnswers = document.createElement('div');
    const correctAnswers_text = document.createElement('span');
    const incorrectAnswers = document.createElement('div');
    const incorrectAnswers_text = document.createElement('span');

    correctAnswers.classList.add('correctAnswers');
    incorrectAnswers.classList.add('incorrectAnswers');

    correctAnswers.append(correctAnswers_text);
    incorrectAnswers.append(incorrectAnswers_text);

    correctAnswers_text.textContent = '0';
    incorrectAnswers_text.textContent = '0';

    buttonsRight.append(correctAnswers);
    buttonsRight.append(incorrectAnswers);

    const textMeaningTranslate = document.createElement('div');
    const textExampleTranslate = document.createElement('div');
    textMeaningTranslate.classList.add('textMeaningTranslate');
    textExampleTranslate.classList.add('textExample');

    card_content_bottom1.append(textMeaning);
    card_content_bottom1.append(textMeaningTranslate);
    card_content_bottom2.append(textExample);
    card_content_bottom2.append(textExampleTranslate);
    card_content_bottom3.append(buttonsLeft);
    card_content_bottom3.append(buttonsRight);

    word.textContent = card.word;
    wordTranslate.textContent = card.wordTranslate;
    transcription.textContent = card.transcription;
    image.src = `${baseUrl}${card.image}`;
    textExample.insertAdjacentHTML('beforeend', card.textExample);
    textExampleTranslate.textContent = card.textExampleTranslate;
    textMeaning.insertAdjacentHTML('beforeend', card.textMeaning);
    textMeaningTranslate.textContent = card.textMeaningTranslate;

    return newCard;
};
