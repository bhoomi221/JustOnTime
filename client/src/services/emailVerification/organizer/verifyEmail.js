import axios from 'axios'

import {api} from '../../api_config.js';

//resend code to the user
const verifyEmail = async (email, token) => {
    //const requestURL = API_URL + '/organizer/verifyemail/' + email + "/" + token;
    //console.log(requestURL)
    const response = await api.post('/organizer/verifyemail/' + email + "/" + token);
    return response;
}

export { verifyEmail }