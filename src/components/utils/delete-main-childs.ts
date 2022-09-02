export const deleteChildsOfMain = () => {
    const main = document.querySelector('main') as HTMLElement;
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild as HTMLElement);
    }
};
