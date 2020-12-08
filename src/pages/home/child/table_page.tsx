import React, {Component} from 'react';

import { Table, Radio, Input } from 'antd';

interface Props {

}

interface State {
    bordered: boolean
    loading: boolean
    title: any
    isTitle: boolean
    titleContent: string
    size: any
    footer: any
    isFooter: boolean
    footerContent: string
    tableLayout: any
    expandable: any
    isExpandable: boolean
    top: any
    bottom: any
}


const columns: any = [
    {
      title: 'Full Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Column 1',
      dataIndex: 'address',
      key: '1',
    },
    {
      title: 'Column 2',
      dataIndex: 'address',
      key: '2',
    },
    {
      title: 'Column 3',
      dataIndex: 'address',
      key: '3',
    },
    {
      title: 'Column 4',
      dataIndex: 'address',
      key: '4',
    },
    {
      title: 'Column 5',
      dataIndex: 'address',
      key: '5',
    },
    {
      title: 'Column 6',
      dataIndex: 'address',
      key: '6',
    },
    {
      title: 'Column 7',
      dataIndex: 'address',
      key: '7',
    },
    { title: 'Column 8', dataIndex: 'address', key: '8' },
    { title: 'Column 9', dataIndex: 'address', key: '9' },
    { title: 'Column 10', dataIndex: 'address', key: '10' },
    { title: 'Column 11', dataIndex: 'address', key: '11' },
    {
      title: 'Action',
      key: 'operation',
      render: () => <a>action</a>,
    },
];
  
const data: any = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
        description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`
    });
}

const optionsWithDisabled = [
    { label: '带边框', value: true },
    { label: '不带边框', value: false },
];

const optionsWithLoading = [
    { label: '打开', value: true },
    { label: '关闭', value: false },
];

const optionsWithCommon = [
    { label: '是', value: true },
    { label: '否', value: false },
];

const optionsWithSize = [
    { label: '默认', value: 'default' },
    { label: '中等', value: 'middle' },
    { label: '偏小', value: 'small' },
];

const optionsWithlayout = [
    { label: '默认', value: undefined },
    { label: '固定', value: 'fixed' },
    { label: '自适应', value: 'auto' },
];

const optionsWithTop = [
    { label: '默认', value: 'topLeft' },
    { label: '固定', value: 'topCenter' },
    { label: '自适应', value: 'topRight' },
    { label: '自适应', value: 'none' },
]

const optionsWithBottom = [
    { label: '左', value: 'bottomLeft' },
    { label: '中', value: 'bottomCenter' },
    { label: '右', value: 'bottomRight' },
];

const defaultTitle: any = () => '我是标题';
const defaultFooter: any = () => '我是页脚';
const expandable = { expandedRowRender: (record: any) => <p>{record.description}</p> };

export default class TablePage extends Component<Props, State> {
    constructor ( props: Props) {
        super(props)

        this.state = {
            bordered: false,
            loading: false,
            title: undefined,
            isTitle: false,
            titleContent: '',
            size: 'default',
            footer: undefined,
            isFooter: false,
            footerContent: '',
            tableLayout: undefined,
            expandable: undefined,
            isExpandable: false,
            top: 'none',
            bottom: 'bottomRight'
        }

    }

    render = () => {
        const { 
            bordered, 
                loading, 
                title, 
                isTitle, 
                titleContent, 
                size, 
                footerContent, 
                footer, 
                isFooter,
                tableLayout,
                expandable,
                isExpandable,
                top,
                bottom
            } = this.state;
        const { 
            onChangeBordered, 
            onChangeLoading, 
            onChangeTitle, 
            onChangeTitleContent, 
            onChangeSize,
            onChangeFooter, 
            onChangeFooterContent,
            onChangeLayout,
            onChangeExpandable,
            onChangeTop,
            onChangeBottom
        } = this;
        
        return (
            <div className="table-page">
                <ul className="table-page_setting">
                    <li className="table-page_setting_item">
                        <div className="label">是否带边框：</div>
                        <Radio.Group options={optionsWithDisabled}
                                    onChange={(e)=>onChangeBordered(e, this)}
                                    value={bordered}
                                    optionType="button"
                                    buttonStyle="solid"/>
                    </li>
                    <li className="table-page_setting_item">
                        <div className="label">loading：</div>
                        <Radio.Group options={optionsWithLoading}
                                    onChange={(e)=>onChangeLoading(e, this)}
                                    value={loading}
                                    optionType="button"
                                    buttonStyle="solid"/>
                    </li>
                    <li className="table-page_setting_item">
                        <div className="label">是否显示标题：</div>
                        <Radio.Group options={optionsWithCommon}
                                    onChange={(e)=>onChangeTitle(e, this)}
                                    value={isTitle}
                                    optionType="button"
                                    buttonStyle="solid"/>
                    </li>
                    {
                        isTitle &&  <li className="table-page_setting_item">
                                        <div className="label">标题内容：</div>
                                        <Input placeholder="请输入标题内容" 
                                               style={{width: '300px'}}
                                               value={titleContent}
                                               onChange={(e)=>onChangeTitleContent(e, this)}/>
                                    </li>
                    }
                    <li className="table-page_setting_item">
                        <div className="label">表格尺寸： </div>
                        <Radio.Group options={optionsWithSize}
                                    onChange={(e)=>onChangeSize(e, this)}
                                    value={size}
                                    optionType="button"
                                    buttonStyle="solid"/>
                    </li>
                    <li className="table-page_setting_item">
                        <div className="label">是否显示页脚：</div>
                        <Radio.Group options={optionsWithCommon}
                                    onChange={(e)=>onChangeFooter(e, this)}
                                    value={isFooter}
                                    optionType="button"
                                    buttonStyle="solid"/>
                    </li>
                    {
                        isFooter &&  <li className="table-page_setting_item">
                                        <div className="label">页脚内容：</div>
                                        <Input placeholder="请输入页脚内容" 
                                               style={{width: '300px'}}
                                               value={footerContent}
                                               onChange={(e)=>onChangeFooterContent(e, this)}/>
                                    </li>
                    }
                    <li className="table-page_setting_item">
                        <div className="label">表格布局：</div>
                        <Radio.Group options={optionsWithlayout}
                                    onChange={(e)=>onChangeLayout(e, this)}
                                    value={tableLayout}
                                    optionType="button"
                                    buttonStyle="solid"/>
                    </li>
                    <li className="table-page_setting_item">
                        <div className="label">是否可以折行：</div>
                        <Radio.Group options={optionsWithCommon}
                                    onChange={(e)=>onChangeExpandable(e, this)}
                                    value={isExpandable}
                                    optionType="button"
                                    buttonStyle="solid"/>
                    </li>
                    {/* <li className="table-page_setting_item">
                        <div className="label">分页在顶部：</div>
                        <Radio.Group options={optionsWithTop}
                                    onChange={(e)=>onChangeTop(e, this)}
                                    value={top}
                                    optionType="button"
                                    buttonStyle="solid"/>
                    </li> */}
                    <li className="table-page_setting_item">
                        <div className="label">分页位置：</div>
                        <Radio.Group options={optionsWithBottom}
                                    onChange={(e)=>onChangeBottom(e, this)}
                                    value={bottom}
                                    optionType="button"
                                    buttonStyle="solid"/>
                    </li>
                </ul>
                <div className="table-page_body">
                    <Table bordered={bordered} 
                           loading={loading}
                           columns={columns} 
                           dataSource={data} 
                           size={size}
                           title={title}
                           footer={footer}
                           tableLayout={tableLayout}
                           expandable={expandable}
                           pagination={{ position: [this.state.top, this.state.bottom] }}
                           scroll={{ x: 1000, y: 600 }} />
                </div>
            </div>
        )
    }

    // 改变边框样式
    onChangeBordered ( e: any, that: any ) {
        that.setState({ bordered: e.target.value })  
    }

    // 控制loading
    onChangeLoading ( e: any, that: any ) {
        that.setState({ loading: e.target.value })  
    }
    
    // 是否显示标题
    onChangeTitle ( e: any, that: any ) {
        let { value } = e.target;
        that.setState({ 
            isTitle: value,
            title: value ? defaultTitle : undefined,
            titleContent: '我是标题'
        })  
    }

    // 改变标题内容
    onChangeTitleContent ( e: any, that: any ) {
        let value = e.target.value
        let title: any = () => value
        that.setState({ titleContent: value, title })
    }

    // 是否显示页脚
    onChangeFooter ( e: any, that: any ) {
        let { value } = e.target;
        that.setState({ 
            isFooter: value,
            footer: value ? defaultFooter : undefined,
            footerContent: '我是页脚'
        })  
    }

    // 改变页脚内容
    onChangeFooterContent ( e: any, that: any ) {
        let value = e.target.value
        let footer: any = () => value
        that.setState({ footerContent: value, footer })
    }

    // 改变表格尺寸
    onChangeSize ( e: any, that: any ) {
        that.setState({ size: e.target.value })  
    }

    // 改变表格布局
    onChangeLayout ( e: any, that: any ) {
        that.setState({ tableLayout: e.target.value })  
    }

    // 改变是非否折行
    onChangeExpandable ( e: any, that: any ) {
        let value = e.target.value
        that.setState({ 
            isExpandable: value,
            expandable: value ? expandable : undefined, 
        })
    }

    // 改变分页顶部
    onChangeTop ( e: any, that: any ) {
        that.setState({ top: e.target.value, bottom: 'none' })  
    }

    // 改变分页底部位置
    onChangeBottom ( e: any, that: any ) {
        that.setState({ bottom: e.target.value, top: 'none' })  
    }


}