import './news.css';
import { INewsData } from '../../../types/interfaces.js';

class News {
    draw(data: INewsData[]) {
        if (data) {
            const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

            const fragment = document.createDocumentFragment();
            const newsItemTemp = document.querySelector('#newsItemTemp');

            news.forEach((item, idx) => {
                const newsClone: HTMLTemplateElement = <HTMLTemplateElement>(
                    (<HTMLTemplateElement>newsItemTemp).content.cloneNode(true)
                );

                if (idx % 2) (<HTMLTemplateElement>newsClone.querySelector('.news__item')).classList.add('alt');

                (<HTMLTemplateElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
                    item.urlToImage || 'img/news_placeholder.jpg'
                })`;
                (<HTMLTemplateElement>newsClone.querySelector('.news__meta-author')).textContent =
                    item.author || item.source.name;
                (<HTMLTemplateElement>newsClone.querySelector('.news__meta-date')).textContent = item.publishedAt
                    .slice(0, 10)
                    .split('-')
                    .reverse()
                    .join('-');

                (<HTMLTemplateElement>newsClone.querySelector('.news__description-title')).textContent = item.title;
                (<HTMLTemplateElement>newsClone.querySelector('.news__description-source')).textContent =
                    item.source.name;
                (<HTMLTemplateElement>newsClone.querySelector('.news__description-content')).textContent =
                    item.description;
                (<HTMLTemplateElement>newsClone.querySelector('.news__read-more a')).setAttribute('href', item.url);

                fragment.append(newsClone);
            });

            (<HTMLTemplateElement>document.querySelector('.news')).innerHTML = '';
            (<HTMLTemplateElement>document.querySelector('.news')).appendChild(fragment);
        }
    }
}

export default News;
