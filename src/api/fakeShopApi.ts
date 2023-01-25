import axios, { AxiosHeaders } from 'axios';

const fakeShopApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
});


export default fakeShopApi;