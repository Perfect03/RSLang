import { getWords } from "../../api/api"
import { IWord } from '../../interfaces & types/words'

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



    //... здесь должна быть вёрстка newCard

    
    // можно ли это как-то оформить в виде цикла?
    (newCard.querySelector('.word') as HTMLElement).innerHTML = card.word;
    (newCard.querySelector('.wordTranslate') as HTMLElement).innerHTML = card.wordTranslate;
    (newCard.querySelector('.transcription') as HTMLElement).innerHTML = card.transcription;
    (newCard.querySelector('.image') as HTMLImageElement).src = card.image;
    (newCard.querySelector('.textExample') as HTMLElement).innerHTML = card.textExample;
    (newCard.querySelector('.textExampleTranslate') as HTMLElement).innerHTML = card.textExampleTranslate;
    (newCard.querySelector('.textMeaning') as HTMLElement).innerHTML = card.textMeaning;
    (newCard.querySelector('.textMeaningTranslate') as HTMLElement).innerHTML = card.textMeaningTranslate;
    (newCard.querySelector('.audio') as HTMLAudioElement).src = card.audio;
    (newCard.querySelector('.audioExample') as HTMLAudioElement).src = card.audioExample;
    (newCard.querySelector('.audioMeaning') as HTMLAudioElement).src = card.audioMeaning;

    textbook?.appendChild(newCard);
}