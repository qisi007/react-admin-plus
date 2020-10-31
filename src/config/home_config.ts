/**
* @name home配置文件
* @author liuguisheng
* @version 2020-09-14 10:16:06 星期一
*/


import { SettingItem, NavItem } from "../interface/home_interface";
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined
} from '@ant-design/icons';


// 设置组件配置
export const SETTING_ITEM_CONFIG: SettingItem[] = [
    {
        title: '全局黑暗模式:',
        checkedChildren: '开启',
        unCheckedChildren: '关闭',
        event: 'changeTheme',
        defaultValue: false
    },
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

// icon配置文件
export const  ICON_LIST_CONFIG =  {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined
}

// 标签页默认配置
export const INITIAL_PANES: any[] = [
    {title: "主页", content: "主页", key: "0"}
];

// 导航配置
export const MENU_LIST: NavItem[] = [
    {
        name: '主页',
        key: 'index'
    },
    {
        name: '字体图标',
        key: 'iconfont'
    },
    {
        name: '图表',
        key: 'echarts'
    },
    {
        name: '表格',
        key: 'table'
    }
]