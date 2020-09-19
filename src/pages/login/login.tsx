import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Form, Input, Button, message } from 'antd';
import { loginForm } from '../../interface/login_interface';

// prop接口
interface Prop {
    history: any
}

// state接口
interface State {
    loading: boolean
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
    constructor ( prop: Prop) {
        super(prop);
        this.state = {
            loading: false
        }
    }

    render() {
        let { onFinish } = this;
        let { loading } = this.state;
        return (
            <div id="login">
                <Form
                    {...layout}
                    name="basic"
                    className="form"
                    size="large"
                    onFinish={onFinish}>
                    <Form.Item
                        label="账号"
                        name="username"
                        rules={[{ required: true, message: '请输入账号！' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: '请输入密码！' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary"
                                htmlType="submit"
                                loading={loading}>
                            登录
                        </Button>
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
        message.success('登录成功！');
        // 跳转到home页
        this.props.history.push({pathname: '/home', state: form})
    };
}