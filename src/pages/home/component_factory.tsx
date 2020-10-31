/**
* @name 页面渲染简单工厂
* @description 所有涉及到和导航对应的自定义的页面，统一在这里注册，其他默认iframe页面，需要在统一注册中心注册路由信息
* @param { Object } config 组件配置
* @returns { String } 组件
* @author liuguisheng
* @version 2020-09-20 09:56:24 星期天
*/
import React from "react";
import { TabItem } from "../../interface/home_interface";


import framePage from "./child/frame_page";
import indexPage from "./child/index_page";
import echartsPage from "./child/echarts_page";
import iconfontPage from "./child/iconfont.page";
import tablePage from "./child/table_page";
import skeleton from "./child/skeleton_page";

// 页面注册(目前是按照标题对应页面，后期按照页面的唯一标识对应)
const components:{[prop: string]: any} = {
    '主页': indexPage,
    '图表': echartsPage,
    '字体图标': iconfontPage,
    '表格': tablePage,
    '骨架屏': skeleton
}

// 渲染页面
export const componentFactory = ( config: TabItem ) => {
    let { title } = config;
    const Component = components[title];
    if( Component === undefined ) return React.createElement(framePage, {prop: config})
    return React.createElement(Component, {prop: config})
}    