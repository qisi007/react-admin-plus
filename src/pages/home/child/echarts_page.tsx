import React, { Component } from 'react';
import { TabItem } from "../../../interface/home_interface";
import ReactEcharts from "echarts-for-react";
import { Button } from "antd";
interface Props {
  prop: TabItem
}

interface State {
  bgc: string
}


export default class Page extends Component<Props, State> {
  constructor ( props: Props) {
    super(props);
    this.state = {
      bgc: '#2c343c'
    }

  }

  render = () => {
    // let { title } = this.props.prop;
    let { bgc } = this.state;
    const option = {
      backgroundColor: bgc,
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data: [
            { value: 235, name: '视频广告' },
            { value: 274, name: '联盟广告' },
            { value: 310, name: '邮件营销' },
            { value: 335, name: '直接访问' },
            { value: 400, name: '搜索引擎' }
          ],
          roseType: 'angle',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };

    let { changeBGC } = this;

    return (
      <div>
        <ReactEcharts
          option={option}
          style={{ width: '1000px' }}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"} />
        <Button onClick={changeBGC}>change</Button>
      </div>
    )
  }

  changeBGC = () => {
    this.setState({
      bgc: this.state.bgc === '#ccc' ? '#2c343c' : '#ccc'
    })
  }
}