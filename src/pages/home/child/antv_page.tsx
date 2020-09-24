import React, {Component} from 'react';
import { TabItem } from "../../../interface/home_interface";
interface Props {
    prop: TabItem
}

interface Props {

}

interface State {

}

export default class Page extends Component<Props, State> {
  render = () => {
    let { title } = this.props.prop;
    return (
        <div>{title}</div>
    )
  }
}