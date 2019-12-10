import Axios from 'axios';

const instance = Axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
    withCredentials: true,
});

export const getBooksAPI = async (value) => {
    const res = await instance.get('volumes?q=' + value);
    return res.data;
}