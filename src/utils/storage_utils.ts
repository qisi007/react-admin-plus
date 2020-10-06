
/**
* @name storage存储数据工具
* @author liuguisheng
* @version 2020-10-06 18:31:17 星期二
*/

import { MESSAGE_CONFIG } from "../config/message_config";


export class StorageMethods {
    set ( key: string, value: string) {
        try {
            localStorage.setItem(key, value);
        } catch {
            console.error(MESSAGE_CONFIG.setStorageError);
        }
    }

    get ( key: string ): string {
        try {
            return localStorage.getItem(key);
        } catch {
            console.error(MESSAGE_CONFIG.getStorageError);
        }
    }

    remove ( key: string ) {
        try {
            return localStorage.removeItem(key);
        } catch {
            console.error(MESSAGE_CONFIG.removeStorageError);
        }
    }
}