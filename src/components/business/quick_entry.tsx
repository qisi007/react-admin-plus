import React, { Component } from 'react';
 
interface Props {
 
}

interface State {
 
}

export default class QuickEntry extends Component<Props, State> {
    render() {
        return (
                <div className="quick-entry">
                    <h1>快速访问</h1>
                    <ul>
                        <li>
                            <i className="iconfont icon-personal"></i>
                            <div className="words">入口一</div>
                        </li>
                        <li>
                            <i className="iconfont icon-zixun"></i>
                            <div className="words">入口二</div>
                        </li>
                        <li>
                            <i className="iconfont icon-yuangongmulu"></i>
                            <div className="words">入口三</div>
                        </li>
                        <li>
                            <i className="iconfont icon-ziyuan"></i>
                            <div className="words">入口四</div>
                        </li>
                        <li>
                            <i className="iconfont icon-hangzheng"></i>
                            <div className="words">入口五</div>
                        </li>
                        <li>
                            <i className="iconfont icon-gonggao"></i>
                            <div className="words">入口六</div>
                        </li>
                        <li>
                            <i className="iconfont icon-moban"></i>
                            <div className="words">入口七</div>
                        </li>
                        
                    </ul>
                </div>
            )
        }

}
