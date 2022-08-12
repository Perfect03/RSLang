export interface ISources{
    status?: string;
    sources?: ISourcesData[];
}

export interface ISourcesData{
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

export interface INews{
status?: string,
totalResults?: number,
articles?: INewsData[];
}

export interface INewsData{
  author: string;
  content: string;
  description: string;
  url: string;
  publishedAt: string;
  title: string;
  urlToImage: string;
  source: { id: string; name: string};
}

export type State = 'author' | 'title' | 'publishedAt';

export type Callback<T> = { (data: T): void };
