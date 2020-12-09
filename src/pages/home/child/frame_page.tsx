import React, {Component} from 'react';
import { TabItem } from "../../../interface/home_interface";
interface Props {
    prop: TabItem
}

interface State {
    scrolling: any

}

export default class FramePage extends Component<Props, State> {
    constructor ( props: Props ) {
        super(props)
        this.state = {
            scrolling: 'no'
        }
    }
    render = () => {
        console.log(this.props)
        let { title, content="" } = this.props.prop;
        const { scrolling } = this.state
        return (
            <>
                <p>{title}</p>
                <iframe className="iframe-box" scrolling={scrolling} title="iframe" src={content}></iframe>
            </>
        )
    }
}