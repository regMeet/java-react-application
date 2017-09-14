import React, { Component } from 'react';

const MarkerDetail = ( {marker, update}) => {

    return (
        <li className="list-group-item" >
            <div>
                Latitud {marker.lat}
            </div>
            <div>
                Longitud {marker.lng}
            </div>
            <div><button onClick={() => update(marker)}>Console info</button></div>
        </li>
    );

}

export default MarkerDetail;