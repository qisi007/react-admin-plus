



import React, { Component } from "react";
import { Button } from "antd";
import _ from "lodash";
import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);



interface Props {

}


interface State {
    widgets: any,
    layouts: object,
    cols: number
}

export default class IndexPage extends Component<Props, State> {
   
    static defaultProps = {
        className: "layout",
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        rowHeight: 100
      };

    constructor ( props: Props) {
        super(props);

        this.state = {
            layouts: {},
            widgets: [],
            cols: 0
        }

    }
    render = () => {
        let { addItem, getLayoutItem } = this;
        return (
            // <div style={{width: '100%', marginTop: '1000px'}}>
            //     <Button onClick={ addItem }>添加</Button>
            //     <ResponsiveReactGridLayout className="layout"
            //                                 style={{width: '1000px', height: '100vh'}}
            //                               {...this.props}
            //                                onLayoutChange={( no: any, layouts: object ) => this.onLayoutChange( layouts )}
            //                                onBreakpointChange={( breakpoint: any, cols: number ) => this.onBreakpointChange(breakpoint, cols)}>
            //         {getLayoutItem()}
            //     </ResponsiveReactGridLayout>
            // </div>

            <div>主页</div>
        )
    }

    addItem = () => {

        let item = {
            x: (this.state.widgets.length * 3)  % (this.state.cols || 12),
            y: Infinity,
            w: 2,
            h: 2,
            i: new Date().getTime().toString()
        }
        this.setState({
            widgets: this.state.widgets.concat({...item})
        })
    }

    removeItem = ( i: number) => {
        this.setState({
            widgets: this.state.widgets.filter((item: any,index: number) => index !==i)
        });
    }

    getLayoutItem = () => {
        let { removeItem } = this;
        return _.map(this.state.widgets, ( item, index) => {
            return(
                <div key={item.i} date-grid={index}>
                    <span onClick={() => removeItem(index as any)}>X</span>
                </div>
            )
        } )
    }

    onLayoutChange = ( layouts: object) => {
        // console.log(layouts,11)
        this.setState({ layouts })
    }

    onBreakpointChange(breakpoint: any, cols: number) {
        // this.setState({
        //   cols: cols
        // });
      }
}