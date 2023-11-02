import axios from 'axios';
import {api} from '../../api_config';


//Register user
const registerUser = async (userData) => {
    const response = await api.post('user/register', userData);
    if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
}

//Register organizer
const registerOrganizer = async (userData) => {
    const response = await api.post("user/registerOrganizer", userData);
    if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
}


//Login user
const loginUser = async (userData) => {
    const response = await api.post( 'user/login', userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data;
}

//Logout user
const logoutUser = async () => {
    const response = await api.delete('user/logout');
    if (response.status !== 200) {
        return response.data;
    }
    localStorage.removeItem('user');
}

const updateUser = async (id) => {
    console.log("test");
    const response = await api.post('user/personal-info', id)
    if (response.status !== 400) {
        localStorage.setItem('user', JSON.stringify(response.data.message))
    }
    return response.data.message; 
}

const authService = {
    registerUser, registerOrganizer, loginUser, updateUser, logoutUser
}

export default authService