import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '0290386a7eda4300bdb1b00e71b87454',
        });
    }
}

export default AppLoader;
