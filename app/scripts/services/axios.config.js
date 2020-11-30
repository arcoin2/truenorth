import axios from 'axios';

const EXTERNAL_URL = `http://worldtimeapi.org/api`;
const LOCAL_URL = `http://localhost:3035/`;

const axiosInstance = axios.create({
    baseURL: EXTERNAL_URL ,
    timeout: 30000,
    withCredentials: true
});

export default axiosInstance;