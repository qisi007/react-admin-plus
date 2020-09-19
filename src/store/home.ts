import { observable, action } from "mobx";

class HomeStore {
    @observable
    home = 0
    str = "首页";

    @action
    add () {
        this.home +=1;
    }

    @action
    less () {
        this.home -=1;
    }

}

export default HomeStore;