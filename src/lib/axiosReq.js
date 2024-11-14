import { handleApiError } from '@/utils/errorHander';
import axios from 'axios';

const besakinaApi = axios.create({
    baseURL: 'https://besakina.com/dev/api/',
    timeout: 10000
});


export async function _GET(enpoint) {
    try {
        const { data } = await besakinaApi.get(enpoint);
        return data;
    } catch (error) {
        handleApiError(error)
    }
}


export async function _POST(enpoint, body) {
    try {
        const { data } = await besakinaApi.post(enpoint, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data;
    } catch (error) {
        handleApiError(error)
    }
}

export async function _PUT(enpoint, body) {
    try {
        const { data } = await besakinaApi.put(enpoint, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data;
    } catch (error) {
        handleApiError(error)
    }
}


export async function _DELETE(enpoint) {
    try {
        const { data } = await besakinaApi.delete(enpoint, body, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return data;
    } catch (error) {
        handleApiError(error)
    }
}



