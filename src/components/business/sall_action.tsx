import React, {Component} from 'react';
import { Tag } from 'antd';

interface Props {

}

interface State {

}


const LIST = [
    {
       tag: "出售",
       content: "恭喜福乐园店张三喜签一单!"
    },
    {
        tag: "出售",
        content: "恭喜福乐园店李四四喜签一单!"
    },
    {
        tag: "出租",
        content: "恭喜福乐园店王五签下租赁一单!"
    },
    {
        tag: "新房",
        content: "恭喜福乐园店王五签下新房一单!"
    },
    {
        tag: "出售",
        content: "恭喜福乐园店张三喜签一单!"
     },
     {
         tag: "出售",
         content: "恭喜福乐园店李四四喜签一单!"
     },
     {
         tag: "出租",
         content: "恭喜福乐园店王五签下租赁一单!"
     },
     {
         tag: "新房",
         content: "恭喜福乐园店王五签下新房一单!"
     },
     {
        tag: "出售",
        content: "恭喜福乐园店张三喜签一单!"
     },
     {
         tag: "出售",
         content: "恭喜福乐园店李四四喜签一单!"
     },
     {
         tag: "出租",
         content: "恭喜福乐园店王五签下租赁一单!"
     },
     {
         tag: "新房",
         content: "恭喜福乐园店王五签下新房一单!"
     },
     {
        tag: "出售",
        content: "恭喜福乐园店李四四喜签一单!"
    },
    {
        tag: "出租",
        content: "恭喜福乐园店王五签下租赁一单!"
    },
    {
        tag: "新房",
        content: "恭喜福乐园店王五签下新房一单!"
    },
    {
        tag: "出售",
        content: "恭喜福乐园店李四四喜签一单!"
    },
    {
        tag: "出租",
        content: "恭喜福乐园店王五签下租赁一单!"
    },
    {
        tag: "新房",
        content: "恭喜福乐园店王五签下新房一单!"
    },
    
]

let BIG_LIST = [...LIST, ...LIST,...LIST,...LIST,...LIST,...LIST]

const COLOR: any = {
    "出售": "magenta",
    "出租": "volcano",
    "新房": "geekblue"
}

export default class SallAction extends Component<Props, State> {
    componentDidMount = () =>{
        let listDom:any = document.querySelector('.sall-action_list');
        let height = listDom.offsetHeight - 320
        let step = 0;
        setInterval( () => {
            step += 40;
            listDom.style.marginTop = -step + 'px';
            if ( step >  height) {
                step = 0
            }
        }, 3000)
    }

    render = () => {
        return (
            <div className="sall-action">
                <div className="title">成交动态:</div>
                <div className="sall-action_content">
                    <ul className="sall-action_list">
                        {
                            BIG_LIST.map( (el: any, index: number) => {
                                return <li className="sall-action_list_item" key={index}>
                                            <Tag color={COLOR[el.tag]}>{el.tag}</Tag>
                                            <span>{el.content}</span>
                                        </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}