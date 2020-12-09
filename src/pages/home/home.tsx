import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import HomeStore from "../../store/home";
import GlobalConfigStore from "../../store/global_config";
import { Menu, Tabs } from "antd";
import GlobleSetting from "../../components/business/globle_setting";
import { HomeService } from "../../service/home_service";
import { NavItem, TabItem } from "../../interface/home_interface";
import LogoBox from "../../components/base/logo_box";
import { INITIAL_PANES, MENU_LIST } from "../../config/home_config";
import { componentFactory } from "./component_factory";
import { StorageMethods } from '../../utils/storage_utils';


const LOGO: string = require("../../assets/images/logo.png");
 
// 引入子导航
const { SubMenu } = Menu;
// 引入字标签
const { TabPane } = Tabs;

// prop接口
interface Props {
    homeStore: HomeStore
    location: any
    globalConfigStore: GlobalConfigStore
}

// state接口
interface State {
    collapsed: boolean,
    background: string,
    theme: string,
    mode: string,
    overflowY: string,
    activeKey: string,
    panes: TabItem[],
    username: string
}

@inject('homeStore')
@inject('globalConfigStore')
@observer
export default class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            collapsed: false,
            background: '#fff',
            theme: 'dark',
            mode: 'inline',
            overflowY: 'scroll',
            activeKey: '0',
            panes: INITIAL_PANES,
            username: 'admin'
        }
    }
    componentDidMount = () => {
        let username: string = new StorageMethods().get('username');
        this.setState({username})

    }
    componentDidUpdate = () => {
        // 更改激活标签页样式
        let { background } = this.state;
        let activeTab = document.querySelector('.ant-tabs-tab-active');
        let antTabsNavWrap = document.querySelector('.ant-tabs-nav');


        let antTabsTas = document.querySelectorAll('.ant-tabs-tab');

        if (activeTab) {
            (activeTab as any).style.background = background;
            (antTabsNavWrap as any).style.background = background;
            (antTabsTas as any).forEach(( el: any) =>{
                if ( background === "#fff") {
                    el.style.border=`1px solid #f0f0f0`;
                } else {
                    el.style.border=`1px solid ${background}`;
                }
            })
        } 
    }
    render = () => {
        let { createMenu, clickMenuItem, handGlobalSetting, onChange, onEdit  } = this;
        let { background, collapsed, theme, mode, panes, activeKey, username } = this.state;
        
        // 样式计算
        let tabs = document.querySelectorAll('.ant-tabs-tab');
        tabs.length && tabs.forEach( (el:any) =>  el.style.background=background);
        let logoColor: string = theme !== 'dark' ? '#001529' : '#fff';
        let color: string = background === '#fff' ? '#001529' : '#fff';
        let size: string = !collapsed ? 'large' : 'small';
        let flex: string = !collapsed ? '0 0 240px' : '0 0 75px';
        let leftBack: string = theme === 'dark' ? '#001529' : '#fff';

        return (
            <div id='home' style={{ background }}>
                <div className="left" 
                     style={{ flex,
                              background: leftBack}}>
                        <LogoBox url={LOGO} 
                            title={'React-Admin-Plus'} 
                            color={ logoColor }
                            size={size} 
                            back={leftBack}></LogoBox>
                    <Menu theme={theme as any}
                        mode={mode as any}
                        inlineCollapsed={collapsed}
                        className="meun-box"
                        defaultSelectedKeys={['index']}>
                        {/* 主页导航 */}
                        {
                            MENU_LIST.map((el:NavItem) => {
                                let { key, name } = el;
                                return <Menu.Item key={key} 
                                           onClick={() => clickMenuItem(el)}>{name}</Menu.Item>
                            })
                        }
                        {/* 树状导航 */}
                        {createMenu()}
                    </Menu>
                </div>
                <div className="right">
                    <div className="header-box">
                        {/* 顶部标签 */}
                        <Tabs type="editable-card"
                            style={{ color }}
                            hideAdd={true}
                            onChange={onChange}
                            onEdit={onEdit}
                            tabBarExtraContent={{right: <div className="header-box_right">
                                                            <div className="user-box">你好！ {username}</div>
                                                            <GlobleSetting globalConfigStore={new GlobalConfigStore()}
                                                                        handGlobalSetting={handGlobalSetting} />
                                                        </div>}}
                            activeKey={activeKey}>
                             {panes.map((pane: TabItem) => (
                                <TabPane tab={pane.title}
                                    key={pane.key}>
                                    {/* 动态标签内容 */}
                                    {componentFactory(pane)}
                                </TabPane>))}
                        </Tabs>
                    </div>
                    {/* <div className="line"></div> */}
                </div>
            </div>
        )
    }

    /**
    * @name 创建导航
    * @return { Array } 菜单列表
    * @author liuguisheng
    * @version 2020-09-14 11:11:17 星期一
    */
   createMenu = () => {
        // 获取导航树
        let NavList = HomeService.getFirstNameList();
        let { createNavItem } = this;
        // 返回组件
        return createNavItem(NavList)
    }

    /**
    * @name 创建导航子集
    * @params { Array } NavList 导航配置
    * @return { Array } 导航列表
    * @author liuguisheng
    * @version 2020-09-14 14:45:55 星期一
    */
    createNavItem = (NavList: NavItem) => {
        let { clickMenuItem, createNavItem } = this;
        // 递归创建导航
        return NavList.map((el: NavItem) => {
            if (el.children && el.children.length && Object.keys(el.children[0]).length) {
                return <SubMenu key={el.code} 
                                title={el.name}>{createNavItem(el.children)}</SubMenu>
            } else {
                return <Menu.Item key={el.code}
                                  onClick={() => clickMenuItem(el)}>{el.name}</Menu.Item>
            }
        })
    }

    /**
    * @name 点击菜单触发
    * @params { Object } navItem 导航配置
    * @author liuguisheng
    * @version 2020-09-14 14:49:56 星期一
    */
    clickMenuItem = (navItem: NavItem) => {
        // 找到标题
        let { name, path='' } = navItem;
        // 生成随机key
        let key: string = Math.random().toString();
        // // 判断是否添加过标签，添加过就不在添加并且激活的key为之前的key
        let hasTitle = INITIAL_PANES.find(el => el.title === name );
        let activeKey: string = hasTitle === undefined ? key : hasTitle.key;
        hasTitle === undefined && INITIAL_PANES.push({title: name, content: path, key });
        // // 更新状态
        this.setState({ panes: INITIAL_PANES, activeKey });
    }

    /**
    * @name 接收的子组件传递的配置
    * @params { Object } e 全局配置
    * @author liuguisheng
    * @version 2020-09-15 16:09:36 星期二
    */
    handGlobalSetting = (e: State) => {
        let { collapsed, background, theme, mode, overflowY } = e;
        this.setState({ collapsed, background, theme, mode, overflowY });
    }

    /**
    * @name 标签页change事件
    * @author liuguisheng
    * @version 2020-09-17 08:49:26 星期四
    */
    onChange = (activeKey: string) => {
        this.setState({ activeKey });
    }

    /**
    * @name 标签页编辑状态下删除事件
    * @params { String } targetKey 点击的key
    * @params { String } action 发生的动作
    * @author liuguisheng
    * @version 2020-09-17 09:05:27 星期四
    */
    onEdit = (targetKey: string, action: string) => {
        if ( action === 'remove') {
            // 找到删除的索引
            let removeIndex: number = INITIAL_PANES.findIndex( el => el.key === targetKey);
            // 判断并生成激活的key
            let activeKey: string;
            if ( removeIndex === 0 && INITIAL_PANES.length>1 ) activeKey = INITIAL_PANES[removeIndex+1].key;
            if ( removeIndex >0) activeKey = INITIAL_PANES[removeIndex-1].key;
            // 删除tab并更新
            INITIAL_PANES.splice(removeIndex, 1);
            this.setState({panes: INITIAL_PANES, activeKey});
        }
    }
}