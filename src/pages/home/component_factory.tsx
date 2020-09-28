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
import iconfontPage from "./child/iconfont.page";

// 页面注册
const components:{[prop: string]: any} = {
    '主页': indexPage,
    '图表': antvPage,
    '字体图标': iconfontPage
}

export const componentFactory = ( config: TabItem ) => {
    let { title } = config;
    const Component = components[title];
    if( Component === undefined ) return React.createElement(framePage, {prop: config})
    return React.createElement(Component, {prop: config})
}    