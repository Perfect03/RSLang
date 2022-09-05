import { storageUserAccInfo } from './storage';

export const deleteChildsOfMain = () => {
    const main = document.querySelector('main') as HTMLElement;
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild as HTMLElement);
    }
    console.log(storageUserAccInfo);
};
