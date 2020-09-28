import React, { Component } from 'react';
import { Collapse, Card } from 'antd';
import font1 from "../../../assets/fonts/font1/iconfont.json";
import { IconItem } from "../../../interface/home_interface";



const { Panel } = Collapse;

interface Props {

}

interface State {

}

export default class IconfontPage extends Component<Props, State> {
    render = () => {
        let { createCardList } = this;
        return (
            <div className="iconfont-page">
                <Collapse defaultActiveKey={['1']}>
                    <Panel header="淘票票官方图标库" key="1">
                        {createCardList(font1.glyphs)}
                    </Panel>
                    <Panel header="This is panel header 2" key="2">
                        <p>111</p>
                    </Panel>
                    <Panel header="This is panel header 3" key="3">
                        <p>111</p>
                    </Panel>
                </Collapse>
            </div>
        )
    }

    /**
    * @name 创建图标字体展示列表
    * @params { Array } 字体配置列表
    * @return { void }
    * @author liuguisheng
    * @version 2020-09-28 10:50:11 星期一
    */
    createCardList = ( list: IconItem[] ) => {
        return list.map( (el: IconItem) => {
            return (
                <Card hoverable key={el.icon_id}>
                    {el.name}
                </Card>
            )
        })
    }
}