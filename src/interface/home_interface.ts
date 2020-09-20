/**
* @name home页接口
* @author liuguisheng
* @version 2020-09-14 10:17:15 星期一
*/

// 设置项接口
export interface SettingItem {
    title: string,
    checkedChildren: string,
    unCheckedChildren: string,
    event: string
}

// 导航接口
export interface NavItem {
    [ prop:string]: any
}

// 标签页接口
export interface TabItem {
    title: string,
    content: string,
    key: string
}
