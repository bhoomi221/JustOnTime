import axios from 'axios';
import {api} from '../../api_config.js';

//Load Unverified Events
const loadEvents = async () => {
    const response = await api.get('admin/getUnverifiedEvents');
    return response.data;
}

export const EventStatus = {
    REJECTED: "REJECTED",
    UNDER_REVIEW: "UNDER_REVIEW",
    NEEDS_RESUBMISSION: "NEEDS_RESUBMISSION",
    ONGOING: "ONGOING",
    COMPLETED: "COMPLETED",
    CANCELED: "CANCELED"
}

//Verify Event
const verifyEvent = async (eventId) => {
    const body = {
        eventId: eventId,
        eventStatus: EventStatus.ONGOING
    }
    const response = await api.post( 'admin/updateEventStatus', body);
    console.log(response.data)
    return response.data;
}


//Reject Event
const rejectEvent = async (eventId) => {
    const body = {
        eventId: eventId,
        eventStatus: EventStatus.REJECTED
    }
    const response = await api.post('admin/updateEventStatus', body);
    console.log(response.data)
    return response.data;
}


export { loadEvents, verifyEvent, rejectEvent }