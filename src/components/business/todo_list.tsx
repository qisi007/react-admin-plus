import React, {Component} from 'react';
import { Button, Modal, Input, message } from 'antd';

interface Props {

}

interface State {
    list: any,
    visible: boolean,
    content: string,
    loading: boolean
}

const { TextArea } = Input;

export default class TodoList extends Component<Props, State> {
    constructor ( props: Props) {
        super( props )

        this.state = {
            list: {
                done: [
                    {
                        words: "项目框架搭建",
                        state: 'done'
                    }
                ],
                todo: [
                    {
                        words: "帮局长接孩子",
                        state: 'todo'
                    },
                    {
                        words: "帮局长洗车",
                        state: 'todo'
                    },
                    {
                        words: "高德地图组件库封装",
                        state: 'todo'
                    },
                    {
                        words: "调研nuxt框架",
                        state: 'todo'
                    }
                ]
            },
            visible: false,
            content: '',
            loading: false
        }
    }

    private clickItem = ( index: number ) => {
        let list = this.state.list;
        let item = list.todo[index];
        if ( item.state === 'done') return 
        list.todo[index].state = 'done';
        this.setState({
            list
        })

        setTimeout(() => {
            list.todo.splice(index, 1);
            list.done.push(item);
            this.setState({
                list
            })
        }, 1000)
    }

    private resetItem = ( index: number ) => {
        let list = this.state.list;
        let item = list.done[index];
        if ( item.state === 'todo') return 
        list.done[index].state = 'todo';
        this.setState({
            list
        })

        setTimeout(() => {
            list.done.splice(index, 1);
            list.todo.push(item);
            this.setState({
                list
            })
        }, 1000)

    }

    private handleOk = () => {
        let { list, content } = this.state;
        if ( !content ) {
            message.warning('请输入内容');
            return
        }
        let arr = list;
        arr.todo.push({ words: content, state: "todo" })
        this.setState({ list: arr, content: "" });
        this.closeModel();
    }

    private openModel = () => {
        this.setState({
            visible: true
        })
    }

    private closeModel = () => {
        this.setState({
            visible: false
        })
    }

    private textareaChange = ( e: any ) => {
        this.setState({
            content: e.target.value
        })
    }

    render = () => {
        let { list, visible,content } = this.state;
        let { clickItem, handleOk, closeModel, openModel, textareaChange, resetItem } = this;
        return (
            <div className="todo-list">
                {/* <h1 className="title">备忘录</h1> */}
                <h2 className="title_second">已完成:</h2>
                <ul className="todo-list_main">
                    {
                        list.done.map((el: any, index: number) => {
                            return <li key={index} className="todo-list_main_item item_done">
                                        <i className="iconfont icon-refresh" onClick={() => resetItem(index)}></i>
                                        <span>{el.words}</span>
                                   </li>
                        })
                    }
                    <li>
                        {list.done.length === 0 && <span>无内容</span>}
                    </li>
                </ul>
                <h2 className="title_second">进行中:</h2>
                <ul className="todo-list_main">
                    {
                        list.todo.map((el: any, index: number) => {
                            return  <li className="todo-list_main_item" key={index}>
                                        <span className="choose-button" onClick={() => clickItem(index)}>
                                            {el.state==='done' && <i className="iconfont icon-Selected"></i>}
                                        </span>
                                        <span className="words">{el.words}</span>
                                    </li>
                        })
                    }
                    <li className="todo-list_main_item">
                        {list.todo.length === 0 && <span>无内容</span>}
                    </li>
                    <li className="add-button">
                        <Button onClick={openModel}>添加备忘录</Button>
                    </li>
                </ul>
                <Modal
                    title="添加备忘录"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={closeModel}
                    >
                    <TextArea placeholder="请输入内容" 
                              value={content}
                              autoSize={{minRows: 4, maxRows: 10}}
                              allowClear
                              onChange={textareaChange} />
                </Modal>

            </div>
        )
    }
}