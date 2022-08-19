import { getWords } from "../../api/api"
import { IWord } from '../../interfaces & types/words'
import { createTextbook } from './textbook'

createTextbook();

export const readWords = async (page: number, group: number) => {
    const cards = await getWords(page, group);
    renderWords (cards);
}

export const renderWords = (cards: IWord[]) => {
    for (let i=0; i<20; i++)
        renderCard(cards[i]);
}

export const renderCard = (card: IWord) => {
    const textbook = document.getElementById('textbook');
    const newCard = document.createElement('div');
    const image = document.createElement('img');
    image.classList.add('image');
    image.setAttribute('src', './assets/images/flower.jpg');
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
    wordTranslate.textContent = 'цветок';

    const word = document.createElement('span');
    const transcription = document.createElement('span');
    word.classList.add('word');
    transcription.classList.add('transcription');
    word.textContent = 'Flower';
    transcription.textContent = '[fáuər]';
    wordTranscription.append(word);
    wordTranscription.append(transcription);

    card_content_top_left.append(wordTranscription);
    card_content_top_left.append(wordTranslate);

    const card_audio = document.createElement('svg');
    card_audio.classList.add('card_audio');
    card_audio.setAttribute('focusable', 'false');
    card_audio.setAttribute('viewBox', '0 0 24 24');
    card_audio.setAttribute('aria-hidden', 'true');
    card_audio.setAttribute('style', 'font-size: 2rem; cursor: pointer;');
    const card_audio_path = document.createElement('path');
    card_audio.append(card_audio_path);
    card_audio_path.setAttribute('d', 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z');
    card_content_top_right.append(card_audio);

    const card_content_bottom1 = document.createElement('div');
    const card_content_bottom2 = document.createElement('div');
    card_content_bottom.append(card_content_bottom1);
    card_content_bottom.append(card_content_bottom2);

    const textMeaning = document.createElement('div');
    const textExample = document.createElement('div');
    textMeaning.classList.add('textMeaning');
    textExample.classList.add('textExample');
    textMeaning.textContent = 'A flower is the colored part of a plant.';
    textExample.textContent = 'She gave pink flowers to her grandmother.';

    const textMeaningTranslate = document.createElement('div');
    const textExampleTranslate = document.createElement('div');
    textMeaningTranslate.classList.add('textMeaningTranslate');
    textExampleTranslate.classList.add('textExample');
    textMeaningTranslate.textContent = 'Цветок - это цветная часть растения.';
    textExampleTranslate.textContent = 'Она дала розовые цветы своей бабушке.';

    card_content_bottom1.append(textMeaning);
    card_content_bottom1.append(textMeaningTranslate);
    card_content_bottom2.append(textExample);
    card_content_bottom2.append(textExampleTranslate);

    
    word.textContent = card.word;
    wordTranslate.textContent = card.wordTranslate;
    transcription.textContent = card.transcription;
    image.src = card.image;
    textExample.textContent = card.textExample;
    textExampleTranslate.textContent = card.textExampleTranslate;
    textMeaning.textContent = card.textMeaning;
    textMeaningTranslate.textContent = card.textMeaningTranslate;
    //audio.src = card.audio;
    //audioMeaning.src = card.audioExample;
    //(newCard.querySelector('.audioMeaning') as HTMLAudioElement).src = card.audioMeaning;

    document.querySelector('.cards')?.appendChild(newCard);
}