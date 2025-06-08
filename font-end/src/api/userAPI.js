import API from '../configs/api';
import axios from 'axios'

export const login = async (email, password) => {
    return await axios.post(`${API}/user/login`, {
        email,
        password,
    });
};

export const test = async () => {

}