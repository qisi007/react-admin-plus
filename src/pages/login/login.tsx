import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Form, Input, Button, message } from 'antd';
import { loginForm } from '../../interface/login_interface';
import { MESSAGE_CONFIG } from '../../config/message_config';
import { StorageMethods } from '../../utils/storage_utils';

// prop接口
interface Prop {
    history: any
}

// state接口
interface State {
    loading: boolean
}


@inject('homeStore')
@observer
export default class Login extends Component<Prop, State> {
    constructor(prop: Prop) {
        super(prop);
        this.state = {
            loading: false
        }
    }

    render = () => {
        let { onFinish } = this;
        let { loading } = this.state;
        return (
            <div id="login">
                <iframe className="github-star"
                        title="github star"
                        width="100px" height="20px"
                        frameBorder="0" scrolling="0"
                        src="https://img.shields.io/github/stars/qisi007/react-admin-plus?style=social&label=Star&maxAge=2592000">
                </iframe>
                <div className="login-form">
                    <h1>React-Admin-Plus</h1>
                    <Form 
                        name="basic"
                        className="form"
                        size="large"
                        onFinish={onFinish}
                        style={{fontSize: "20px"}}>
                        

                        <Form.Item
                            label="账号"
                            name="username"
                            rules={[{ required: true, message: MESSAGE_CONFIG.usernameEmpty }]}>
                            <Input placeholder="请输入账号"/>
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: MESSAGE_CONFIG.passwordEmpty }]}>
                            <Input.Password placeholder="请输入密码"/>
                        </Form.Item>

                        <Form.Item>
                            <div className="login-btn">
                                <Button type="primary"
                                    htmlType="submit"
                                    style={{width: "100%"}}
                                    loading={loading}>登录</Button>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <div className="tips">*账号密码随便输入</div>
                        </Form.Item>
                    </Form>
                    
                </div>
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
        this.setState({ loading: true })
        const { username } = form;
        // 模拟请求
        setTimeout(() => {
            // 将用户姓名存入localStorageb并提示登录成功
            new StorageMethods().set('username', username);
            message.success(MESSAGE_CONFIG.logoSuccess);
            this.setState({ loading: false })
            // 跳转到home页
            this.props.history.push({ pathname: '/home', state: form })
        }, 2000)
    };
}