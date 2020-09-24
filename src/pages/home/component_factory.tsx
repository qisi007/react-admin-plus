/**
* @name 组件工厂
* @param { Object } config 组件配置
* @returns { String } 组件
* @author liuguisheng
* @version 2020-09-20 09:56:24 星期天
*/
import React from "react";
import { TabItem } from "../../interface/home_interface";


import framePage from "./child/frame_page";
import indexPage from "./child/index_page";
import antvPage from "./child/antv_page";

// 页面注册
const components:{[prop: string]: any} = {
    'index': indexPage,
    'frame': framePage,
    'antv': antvPage
}

export const componentFactory = ( config: TabItem ) => {
    let { title } = config;
    let flag: string = title==='主页' ? 'index' : 'frame';
    if ( title === '图表') flag = 'antv';
    const Component = components[flag];
    return React.createElement(Component, {prop: config})
}    