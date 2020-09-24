import React, {Component} from 'react';
import { TabItem } from "../../../interface/home_interface";
interface Props {
    prop: TabItem
}

interface State {

}

export default class FramePage extends Component<Props, State> {
    render = () => {
        let { title } = this.props.prop;
        return (
            <div>{title}</div>
        )
    }
}