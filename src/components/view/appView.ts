import News from './news/news';
import Sources from './sources/sources';
import { INews, INewsData, ISources } from '../../types/interfaces.js';
import AppState from '../app/appState';

export class AppView {
    public news: News;
    public sources: Sources;
    public state: AppState;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
        this.state = new AppState();
    }

    drawNews(data: INews) {
        const p = this.state.check(); // проверяем, по какому параметру нужно сортировать

        // вспомогательная функцмя для сортировки массива объектов
        function SortArray(x: INewsData, y: INewsData) {
            if (x[`${p}`] < y[`${p}`]) {
                return -1;
            }
            if (x[`${p}`] > y[`${p}`]) {
                return 1;
            }
            return 0;
        }

        let values = data.articles ? data.articles : [];

        values = values.sort(SortArray);

        this.news.draw(values);
    }

    drawSources(data: ISources) {
        const values = data.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
