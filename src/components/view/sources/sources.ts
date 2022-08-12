import './sources.css';
import { ISourcesData } from '../../../types/interfaces.js';

class Sources {
    draw(data: ISourcesData[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLTemplateElement>(<HTMLTemplateElement>sourceItemTemp).content.cloneNode(true);

            (<HTMLTemplateElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            (<HTMLTemplateElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (<HTMLTemplateElement>document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
