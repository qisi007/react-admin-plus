/**
* @name 组件工厂
* @param { Object } config 组件配置
* @returns { String } 组件
* @author liuguisheng
* @version 2020-09-20 09:56:24 星期天
*/
import React from "react";
import { TabItem } from "../../interface/home_interface";


import { framePage } from "./frame_page";
import indexPage from "./index_page";

// 组件注册
const components:{[prop: string]: any} = {
    'index': indexPage,
    'frame': framePage
}

export const componentFactory = ( config: TabItem) => {
    let { key } = config;
    let flag: string = key==='0' ? 'index' : 'frame';
    const Component = components[flag];
    return React.createElement(Component, {prop: config})
}