import axios from 'axios'
import {api} from '../../api_config.js';


//Register user
const loadOrganizers = async () => {
    const response = await api.get( 'admin/getUnverifiedOrganizers');
    return response.data;
}

const OrganizerStatus = {
    REJECTED: "REJECTED",
    VERIFIED: "VERIFIED",
    SIGNUP_NOT_COMPLETE: "SIGNUP_NOT_COMPLETE",
    VERIFICATION_IN_PROGRESS: "VERIFICATION_IN_PROGRESS",
    NEEDS_RESUBMISSION: "NEEDS_RESUBMISSION"
}

//Verify Organizer
const verifyOrganizer = async (email) => {
    const body = {
        email: email,
        verificationStatus: OrganizerStatus.VERIFIED
    }
    const response = await api.post( 'admin/updateOrganizerStatus', body);
    console.log(response.data)
    return response.data;
}


//Verify Organizer
const rejectOrganizer = async (email) => {
    const body = {
        email: email,
        verificationStatus: OrganizerStatus.REJECTED
    }
    const response = await api.post(  'admin/updateOrganizerStatus', body);
    console.log(response.data)
    return response.data;
}


export {loadOrganizers, verifyOrganizer, rejectOrganizer}