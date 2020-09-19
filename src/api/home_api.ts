/**
* @name home页接口请求 
* @author liuguisheng
* @version 2020-09-14 10:47:07 星期一
*/
import { navListMock } from "../config/nav_mock";

export const getFirstNavList = () => {
    return {
        "result": navListMock,
        "statusCode": 1000,
        "message": "OK"
    }
}

