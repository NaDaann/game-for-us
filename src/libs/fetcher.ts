import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

export const fetcher = async (endpoint: string) => {
    const url = `${API_URL}/${API_VERSION}${endpoint}`;
    return axios.get(url).then(res => res.data);
}
