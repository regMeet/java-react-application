import axios from 'axios';

export const FETCH_MARKERS = 'fetch_markers';

const ROOT_URL = 'http://localhost:8089';

export function fetchMarkers() {
    const request = axios.get(`${ROOT_URL}/markers`);

    return {
        type: FETCH_MARKERS,
        payload: request
    };
}
