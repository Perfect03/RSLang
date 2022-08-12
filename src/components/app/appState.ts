import { State } from '../../types/interfaces.js';

class AppState {
    check(): State {
        const list = <HTMLSelectElement>document.querySelector('.sort__list');
        list.addEventListener('click', (e: Event) => {
            (<HTMLOptionElement>e.target).selected = true;
        });
        return <State>list.value;
    }
}

export default AppState;
