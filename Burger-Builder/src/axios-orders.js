import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-d8732-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;