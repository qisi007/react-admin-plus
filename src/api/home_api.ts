/**
* @name home页接口请求 
* @author liuguisheng
* @version 2020-09-14 10:47:07 星期一
*/
import { NAV_LIST_MOCK } from "../config/nav_mock";

export const getFirstNavList = () => {
    return {
        "result": NAV_LIST_MOCK,
        "statusCode": 1000,
        "message": "OK"
    }
}

