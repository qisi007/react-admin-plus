import { observable, action } from "mobx";

class GlobalConfigStore {
    @observable
    globalTheme: string = 'light'

    @action
    setGlobalTheme () {
        this.globalTheme = 'dark';
    }

}

export default GlobalConfigStore;