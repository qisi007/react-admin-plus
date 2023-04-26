/**
* @name home配置文件
* @author liuguisheng
* @version 2020-09-14 10:16:06 星期一
*/


import { SettingItem } from "../interface/home_interface";



// 设置组件配置
export const SETTING_ITEM_CONFIG: SettingItem[] = [
    // {
    //     title: '全局黑暗模式:',
    //     checkedChildren: '开启',
    //     unCheckedChildren: '关闭',
    //     event: 'changeTheme',
    //     defaultValue: false
    // },
    {
        title: '深色菜单:',
        checkedChildren: '开启',
        unCheckedChildren: '关闭',
        event: 'onlyChangeTheme',
        defaultValue: true
    },
    {
        title: '导航排列方式:',
        checkedChildren: '垂直',
        unCheckedChildren: '内嵌',
        event: 'changeMode',
        defaultValue: false
    },
    {
        title: '导航是否展开:',
        checkedChildren: '是',
        unCheckedChildren: '否',
        event: 'toggleCollapsed',
        defaultValue: false
    }
]