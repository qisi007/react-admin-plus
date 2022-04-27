import React, { Component } from 'react';
import { TabItem } from "../../../interface/home_interface";
import ReactEcharts from "echarts-for-react";
import { Modal } from 'antd';
import { echartsList } from '../../../config/echarts_mock';


interface Props {
  prop: TabItem
}

interface State {
  visible: boolean
  modalWidth: number  
  echartsDetail: any
}


export default class Page extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      modalWidth: 1200,
      echartsDetail: {}
    }

  }

  createList (that: any) {

    return echartsList.map( (el: any, index: number) => {
      return (
          <li className="echarts-page_list_item" 
              key={index}>
            <div className="echarts-main_body">
              <ReactEcharts
                option={el.option}
                notMerge={true}
                lazyUpdate={true}
                className="echarts-main"
                theme={"theme_name"} />
            </div>
            <p className="echarts-main_title" onClick={() => that.openEachartsDetail(el)}>{el.title}</p>
          </li>
      )
    })
  }

  openEachartsDetail ( details: any) {
    this.setState({
      echartsDetail: details
    })

    this.showModal()
  }

  render = () => {
    let { visible, modalWidth, echartsDetail } = this.state;
    let { handleCancel, createList } = this;
    let that = this;
    return (
      <div className="echarts-page">
        <ul className="echarts-page_list">
          {createList(that)}
        </ul>

        <Modal 
          width={modalWidth}
          title={echartsDetail.title}
          visible={visible}
          onCancel={handleCancel}
          footer={null}>
          <ReactEcharts
                option={echartsDetail.option}
                notMerge={true}
                lazyUpdate={true}
                className="echarts-main_detail"
                theme={"theme_name"} />
        </Modal>
      </div>
    )
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
   * @name 打开弹窗
   * @author liuguisheng
   * @version 2020-09-14 16:09:37 星期一
   */
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
}