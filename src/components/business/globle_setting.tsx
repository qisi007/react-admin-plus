import React, { Component } from "react";
import { Modal, Button, Switch, Tooltip } from 'antd';
import { SETTING_ITEM_CONFIG } from '../../config/home_config';
import GlobalConfigStore from "../../store/global_config";
import { observer, inject } from "mobx-react";
import { SettingOutlined } from "@ant-design/icons";

interface Props {
    globalConfigStore: GlobalConfigStore,
    handGlobalSetting: Function
}

interface State {
    visible: boolean,
    loading: boolean,
    collapsed: boolean,
    background: string,
    theme: string,
    mode: string,
    overflowY: string
}

@inject('homeStore')
@observer
export default class GlobleSetting extends Component<Props, State> {
    constructor(prop: Props) {
        super(prop);
        this.state = {
            visible: false,
            loading: false,
            collapsed: false,
            background: '#fff',
            theme: 'light',
            mode: 'inline',
            overflowY: 'scroll'
        }
    }

    render() {
        let { handleOk, handleCancel, showModal, createConfigComponent } = this;
        let { visible, loading } = this.state;
        return (
            <div id="globle-setting">
                <Tooltip title="全局设置">
                    <SettingOutlined style={{ fontSize: '18px', color: '#4c4c4c' }} onClick={showModal} />
                </Tooltip>
                <Modal className="globle-setting_dialog"
                    title="全局设置"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>取消</Button>,
                        <Button key="submit"
                            type="primary"
                            loading={loading}
                            onClick={handleOk}>
                            确定
                        </Button>,
                    ]}>
                    {/* 配置列表 */}
                    {createConfigComponent()}
                </Modal>
            </div>
        )
    }

    /**
    * @name 打开弹窗
    * @author liuguisheng
    * @version 2020-09-14 16:09:37 星期一
    */
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    /**
    * @name 点击确定
    * @description 
    * @author liuguisheng
    * @version 2020-09-14 16:09:54 星期一
    */
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
            let { collapsed, background, theme, mode, overflowY } = this.state;
            this.props.handGlobalSetting({ collapsed, background, theme, mode, overflowY })
        }, 1000);

        
    }

    /**
    * @name 点击取消
    * @author liuguisheng
    * @version 2020-09-14 16:10:20 星期一
    */
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }

    /**
    * @name 展开收起左侧导航
    * @params { boolean } value 开关绑定的value
    * @author liuguisheng
    * @version 2020-09-14 09:56:33 星期一
    */
    toggleCollapsed = (value: boolean) => {
        this.setState({
            collapsed: value,
            // overflowY: !value ? 'scroll' : 'auto'
        });
    }

    /**
    * @name 更改主题
    * @params { boolean } value 开关绑定的value
    * @author liuguisheng
    * @version 2020-09-14 09:57:49 星期一
    */
    changeTheme = (value: boolean) => {
        this.setState({
            background: value ? '#000c27' : '#fff',
            theme: value ? 'dark' : 'light'
        });
    }

    /**
    * @name 更改主题
    * @params { boolean } value 开关绑定的value
    * @author liuguisheng
    * @version 2020-09-14 09:57:49 星期一
    */
   onlyChangeTheme = (value: boolean) => {
    this.setState({
        theme: value ? 'dark' : 'light'
    });
}

    /**
    * @name 更改导航的排列模式
    * @params { boolean } value 开关绑定的value
    * @author liuguisheng
    * @version 2020-09-14 09:58:14 星期一
    */
    changeMode = (value: boolean) => {
        this.setState({
            mode: value ? 'vertical' : 'inline',
            overflowY: !value ? 'scroll' : 'auto'
        });
    }

    /**
    * @name 创建配置组件
    * @description 
    * @return { Array } 生成的配置组件
    * @author liuguisheng
    * @version 2020-09-14 10:06:57 星期一
    */
    createConfigComponent = () => {
        // 生成设置列表并返回配置组件
        return SETTING_ITEM_CONFIG.map((el, index) => {
            let { title, checkedChildren, unCheckedChildren, event, defaultValue } = el;
            return <div className="setting-item" key={index}>
                <span className="label">{title}</span>
                <Switch checkedChildren={checkedChildren}
                    unCheckedChildren={unCheckedChildren}
                    defaultChecked={defaultValue}
                    onClick={(e) => (this as any)[event](e)} />
            </div>
        })
    }
}