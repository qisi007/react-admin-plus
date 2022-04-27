import React, {Component} from 'react';
interface Props {
    prop: any
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
        let { name, content="" } = this.props.prop;
        const { scrolling } = this.state
        return (
            <>
                <p>{name}</p>
                <iframe className="iframe-box" scrolling={scrolling} title="iframe" src={content}></iframe>
            </>
        )
    }
}