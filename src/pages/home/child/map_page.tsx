import React, { Component } from 'react';
import { Map  } from 'react-amap';

interface Props {
 
}

interface State {
    mapPlugins: string[]
}

const YOUR_AMAP_KEY = "35234e379a6e1c2ae31a5ca33e66a2cc";
const VERSION = "1.4.15"
export default class MapPage extends Component<Props, State> {
    constructor ( props: Props) {
        super(props)

        this.state = {
            mapPlugins: ['Scale', 'ToolBar', 'MapType', 'OverView',]
        }

    }


    render() {
       const { mapPlugins } = this.state;
        return (
            <div className="map-page">
                <Map amapkey={YOUR_AMAP_KEY} 
                    plugins={mapPlugins}
                    version={VERSION}
                    zoom={10}
                    />
            </div>
        )
    }

}