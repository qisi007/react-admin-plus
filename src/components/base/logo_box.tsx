/**
* @name logo组件
* @author liuguisheng
* @version 2020-09-16 08:48:54 星期三
*/

import React, { Component } from "react";

interface Props {
    url: string
    title: string
    color: string
    size: string
    back: string
}

interface State {

}

export default class LogoBox extends Component<Props, State> {
    render () {
        let { url, title, color, size, back } = this.props;
        // 样式计算
        let transform: string = size === 'large' ? 'scale(1)' : 'scale(0.8)'
        return (
            <a href="http://www.liuguisheng.vip/" 
               target="_blank" 
               rel="noopener noreferrer">
                <div id="logo-box" 
                 style={{transform, backgroundColor: back}}>
                <img src={url} alt="logo"/>
                {
                    size === 'large' && <span style={{color}}>{title}</span>
                }
            </div>
            </a>
        )
    }
}