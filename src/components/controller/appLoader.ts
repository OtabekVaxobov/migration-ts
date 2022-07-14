import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: 'f28c31683d984b9d932e237cf978cfe3', //https://nodenews.herokuapp.com/
        });
    }
}

export default AppLoader;
