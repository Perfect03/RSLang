import { baseUrl } from '../../../api/api';
import { dataStorage } from '../../utils/storage';

export const createStatsPopUp = () => {
    dataStorage.audiochallenge__round__right__answers = [
        {
            id: '5e9f5ee35eb9e72bc21af6ab',
            group: 0,
            page: 26,
            word: 'deal',
            image: 'files/27_0524.jpg',
            audio: 'files/27_0524.mp3',
            audioMeaning: 'files/27_0524_meaning.mp3',
            audioExample: 'files/27_0524_example.mp3',
            textMeaning: 'A <i>deal</i> is an agreement that you have with another person.',
            textExample: 'I made a <b>deal</b> with the other company to give us some money.',
            transcription: '[diːl]',
            textExampleTranslate: 'Я заключил сделку с другой компанией, чтобы дать нам немного денег',
            textMeaningTranslate: 'Сделка - это соглашение, которое вы заключили с другим человеком',
            wordTranslate: 'сделка',
        },
        {
            id: '5e9f5ee35eb9e72bc21af6a9',
            group: 0,
            page: 26,
            word: 'bite',
            image: 'files/27_0522.jpg',
            audio: 'files/27_0522.mp3',
            audioMeaning: 'files/27_0522_meaning.mp3',
            audioExample: 'files/27_0522_example.mp3',
            textMeaning: '<i>Bite</i> is the act of using your teeth to cut and tear into something.',
            textExample: 'The boy took a big <b>bite</b> of his hamburger.',
            transcription: '[bait]',
            textExampleTranslate: 'Мальчик откусил гамбургер',
            textMeaningTranslate: 'Укус - это использование ваших зубов, чтобы что-то порезать',
            wordTranslate: 'укусить',
        },
        {
            id: '5e9f5ee35eb9e72bc21af6b7',
            group: 0,
            page: 26,
            word: 'rather',
            image: 'files/27_0536.jpg',
            audio: 'files/27_0536.mp3',
            audioMeaning: 'files/27_0536_meaning.mp3',
            audioExample: 'files/27_0536_example.mp3',
            textMeaning: '<i>Rather</i> is used when you want to do one thing but not the other.',
            textExample: 'I would <b>rather</b> have the red one than the blue one.',
            transcription: '[rǽðəːr]',
            textExampleTranslate: 'Я бы предпочел красный, чем синий',
            textMeaningTranslate: 'Скорее используется, когда вы хотите сделать одно, а не другое',
            wordTranslate: 'скорее',
        },
    ];
    dataStorage.audiochallenge__round__wrong__answers = [
        {
            id: '5e9f5ee35eb9e72bc21af6b4',
            group: 0,
            page: 26,
            word: 'journey',
            image: 'files/27_0533.jpg',
            audio: 'files/27_0533.mp3',
            audioMeaning: 'files/27_0533_meaning.mp3',
            audioExample: 'files/27_0533_example.mp3',
            textMeaning: 'A <i>journey</i> is a long trip.',
            textExample: 'I went on a <b>journey</b> across the country with my parents.',
            transcription: '[dʒə́ːrni]',
            textExampleTranslate: 'Я отправился в путешествие по стране с родителями',
            textMeaningTranslate: 'Путешествие - это долгое путешествие',
            wordTranslate: 'поездка',
        },
        {
            id: '5e9f5ee35eb9e72bc21af6b2',
            group: 0,
            page: 26,
            word: 'hunger',
            image: 'files/27_0531.jpg',
            audio: 'files/27_0531.mp3',
            audioMeaning: 'files/27_0531_meaning.mp3',
            audioExample: 'files/27_0531_example.mp3',
            textMeaning: '<i>Hunger</i> is the feeling that you get when you need to eat.',
            textExample: 'After playing all day long, he was filled with <b>hunger</b>.',
            transcription: '[hʌ́ŋgər]',
            textExampleTranslate: 'После целого дня игры он был полон голода',
            textMeaningTranslate: 'Голод - это чувство, которое ты испытываешь, когда нужно есть',
            wordTranslate: 'голод',
        },
        {
            id: '5e9f5ee35eb9e72bc21af6b1',
            group: 0,
            page: 26,
            word: 'gift',
            image: 'files/27_0530.jpg',
            audio: 'files/27_0530.mp3',
            audioMeaning: 'files/27_0530_meaning.mp3',
            audioExample: 'files/27_0530_example.mp3',
            textMeaning: 'A <i>gift</i> is something you give someone.',
            textExample: 'Dave received many <b>gifts</b> for Christmas.',
            transcription: '[gift]',
            textExampleTranslate: 'Дейв получил много подарков на Рождество',
            textMeaningTranslate: 'Подарок - это то, что ты даришь кому-то',
            wordTranslate: 'подарок',
        },
        {
            id: '5e9f5ee35eb9e72bc21af6b0',
            group: 0,
            page: 26,
            word: 'figure out',
            image: 'files/27_0529.jpg',
            audio: 'files/27_0529.mp3',
            audioMeaning: 'files/27_0529_meaning.mp3',
            audioExample: 'files/27_0529_example.mp3',
            textMeaning: 'When you <i>figure</i> something <i>out</i>, you come to understand it and find an answer.',
            textExample: 'I couldn’t <b>figure out</b> what he wanted me to do.',
            transcription: '[fígjəraut]',
            textExampleTranslate: 'Я не мог понять, что он от меня хотел',
            textMeaningTranslate: 'Когда вы что-то понимаете  вне </ i>, вы понимаете это и находите ответ',
            wordTranslate: 'выяснять',
        },
        {
            id: '5e9f5ee35eb9e72bc21af6af',
            group: 0,
            page: 26,
            word: 'false',
            image: 'files/27_0528.jpg',
            audio: 'files/27_0528.mp3',
            audioMeaning: 'files/27_0528_meaning.mp3',
            audioExample: 'files/27_0528_example.mp3',
            textMeaning: 'If something is <i>false</i>, it is not correct.',
            textExample: 'If you think the answer is <b>false</b>, press the red button.',
            transcription: '[fɔːls]',
            textExampleTranslate: 'Если вы думаете, что ответ ложный, нажмите красную кнопку',
            textMeaningTranslate: 'Если что-то является ложным, это не правильно',
            wordTranslate: 'ложный',
        },
        {
            id: '5e9f5ee35eb9e72bc21af6aa',
            group: 0,
            page: 26,
            word: 'coast',
            image: 'files/27_0523.jpg',
            audio: 'files/27_0523.mp3',
            audioMeaning: 'files/27_0523_meaning.mp3',
            audioExample: 'files/27_0523_example.mp3',
            textMeaning: 'The <i>coast</i> is the land by an ocean.',
            textExample: 'I stayed on the southern <b>coast</b> of Australia.',
            transcription: '[koust]',
            textExampleTranslate: 'Я остался на южном побережье Австралии',
            textMeaningTranslate: 'Берег - это земля у океана',
            wordTranslate: 'побережье',
        },
        {
            id: '5e9f5ee35eb9e72bc21af6b3',
            group: 0,
            page: 26,
            word: 'imagine',
            image: 'files/27_0532.jpg',
            audio: 'files/27_0532.mp3',
            audioMeaning: 'files/27_0532_meaning.mp3',
            audioExample: 'files/27_0532_example.mp3',
            textMeaning: 'To <i>imagine</i> something is to think of it in your mind.',
            textExample: 'Sally <b>imagined</b> herself winning lots of money.',
            transcription: '[imǽdʒin]',
            textExampleTranslate: 'Салли представила, что выигрывает много денег',
            textMeaningTranslate: 'Вообразить что-то значит думать об этом в своем уме',
            wordTranslate: 'представить',
        },
        {
            id: '5e9f5ee35eb9e72bc21af6b5',
            group: 0,
            page: 26,
            word: 'puzzle',
            image: 'files/27_0534.jpg',
            audio: 'files/27_0534.mp3',
            audioMeaning: 'files/27_0534_meaning.mp3',
            audioExample: 'files/27_0534_example.mp3',
            textMeaning: 'A <i>puzzle</i> is something that is hard to understand.',
            textExample: 'The question was a <b>puzzle</b> to him.',
            transcription: '[pʌ́zl]',
            textExampleTranslate: 'Вопрос был для него загадкой',
            textMeaningTranslate: 'Головоломка - это то, что трудно понять',
            wordTranslate: 'головоломка',
        },
    ];

    const container = document.querySelector('.audiochallenge_game_container') as HTMLDivElement;
    const stats_container = document.createElement('div');
    const stats_header = document.createElement('div');
    const correct_answers_container = document.createElement('div');
    const incorrect_answers_container = document.createElement('div');
    const correct_answers_title = document.createElement('div');
    const incorrect_answers_title = document.createElement('div');
    const correct_answers = document.createElement('div');
    const incorrect_answers = document.createElement('div');

    stats_container.classList.add('stats_container');
    stats_header.classList.add('stats_header');
    correct_answers_container.classList.add('correct_answers_container');
    correct_answers.classList.add('correct_answers');
    incorrect_answers_container.classList.add('incorrect_answers_container');
    incorrect_answers.classList.add('incorrect_answers');

    stats_header.innerText = `Ваш результат: ${dataStorage.audiochallenge__round__right__answers.length}/10`;
    correct_answers_title.innerText = 'Верные ответы';
    incorrect_answers_title.innerText = 'Неверные ответы';

    container.appendChild(stats_container);
    stats_container.appendChild(stats_header);
    stats_container.appendChild(correct_answers_container);
    stats_container.appendChild(incorrect_answers_container);
    correct_answers_container.appendChild(correct_answers_title);
    correct_answers_container.appendChild(correct_answers);
    incorrect_answers_container.appendChild(incorrect_answers_title);
    incorrect_answers_container.appendChild(incorrect_answers);

    dataStorage.audiochallenge__round__right__answers.forEach((el) => {
        const answer_div = document.createElement('div');
        const audio_div = document.createElement('div');
        const audio = document.createElement('audio');
        const audio_btn = document.createElement('button');
        const eng_word = document.createElement('div');
        const ru_word = document.createElement('div');

        answer_div.classList.add('answer_div');
        audio_div.classList.add('audio_div');
        eng_word.classList.add('eng_word');
        ru_word.classList.add('ru_word');
        audio_btn.classList.add('audio_btn');

        eng_word.innerText = `- ${el.word}`;
        ru_word.innerText = `- ${el.wordTranslate}`;
        audio.src = `${baseUrl}${el.audio}`;

        correct_answers.appendChild(answer_div);
        answer_div.appendChild(audio_div);
        answer_div.appendChild(eng_word);
        answer_div.appendChild(ru_word);
        audio_div.appendChild(audio);
        audio_div.appendChild(audio_btn);
    });

    dataStorage.audiochallenge__round__wrong__answers.forEach((el) => {
        const answer_div = document.createElement('div');
        const audio_div = document.createElement('div');
        const audio = document.createElement('audio');
        const audio_btn = document.createElement('button');
        const eng_word = document.createElement('div');
        const ru_word = document.createElement('div');

        answer_div.classList.add('answer_div');
        audio_div.classList.add('audio_div');
        eng_word.classList.add('eng_word');
        ru_word.classList.add('ru_word');
        audio_btn.classList.add('audio_btn');

        eng_word.innerText = `- ${el.word}`;
        ru_word.innerText = `- ${el.wordTranslate}`;
        audio.src = `${baseUrl}${el.audio}`;

        incorrect_answers.appendChild(answer_div);
        answer_div.appendChild(audio_div);
        answer_div.appendChild(eng_word);
        answer_div.appendChild(ru_word);
        audio_div.appendChild(audio);
        audio_div.appendChild(audio_btn);
    });

    console.log(dataStorage);
};
