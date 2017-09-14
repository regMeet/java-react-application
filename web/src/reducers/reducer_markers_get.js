import _ from 'lodash';
import {FETCH_MARKERS} from '../actions';

const INITIAL_STATE = {
  markers: {}
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case FETCH_MARKERS:
            // console.log(action.payload.data);
            // {4: marker}
            return {...state, markers: _.mapKeys(action.payload.data, 'id')};
            //return {...state, markers: action.payload.data.map(e => e.id)};
            // return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }

}
