import axios from 'axios';

async function getApiData(API_URL) {
    return await fetch(API_URL)
        .then(res => res.json())
        .then((data) => data);
}

export function apiCall(API_URL) {
    return axios.get(API_URL)
        .then(response => response.data)
        .catch(error => error);
}

export { getApiData };