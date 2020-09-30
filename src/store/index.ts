import HomeStore from './home';
import LoginStore from './login';
import GlobalConfigStore from './global_config';

let homeStore = new HomeStore();
let loginStore = new LoginStore();
let globalConfigStore = new GlobalConfigStore();


const stores = {
    homeStore,
    loginStore,
    globalConfigStore
}

export default stores;