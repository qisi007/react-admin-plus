import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import HomeStore from "../../store/home";
import GlobalConfigStore from "../../store/global_config";
import { Menu, Tabs, Button, Tooltip } from "antd";
import GlobleSetting from "../../components/business/globle_setting";
import { HomeService } from "../../service/home_service";
import { NavItem, TabItem } from "../../interface/home_interface";
import LogoBox from "../../components/base/logo_box";
import { INITIAL_PANES, MENU_LIST } from "../../config/home_config";
import { componentFactory } from "./component_factory";
import { StorageMethods } from '../../utils/storage_utils';
import { MenuUnfoldOutlined, MenuFoldOutlined, PoweroffOutlined, CloseOutlined } from '../../config/iconfont';




const LOGO: string = require("../../assets/images/logo.png");
const HEADER: string = require("../../assets/images/header.gif");

const defaultNav = [
    {
        name: '主页',
        key: 'index'
    }
]
 
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
    username: string,
    navList: any[]
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
            activeKey: 'index',
            panes: INITIAL_PANES,
            username: 'admin',
            navList: []
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
        let { createMenu, clickMenuItem, handGlobalSetting, onChange, editTabsItem, toggleCollapsed  } = this;
        let { background, collapsed, theme, mode, panes, activeKey, username, navList } = this.state;
        
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
                <div className="home-left" 
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
                        selectedKeys={[activeKey]}
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
                <div className="home-right">
                    <div className="header-box">
                        <div className="header-box_top">
                            <Button type="text" 
                                    size="large"
                                    onClick={toggleCollapsed} >
                                {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                            </Button>

                            <div className="header-box_top_config">
                                <div className="header-box-top_user">
                                    <img src={HEADER} alt="" />
                                    <span>{username}</span>
                                </div>
                                <GlobleSetting globalConfigStore={new GlobalConfigStore()}
                                                handGlobalSetting={handGlobalSetting}></GlobleSetting>
                                <Tooltip title="退出登录">
                                    <PoweroffOutlined style={{ fontSize: '18px', color: '#4c4c4c', marginLeft: '20px', cursor: 'pointer' }} />
                                </Tooltip>
                            </div>
                        </div>
                       
                        
                        {/* 顶部标签 */}
                        <div className="card-container">
                            <Tabs type="editable-card" 
                                    hideAdd 
                                    size="small"
                                    activeKey={activeKey} 
                                    onEdit={this.editTabsItem}
                                    onChange={ this.changeTabsItem} >
                                {
                                    defaultNav.map(el => {
                                        return  <TabPane tab={el.name} key={el.key}>
                                                    <p>{el.name}</p>
                                                </TabPane>
                                    })
                                }
                                {
                                    navList.map(el => {
                                        return  <TabPane tab={el.name} key={el.key}>
                                                    <p>{el.name}</p>
                                                </TabPane>
                                    })
                                }
                            </Tabs>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
    
    editTabsItem = ( index: string, action: any) => {
        if ( index == 'index') return
        let navList = [...this.state.navList];
        if ( action == 'remove') {
            let currentIndex = navList.findIndex( el => el.key == index )
            navList.splice(currentIndex, 1)
            let length = navList.length;
            let activeKey = null;
            if ( currentIndex == length && length != 0 ) {
                activeKey = navList[currentIndex-1].key
            }else if (currentIndex == length && length == 0 ) {
                activeKey = "index"
            } else {
                activeKey = navList[currentIndex].key
            }
            this.setState({
                navList,
                activeKey
            })
        }
    }

    changeTabsItem = ( index: string) => {
        this.setState({
            activeKey: index
        })
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
                return <SubMenu key={el.key} 
                                title={el.name}>{createNavItem(el.children)}</SubMenu>
            } else {
                return <Menu.Item key={el.key}
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
        console.log(navItem)
        let navList = [...this.state.navList];
        let result = navList.find(el => el.key == navItem.key)
        if ( navItem.key !== 'index' && !result) {
            navList.push(navItem)
            this.setState({
                navList,
                activeKey: navItem.key
            })
        }
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

    /**
    * @name 展开收起菜单
    * @author liuguisheng
    * @version 2020-09-17 09:05:27 星期四
    */
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
          });

          
    }
}