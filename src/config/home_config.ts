/**
* @name home配置文件
* @author liuguisheng
* @version 2020-09-14 10:16:06 星期一
*/


import { SettingItem } from "../interface/home_interface";
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
        title: '黑暗模式:',
        checkedChildren: '开启',
        unCheckedChildren: '关闭',
        event: 'changeTheme'
    },
    {
        title: '导航排列:',
        checkedChildren: '垂直',
        unCheckedChildren: '内嵌',
        event: 'changeMode'
    },
    {
        title: '导航模式:',
        checkedChildren: '展开',
        unCheckedChildren: '收起',
        event: 'toggleCollapsed'
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
export const initialPanes: any[] = [
    {title: "主页", content: "主页", key: "0"}
];