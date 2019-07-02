import axios from 'axios';

const KEY = 'AIzaSyAdby0Bur1-107cXfMgSWkjDwOHOYS8RMU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});