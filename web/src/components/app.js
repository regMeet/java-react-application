import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMarkers } from '../actions';

import MarkerList from './marker_list';
import Header from './header.js';

class App extends Component {

  componentDidMount() {
    this.props.fetchMarkers();
  }

  render() {
    if (!this.props.markers){
      return <div>Loading...</div>
    }

    return (
      <div>
        <Header />
        <MarkerList markers={this.props.markers}/>
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
