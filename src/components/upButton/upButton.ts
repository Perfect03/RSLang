import './upButton.css';

export const createUpButton = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const up_button = document.createElement('span');
    up_button.classList.add('up_button');
    body.append(up_button);

    const up_button_img = document.createElement('img');
    up_button_img.classList.add('up_button_img');
    up_button_img.src = 'components/upButton/upButton-assets/success.png';
    up_button.appendChild(up_button_img);

    const header_height = (document.querySelector('header') as HTMLElement).offsetHeight;
    const upButton = document.querySelector('.up_button');
    window.addEventListener('scroll', showUpButton);

    function showUpButton() {
        if (window.scrollY > header_height) {
            upButton?.classList.add('is_visible');
        } else {
            upButton?.classList.remove('is_visible');
        }
    }

    upButton?.addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
};
