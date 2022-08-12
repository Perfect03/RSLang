import { Callback, ISources, INews } from '../../types/interfaces.js';

class Loader {
    private baseLink: string;
    private options: { apiKey: string };
    constructor(baseLink: string, options: { apiKey: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: { sources?: string } },
        callback: Callback<INews | ISources> = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response): Response | void {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: { sources?: string }, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key): void => {
            url += `${key}=${urlOptions[<keyof { sources: string; apiKey: string }>key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: Callback<INews | ISources>, options: { sources?: string }) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => (<Response>res).json())
            .then((data: INews | ISources) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
