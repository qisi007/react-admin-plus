import React, {Component} from 'react';

interface Props {
    background: string

}

interface State {

}

export default class WaveComponent extends Component<Props, State> {

    render = () => {
        let { background = "blue"} = this.props;
        return (
            <div className="water" style={{background}}>
                <div className="box">{
                    this.props.children
                }</div>
            </div> 
        )
    }
}