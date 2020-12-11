import axios from 'axios';
const KEY='AIzaSyBo3LHdAJaADJ0bpJzDgbchifoqE2ekvv8';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part :'snippet',
        maxResults: 5,
        key:KEY
    }
});

//youtube.get('/search');