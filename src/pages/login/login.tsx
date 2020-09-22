import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Form, Input, Button, message } from 'antd';
import { loginForm } from '../../interface/login_interface';
import { MESSAGE_CONFIG } from '../../config/message_config';

// prop接口
interface Prop {
    history: any
}

// state接口
interface State {
    loading: boolean,
    backgroundColor: string
}

// 表单布局
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

// 按钮布局
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};



@inject('homeStore')
@observer
export default class Login extends Component<Prop, State> {
    constructor(prop: Prop) {
        super(prop);
        this.state = {
            loading: false,
            backgroundColor: '#2124827'
        }
    }

    render = () => {
        setTimeout(() => {
            let backgroundColor: string = '#' + (Math.random() * 2333333).toFixed();
            this.setState({backgroundColor})
        },100)
        let { onFinish } = this;
        let { loading, backgroundColor } = this.state;
        return (
            <div id="login" 
                 style={{backgroundColor}}>
                <iframe className="github-star"
                        title="github star"
                        width="100px" height="20px"
                        frameBorder="0" scrolling="0"
                        src="https://ghbtns.com/github-btn.html?user=qisi007&repo=react-admin-plus&type=star&count=true" >
                </iframe>
                <h1>React-Admin-Plus</h1>
                <Form {...layout}
                    name="basic"
                    className="form"
                    size="large"
                    onFinish={onFinish}>

                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[{ required: true, message: MESSAGE_CONFIG.usernameEmpty }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: MESSAGE_CONFIG.passwordEmpty }]}>
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary"
                            htmlType="submit"
                            loading={loading}>登录</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }

    /**
    * @name 登录表单成功
    * @params { object } form 登录表单
    * @author liuguisheng
    * @version 2020-09-15 17:54:29 星期二
    */
    onFinish = (form: loginForm) => {
        // 消息提示
        message.success(MESSAGE_CONFIG.logoSuccess);
        // 跳转到home页
        this.props.history.push({ pathname: '/home', state: form })
    };
}