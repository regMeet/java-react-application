import React, { Component } from 'react';
import _ from 'lodash';
import MarkerDetail from './marker_detail';

class MarkerList extends Component {

    constructor(props){
        super(props);
    }

    update = (marker) => {
        console.log("Marker id: ", marker.id);
    }

    render() {
        if (!this.props.markers){
            return <div>Loading...</div>
        }

        return (
            <ul className="col-md-4 list-group">
                {
                    _.map(this.props.markers, marker => (
                        <MarkerDetail marker={marker} update={this.update} key={marker.id}/>
                        )
                    )
                }
                { true && <div>VISITED!</div> }
            </ul>
        );
    }

}

export default MarkerList;
