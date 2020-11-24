import axios from 'axios';

const api = axios.create({
    baseURL:'https://vps-3922624.artcopias.com.br:1342',
});

export default api;