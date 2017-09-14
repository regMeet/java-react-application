import { combineReducers } from 'redux';
import MarkerGETReducer from './reducer_markers_get';

// const rootReducer = combineReducers(
//   markers: MarkerGETReducer
// });

const rootReducer = MarkerGETReducer;

export default rootReducer;
