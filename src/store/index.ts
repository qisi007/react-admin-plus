import HomeStore from './home';
import LoginStore from './login';

let homeStore = new HomeStore();
let loginStore = new LoginStore();


const stores = {
    homeStore,
    loginStore
}

export default stores;