import axios from 'axios'

const API_URL = 'https://justontime-f6fi.onrender.com/api'

//resend code to the user
const verifyEmail = async (email, token) => {
    const requestURL = API_URL + '/organizer/verifyemail/' + email + "/" + token;
    console.log(requestURL)
    const response = await axios.post(requestURL);
    return response;
}

export { verifyEmail }