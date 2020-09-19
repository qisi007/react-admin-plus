/**
* @name home页业务
* @author liuguisheng
* @version 2020-09-14 11:02:12 星期一
*/

import { getFirstNavList } from "../api/home_api"

export class HomeService {
    /**
    * @name 获取一级导航
    * @return { Array } 一级导航
    * @author liuguisheng
    * @version 2020-09-14 11:09:55 星期一
    */
    static getFirstNameList = (): any[] => {
        return  getFirstNavList().result;
    }
}