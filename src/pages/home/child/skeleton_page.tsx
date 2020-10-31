import React, { Component } from 'react';
import { TabItem } from "../../../interface/home_interface";
import { Skeleton, Space, Divider, Switch, Form, Radio } from 'antd';
interface Props {
    prop: TabItem
}

interface State {
    active: boolean,
    size: any,
    buttonShape: any,
    avatarShape: any,
    [prop: string]: any
}

export default class SkeletonPage extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            active: false,
            size: 'default',
            buttonShape: 'default',
            avatarShape: 'circle',
        };

    }

    handleActiveChange = (checked: boolean) => {
        this.setState({ active: checked });
    };

    handleSizeChange = (e: any) => {
        this.setState({ size: e.target.value });
    };

    handleShapeChange = (prop: string) => (e: any) => {
        this.setState({ [prop]: e.target.value });
    };
    render = () => {
        const { active, size, buttonShape, avatarShape } = this.state;
        return (
            <>
                
                <Form layout="horizontal" style={{ margin: '16px 10px' }}>
                    <Form.Item label="动画">
                        <Switch checked={active} onChange={this.handleActiveChange} />
                    </Form.Item>
                    <Form.Item label="大小">
                        <Radio.Group value={size} onChange={this.handleSizeChange}>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="large">Large</Radio.Button>
                            <Radio.Button value="small">Small</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="形状">
                        <Radio.Group value={buttonShape} onChange={this.handleShapeChange('buttonShape')}>
                            <Radio.Button value="default">Default</Radio.Button>
                            <Radio.Button value="round">Round</Radio.Button>
                            <Radio.Button value="circle">Circle</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="头像形状">
                        <Radio.Group value={avatarShape} onChange={this.handleShapeChange('avatarShape')}>
                            <Radio.Button value="square">Square</Radio.Button>
                            <Radio.Button value="circle">Circle</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Form>
                <br />
                <br />
                <br />
                <br />
                <Space>
                    <Skeleton.Button active={active} size={size} shape={buttonShape} />
                    <Skeleton.Button active={active} size={size} shape={buttonShape} />
                    <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
                    <Skeleton.Input style={{ width: 200 }} active={active} size={size} />
                </Space>
                <br />
                <br />
                <Skeleton.Image />
                <Divider />
            </>
        );
    }
}