



import React, { Component } from "react";
import WaveComponent from "../../../components/base/wave_component";
import { StorageMethods } from "../../../utils/storage_utils";
import TodoList from "../../../components/business/todo_list";
import SallAction from "../../../components/business/sall_action";
import SallEchart from "../../../components/business/sall_echart";
import QuickEntry from "../../../components/business/quick_entry";

const WEEK_CONFIG = ["星期一", "星期二","星期三","星期四","星期五","星期六","星期日"];
const CHEERS = [
    '今天也是元气满满的一天呢！',
    '积一时之跬步，臻千里之遥程。',
    '每一发奋努力的背后，必有加倍的赏赐。',
    '不想认命，就去拼命。'
]



interface Props {

}

interface State {
    people: number
}

export default class IndexPage extends Component<Props, State> {
    constructor ( props: Props) {
        super(props)
        this.state = {
            people: 1
        }

    }

    private countTodayTips = () => {
        let name: string = new StorageMethods().get('username');
        let amOrPm: string = new Date().getHours() > 12 ? "下午好" : "上午好";
        let week: string = WEEK_CONFIG[new Date().getDay()];
        let time: string = new Date().toLocaleDateString();
        let tips: string = CHEERS[Math.floor((Math.random()*CHEERS.length))]



        return <div className="tips">
            <div className="first">{amOrPm}, {name}!</div>
            <div className="second">今天是{time}, {week}</div>
            <div className="third">{tips}</div>
        </div>
    }

    
    render = () => {
        return (
            <div className="index-page">
                <div className="top_message">
                    {this.countTodayTips()}
                    <WaveComponent background="#859CB5" >
                        <div className="content" title="通知">
                            <i className="iconfont icon-xiaoxizhongxin"></i>
                            <span className="number">14278</span>
                        </div>
                    
                    </WaveComponent>
                    <WaveComponent background="#E4D8C4">
                        <div className="content"  title="消息">
                            <i className="iconfont icon-pinglun1"></i>
                            <span className="number">87432</span>
                        </div>
                    </WaveComponent>
                    <WaveComponent background="#AAD0D3">
                        <div className="content"  title="交易额">
                            <i className="iconfont icon-yulebao"></i>
                            <span className="number">23865</span>
                        </div>
                    </WaveComponent>
                </div>
                <div>
                    <QuickEntry></QuickEntry>
                </div>
                <div className="main-body">
                    <div className="sall-action-body">
                        <SallAction></SallAction>
                    </div>
                    <div className="sall-echart">
                        <SallEchart></SallEchart>
                    </div>
                    <div className="todo-list-body">
                        <TodoList></TodoList>
                    </div>
                </div>
            </div>
        )
    }
}