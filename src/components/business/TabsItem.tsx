import React, { Component,Fragment } from "react";
import { Tabs } from "antd";

// 引入字标签
const { TabPane } = Tabs;

interface Props {
    panes: any
}

interface State {

}

export default class TabsItem extends Component<Props, State> {
    render = () => {
        let { panes } = this.props;

        console.log(panes)
        return (
            <Fragment>
                <Tabs>
                {
                panes.map((pane: any) => (
                    <TabPane tab={pane.title}
                        key={pane.key}>
                        {pane.content}
                    </TabPane>
                ))
            }
            </Tabs>
            </Fragment>
        )
    }
}

