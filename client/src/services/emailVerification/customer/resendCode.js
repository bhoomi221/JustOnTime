import axios from 'axios'

import {api} from '../../../api_config.js';

//resend code to the user
const resendCode = async () => {
    // expect the email to be in the store somehow
    const user = {
        email: "youomachi@gmail.com"
    }
    const response = await api.post('/customer/resendcode', user);
    console.log(response.data);
    return response.data

}

export { resendCode  }