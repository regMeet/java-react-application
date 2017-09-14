import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../actions';

import MarkerList from './marker_list';
import Header from './header.js';
import MapGoogle from './map_google';

class App extends Component {

  componentDidMount() {
    this.props.fetchMarkers();
  }

  render() {
    if (!this.props.markers){
        return <div>Loading...</div>
    }


    const style = {
        width: '80vw',
        height: '100vh'
    }

    return (
        <div>
            <Header />
            <MarkerList markers={this.props.markers}/>


            <div style={style}>
              <span>map me!</span>
              <MapGoogle lat={-34.397} lng={150.644} />
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    markers: state.markers
  }
}


export default connect(mapStateToProps, { fetchMarkers })(App);
