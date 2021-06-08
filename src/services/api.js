import axios from 'axios';

//6e508c13da1fc11059ea9be43c0414da57750c71

//https://api-ssl.bitly.com/v4/

export const key ='6e508c13da1fc11059ea9be43c0414da57750c71';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
    }
})

export default api;



