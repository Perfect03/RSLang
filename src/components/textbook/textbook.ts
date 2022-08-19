
export const createTextbook = () => {
    const textbook = document.getElementById('textbook');
    const header = document.createElement('header');
    const header_left = document.createElement('div');
    header_left.classList.add('header_left');
    const header_right = document.createElement('div');
    header_right.classList.add('header_right');
    const h1 = document.createElement('h1');
    h1.textContent = 'TextBook';

    header_left.append(h1);
    header.append(header_left);
    header.append(header_right);
    
    const pagination = [] as HTMLElement[];
    for (let i=0; i<2; i++) {
        pagination[i] = createPagination();
    }
    const textbook_words = document.createElement('div');
    textbook_words.classList.add('textbook_words');
    const textbook_games = createGames();

    const main = document.createElement('main');
    main.append(textbook_games);
    main.append(pagination[0]);
    main.append(textbook_words);
    main.append(pagination[1]);

    
    const cards = document.createElement('div');
    const groups = createGroups();
    cards.classList.add('cards');

    textbook_words.append(cards);
    textbook_words.append(groups);

    (textbook as HTMLElement).append(header);
    (textbook as HTMLElement).append(main);
}

const createPagination = () => {
    const pagination = document.createElement('div');
    pagination.classList.add('pagination');

    const pagination_ul = document.createElement('ul');
        const pagination_li = [] as HTMLElement[];
        const pagination_a = [] as HTMLElement[];
        for(let j=0; j<9; j++)
        {
            pagination_li[j] = document.createElement('li');
            pagination_a[j] = document.createElement('a');
            pagination_li[j].append(pagination_a[j]);
            pagination_ul.append(pagination_li[j]);
        }
        pagination_a[0].textContent = '❮';
        pagination_a[1].textContent = '1';
        pagination_a[2].textContent = '2';
        pagination_a[3].textContent = '3';
        pagination_a[4].textContent = '4';
        pagination_a[5].textContent = '5';
        pagination_a[6].textContent = '...';
        pagination_a[7].textContent = '30';
        pagination_a[8].textContent = '❯';
        pagination.append(pagination_ul);
    return pagination;
}

const createGroups = () => {
    const groups = document.createElement('div');
    groups.classList.add('groups');

    const groups_title = document.createElement('h6');
    groups_title.classList.add('groups_title');
    groups_title.textContent = 'Groups';
    const groups_buttons = document.createElement('div');
    groups_buttons.classList.add('groups_buttons');
    groups.append(groups_title);
    groups.append(groups_buttons);

    const button = [] as HTMLElement[];
    for(let i=0; i<6; i++)
    {
        button[i] = document.createElement('button');
        button[i].textContent = `${i+1}`;
        groups_buttons.append(button[i]);
    }
    button[1].classList.add('active');

    return groups;
}

const createGames = () => {
    const textbook_games = document.createElement('div');
    textbook_games.classList.add('textbook_games');
    textbook_games.classList.add('game');

    const a_link1 = document.createElement('a');
    const a_link2 = document.createElement('a');
    textbook_games.append(a_link1);
    textbook_games.append(a_link2);
    const textbook_game1 = document.createElement('div');
    const textbook_game2 = document.createElement('div');
    a_link1.append(textbook_game1);
    a_link2.append(textbook_game2);
    const game_img1 = document.createElement('img');
    const game_img2 = document.createElement('img');
    const game_title1 = document.createElement('span');
    const game_title2 = document.createElement('span');
    textbook_game1.append(game_img1);
    textbook_game1.append(game_title1);
    textbook_game2.append(game_img2);
    textbook_game2.append(game_title2);
    textbook_game1.classList.add('textbook_game');
    textbook_game2.classList.add('textbook_game');
    game_title1.textContent = 'Savannah';
    game_title2.textContent = 'Sprint';
    game_img1.setAttribute('src', './assets/images/savannah.png');
    game_img2.setAttribute('src', './assets/images/sprint.png');
    game_img1.setAttribute('alt', 'img');
    game_img2.setAttribute('alt', 'img');

    return textbook_games;
}